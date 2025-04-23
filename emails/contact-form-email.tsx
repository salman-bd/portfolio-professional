import { Tailwind } from "@react-email/tailwind"
import { Html, Head, Body, Container, Section, Text, Heading, Hr } from "@react-email/components"

interface ContactFormEmailProps {
  name: string
}

export function ContactFormEmail({ name }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto max-w-[600px] rounded bg-white p-8">
            <Heading className="text-2xl font-bold text-gray-900">Thank you for contacting me!</Heading>
            <Text className="text-base text-gray-700">Hello {name},</Text>
            <Text className="text-base text-gray-700">
              Thank you for reaching out. I have received your message and will get back to you as soon as possible,
              usually within 24-48 hours.
            </Text>
            <Hr className="my-6 border-gray-300" />
            <Section>
              <Text className="text-sm text-gray-600">Best regards,</Text>
              <Text className="text-sm font-bold text-gray-700">Ariful Islam Shaon</Text>
              <Text className="text-sm text-gray-600">Accounts In-Charge | Financial Management Expert</Text>
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
