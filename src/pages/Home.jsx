import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-10">
      <h1 className="text-5xl font-bold text-[#5C4A3A]">Welcome to K&C Media Labs</h1>
      <p className="max-w-xl text-lg text-[#5C4A3A]">
        A woman-owned media lab helping brands, businesses, and creative entrepreneurs
        build a stronger presence online.
      </p>
      <div className="flex gap-4">
        <Link
          to="/packages"
          className="px-8 py-3 bg-[#8BA5B0] text-white rounded-full font-semibold hover:opacity-80 transition"
        >
          View Packages
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 border-2 border-[#8BA5B0] text-[#8BA5B0] rounded-full font-semibold hover:opacity-80 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
