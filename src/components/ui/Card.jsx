export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#EEE9E3] rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
