const packages = [
  {
    name: 'Starter',
    description: 'Perfect for getting your brand online with a clean, professional presence.',
  },
  {
    name: 'Growth',
    description: 'Strategy + content creation to grow your audience and engagement.',
  },
  {
    name: 'Full Service',
    description: 'End-to-end website, branding, content, and marketing support.',
  },
]

export default function Packages() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Packages</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        {packages.map(({ name, description }) => (
          <div key={name} className="border rounded-2xl p-6 flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
