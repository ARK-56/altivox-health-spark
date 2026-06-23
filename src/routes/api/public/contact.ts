import * as React from 'react'
import { renderAsync } from '@react-email/components'
import { createClient } from '@supabase/supabase-js'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'Altivox Health Solution'
const SENDER_DOMAIN = 'notify.altivoxhealthsolution.com'
const FROM_DOMAIN = 'altivoxhealthsolution.com'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  insurance: z.string().trim().max(120).optional().or(z.literal('')),
  reason: z.string().trim().max(120).optional().or(z.literal('')),
  message: z.string().trim().min(1).max(4000),
})

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
        if (!supabaseUrl || !supabaseServiceKey) {
          return Response.json({ error: 'Server configuration error' }, { status: 500 })
        }

        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        const parsed = ContactSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json(
            { error: 'Invalid input', issues: parsed.error.flatten() },
            { status: 400 },
          )
        }

        const data = parsed.data
        const template = TEMPLATES['contact-form']
        if (!template) {
          return Response.json({ error: 'Template missing' }, { status: 500 })
        }

        const effectiveRecipient = template.to!
        const supabase = createClient(supabaseUrl, supabaseServiceKey)

        const templateData = {
          name: data.name,
          email: data.email,
          phone: data.phone || undefined,
          insurance: data.insurance || undefined,
          reason: data.reason || undefined,
          message: data.message,
          submittedAt: new Date().toISOString(),
        }

        const element = React.createElement(template.component, templateData)
        const html = await renderAsync(element)
        const text = await renderAsync(element, { plainText: true })
        const subject =
          typeof template.subject === 'function'
            ? template.subject(templateData)
            : template.subject

        const messageId = crypto.randomUUID()

        await supabase.from('email_send_log').insert({
          message_id: messageId,
          template_name: 'contact-form',
          recipient_email: effectiveRecipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabase.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: effectiveRecipient,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            reply_to: data.email,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text,
            purpose: 'transactional',
            label: 'contact-form',
            idempotency_key: messageId,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Contact enqueue failed', enqueueError)
          await supabase.from('email_send_log').insert({
            message_id: messageId,
            template_name: 'contact-form',
            recipient_email: effectiveRecipient,
            status: 'failed',
            error_message: 'Failed to enqueue contact form email',
          })
          return Response.json({ error: 'Failed to submit' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
