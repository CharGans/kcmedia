import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 gap-6">
      <h1 className="text-5xl font-bold">Welcome to KC Media</h1>
      <p className="max-w-xl text-lg text-gray-600">
        A woman-owned media lab helping brands, businesses, and creative entrepreneurs
        build a stronger presence online.
      </p>
      <div className="flex gap-4">
        <Link to="/packages" className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80">
          View Packages
        </Link>
        <Link to="/contact" className="px-6 py-3 border border-black rounded-full hover:bg-gray-100">
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
