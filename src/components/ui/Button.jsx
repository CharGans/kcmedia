export default function Button({ children, variant = 'solid', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-full font-semibold transition hover:opacity-80'
  const variants = {
    solid: 'bg-[#8BA5B0] text-white',
    outline: 'border-2 border-[#8BA5B0] text-[#8BA5B0]',
    pill: 'bg-[#B8C8CE] text-[#5C4A3A] px-10 py-4 text-xl font-bold',
  }
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
