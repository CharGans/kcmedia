import { motion } from 'framer-motion'

export default function Button({ children, variant = 'solid', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-full font-semibold cursor-pointer'
  const variants = {
    solid: 'bg-[#8BA5B0] text-white',
    outline: 'border-2 border-[#8BA5B0] text-[#8BA5B0]',
    pill: 'bg-[#B8C8CE] text-[#5C4A3A] px-10 py-4 text-xl font-bold',
  }
  return (
    <motion.button
      whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(139,165,176,0.35)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
