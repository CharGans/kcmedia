export default function Contact() {
  return (
    <section className="max-w-lg mx-auto px-6 py-20 flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="text-gray-600">We'd love to hear about your project. Click below to send us an email!</p>
      <a
        href="mailto:<your@email.com>?subject=Project%20Inquiry"
        className="bg-black text-white text-center rounded-full py-3 hover:opacity-80 transition"
      >
        Email Us
      </a>
    </section>
  )
}
