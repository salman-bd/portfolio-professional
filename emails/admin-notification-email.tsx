import { Tailwind } from "@react-email/tailwind"
import { Html, Head, Body, Container, Section, Text, Heading, Hr } from "@react-email/components"

interface AdminNotificationEmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export function AdminNotificationEmail({ name, email, subject, message }: AdminNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[600px] rounded bg-white p-8">
            <Heading className="text-2xl font-bold text-gray-900">New Contact Form Submission</Heading>
            <Text className="text-base text-gray-700">
              You have received a new message from your portfolio website contact form.
            </Text>
            <Hr className="my-6 border-gray-300" />
            <Section>
              <Text className="text-sm font-bold text-gray-700">Name:</Text>
              <Text className="mb-4 text-sm text-gray-700">{name}</Text>
              <Text className="text-sm font-bold text-gray-700">Email:</Text>
              <Text className="mb-4 text-sm text-gray-700">{email}</Text>
              <Text className="text-sm font-bold text-gray-700">Subject:</Text>
              <Text className="mb-4 text-sm text-gray-700">{subject}</Text>
              <Text className="text-sm font-bold text-gray-700">Message:</Text>
              <Text className="mb-4 text-sm text-gray-700 whitespace-pre-wrap">{message}</Text>
            </Section>
            <Hr className="my-6 border-gray-300" />
            <Text className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} Ariful Islam Shaon. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
