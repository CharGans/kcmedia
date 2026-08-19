export default function Button({ children, variant = 'solid', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-full font-semibold transition hover:opacity-80'
  const variants = {
    solid: 'bg-[#a84c7a] text-white',
    outline: 'border-2 border-[#a84c7a] text-[#a84c7a]',
    pill: 'bg-[#c9afc0] text-[#4a1a2c] px-10 py-4 text-xl font-bold',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
