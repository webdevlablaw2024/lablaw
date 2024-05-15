export default function OurValuesItem({ classname = "", icon, desciption }) {
  return (
    <div className="flex gap-2 text-left">
      <img src={icon} className="w-9" alt="Icon" />
      <p className="text-md xl:text-lg">{desciption}</p>
    </div>
  )
}