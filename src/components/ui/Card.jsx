export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#f5e0ea] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
