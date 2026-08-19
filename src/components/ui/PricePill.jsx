export default function PricePill({ children }) {
  return (
    <div className="flex justify-center mt-6">
      <span className="bg-[#c9afc0] text-[#4a1a2c] font-bold text-2xl px-12 py-4 rounded-full">
        {children}
      </span>
    </div>
  )
}
