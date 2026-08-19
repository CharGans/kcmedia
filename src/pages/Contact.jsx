import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <SectionTitle>Contact Us!</SectionTitle>
      <Card className="min-h-64 flex flex-col items-center justify-center gap-6">
        <p className="text-[#4a1a2c] text-center">
          We'd love to hear about your project. Click below to send us an email!
        </p>
        <a
          href="mailto:<your@email.com>?subject=Project%20Inquiry"
          className="px-8 py-3 bg-[#a84c7a] text-white rounded-full font-semibold hover:opacity-80 transition"
        >
          Email Us
        </a>
      </Card>
    </section>
  )
}
