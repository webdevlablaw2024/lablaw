export default function ItemTabDivision({ classname = "", children }) {
  return <a href="#" className={`hover:bg-[#EDEDED] px-3 py-1 rounded-full transition duration-300 ease-in-out `+classname}>{children}</a>
}