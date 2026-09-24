import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Card from '../components/ui/Card'

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-8 py-12">
      <SectionTitle>Contact Us!</SectionTitle>
      <Card className="min-h-64 flex flex-col items-center justify-center gap-6">
        <p className="text-[#5C4A3A] text-center">
          We'd love to hear about your project. Click below to send us an email!
        </p>
        <motion.a
          href="mailto:<contact@overcoffeemedia.com>?subject=Project%20Inquiry"
          whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(139,165,176,0.35)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="px-8 py-3 bg-[#8BA5B0] text-white rounded-full font-semibold"
        >
          Email Us
        </motion.a>
      </Card>
    </section>
  )
}
