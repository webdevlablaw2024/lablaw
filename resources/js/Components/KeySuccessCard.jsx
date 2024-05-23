export default function KeySuccessCard({ classname="", icon, title, description}) {
  return (
    <div className={`flex flex-col gap-2 justify-center items-center border-2 rounded-md p-7 mb-5 `+classname}>
      <div className="rounded-full p-4 bg-[#EDEDED]">
        <img src={icon} alt="Icon" />
      </div>
      <h3 className="text-lg xl:text-xl font-bold">{title}</h3>
      <p className="text-[#828282]">{description}</p>
    </div>
  )
}