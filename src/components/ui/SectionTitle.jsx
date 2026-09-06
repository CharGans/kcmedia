export default function SectionTitle({ children }) {
  return (
    <div className="relative flex justify-center mb-[-1px]">
      <div className="bg-[#D6E4E8] rounded-t-full px-16 pt-6 pb-4 text-center">
        <h1 className="text-3xl font-bold text-[#5C4A3A]">{children}</h1>
      </div>
    </div>
  )
}
