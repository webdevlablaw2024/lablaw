import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function WhatWeNeedCard({ classname = "", children }) {
  return <div className="flex items-center justify-between gap-10 bg-[#FFFFFF] p-4 rounded-lg drop-shadow-xl">
    <p className="text-lg">{children}</p>
    <FontAwesomeIcon icon={faCircleCheck} style={{ width: 30, height: 30, color: "#004877" }}/>
  </div>
}