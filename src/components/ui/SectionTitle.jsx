export default function SectionTitle({ children }) {
  return (
    <div className="relative flex justify-center mb-[-1px]">
      <div className="bg-[#f5c8dc] rounded-t-full px-16 pt-6 pb-4 text-center">
        <h1 className="text-3xl font-bold text-[#4a1a2c]">{children}</h1>
      </div>
    </div>
  )
}
