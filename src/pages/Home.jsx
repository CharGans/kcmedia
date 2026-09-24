import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/ui/Card'

const btnHover = { scale: 1.03, boxShadow: '0 4px 20px rgba(139,165,176,0.35)' }
const btnTap = { scale: 0.97 }
const btnTransition = { type: 'spring', stiffness: 300, damping: 20 }

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-10">
      <h1 className="text-5xl font-bold text-[#5C4A3A]">Welcome to Over Coffee Media</h1>
      <p className="max-w-xl text-lg text-[#5C4A3A]">
        A woman-owned media lab helping brands, businesses, and creative entrepreneurs
        build a stronger presence online.
      </p>
      <div className="flex gap-4">
        <motion.div whileHover={btnHover} whileTap={btnTap} transition={btnTransition}>
          <Link to="/packages" className="block px-8 py-3 bg-[#8BA5B0] text-white rounded-full font-semibold">
            View Packages
          </Link>
        </motion.div>
        <motion.div whileHover={btnHover} whileTap={btnTap} transition={btnTransition}>
          <Link to="/contact" className="block px-8 py-3 border-2 border-[#8BA5B0] text-[#8BA5B0] rounded-full font-semibold">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
