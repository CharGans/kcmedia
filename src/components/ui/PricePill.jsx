export default function PricePill({ children }) {
  return (
    <div className="flex justify-center mt-6">
      <span className="bg-[#B8C8CE] text-[#5C4A3A] font-bold text-2xl px-12 py-4 rounded-full">
        {children}
      </span>
    </div>
  )
}
