export default function HowToApplyCard({ index ,imageUrl, title, description }){
  return <div className="flex flex-col items-center text-center bg-[#FFFFFF] drop-shadow-lg p-5 rounded-md">
    <h3 className="text-lg  font-medium mb-1">{index}</h3>
    <div className="w-10 h-0.5 bg-black mb-5"></div>
    <img src={imageUrl} className="mb-3 w-16" alt="Image" />
    <h1 className="text-lg font-medium  mb-4">{title}</h1>
    <p className="text-xs">{description}</p>
  </div>
}