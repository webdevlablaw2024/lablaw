export default function SubtitleText({ classname = "", children }) {
  return <h3 className={`text-lg xl:text-xl font-medium mb-9 text-[#828282] ` + classname}>{children}</h3>;
}