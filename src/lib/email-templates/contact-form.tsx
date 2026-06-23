import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  phone?: string
  insurance?: string
  reason?: string
  message?: string
  submittedAt?: string
}

const ContactFormEmail = ({
  name = 'Unknown',
  email = 'unknown@example.com',
  phone,
  insurance,
  reason,
  message,
  submittedAt,
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact request from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact request</Heading>
        <Text style={subtle}>Altivox Health Solution — website contact form</Text>

        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          {phone ? <Row label="Phone" value={phone} /> : null}
          {insurance ? <Row label="Insurance" value={insurance} /> : null}
          {reason ? <Row label="Reason" value={reason} /> : null}
        </Section>

        {message ? (
          <Section style={messageBox}>
            <Text style={messageLabel}>Message</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          Submitted {submittedAt ?? new Date().toISOString()} · Reply directly to{' '}
          {email} to respond.
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowText}>
    <span style={rowLabel}>{label}: </span>
    {value}
  </Text>
)

export const template = {
  component: ContactFormEmail,
  subject: (data: Record<string, any>) =>
    `New contact request from ${data?.name ?? 'website visitor'}`,
  displayName: 'Contact form submission',
  to: 'altivoxhs@gmail.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1 555 123 4567',
    insurance: 'Medicare',
    reason: 'Verifying insurance coverage',
    message: 'I need help arranging a hospital bed for my father.',
    submittedAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const h1 = { color: '#0f172a', fontSize: '22px', margin: '0 0 4px' }
const subtle = { color: '#64748b', fontSize: '13px', margin: '0 0 20px' }
const card = {
  backgroundColor: '#f8fafc',
  border: '1px solid #e2e8f0',
  borderRadius: '12px',
  padding: '16px 20px',
}
const rowText = { color: '#0f172a', fontSize: '14px', margin: '6px 0' }
const rowLabel = { color: '#475569', fontWeight: 600 }
const messageBox = {
  marginTop: '16px',
  padding: '16px 20px',
  borderLeft: '3px solid #2563eb',
  backgroundColor: '#f1f5f9',
  borderRadius: '8px',
}
const messageLabel = {
  color: '#475569',
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  margin: '0 0 6px',
}
const messageText = { color: '#0f172a', fontSize: '14px', whiteSpace: 'pre-wrap' as const, margin: 0 }
const hr = { borderColor: '#e2e8f0', margin: '24px 0 12px' }
const footer = { color: '#94a3b8', fontSize: '12px', margin: 0 }
