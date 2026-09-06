const socials = [
  { label: 'TikTok', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#'},
]

export default function Footer() {
  return (
    <footer className="bg-[#B8C8CE] mt-20 px-10 py-10">
      <ul className="flex flex-col gap-2">
        {socials.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="font-bold text-[#5C4A3A] hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
