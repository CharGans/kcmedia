const socials = [
  { label: 'TikTok', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#c4a8b8] mt-20 px-10 py-10">
      <ul className="flex flex-col gap-2">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="font-bold text-[#4a1a2c] hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
