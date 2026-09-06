export default function ProfileCard({ name, title, bio, imgSrc }) {
  return (
    <div className="bg-[#EEE9E3] rounded-2xl flex flex-col items-center p-8 gap-4">
      <div className="w-64 h-64 rounded-full bg-white flex items-center justify-center overflow-hidden">
        {imgSrc
          ? <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
          : <span className="text-[#5C4A3A] text-sm">{name}</span>
        }
      </div>
      <p className="text-[#8BA5B0] font-bold text-lg tracking-wide">{title}</p>
      <p className="text-[#5C4A3A] text-center">{bio}</p>
    </div>
  )
}
