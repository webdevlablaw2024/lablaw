export default function WhatYouGotCard({ imageUrl, title }){
  return <div className="bg-[#FFFFFF] w-full rounded-lg flex flex-col items-center justify-center drop-shadow-lg pb-10">
    <img src={imageUrl} className="w-20" alt="Image" />
    <h1 className="text-base font-bold">{title}</h1>
  </div>
}