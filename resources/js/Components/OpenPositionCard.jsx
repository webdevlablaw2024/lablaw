import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faClock,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function OpenPositionCard({ department, division, onClick }) {
    return (
        <div className="w-full p-8 bg-[#FFFFFF] rounded-lg text-[#333333] hover:cursor-pointer hover:bg-[#BBBBBB] transition duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
                <p className="text-base font-medium">{department}</p>
                <a href="" className="text-base font-medium flex items-center hover:underline">
                    View job <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ width: 13, height: 13, paddingLeft: 10 }} />
                </a>
            </div>
            <h5 className="text-xl font-medium mb-5">{division}</h5>
            <div className="flex gap-10">
                <p className="flex items-center text-base font-medium">
                    <FontAwesomeIcon icon={faLocationDot} style={{ width: 15, height: 15, paddingRight: 10 }}/> Remote
                </p>
                <p className="flex items-center  text-base font-medium">
                    <FontAwesomeIcon icon={faClock}  style={{ width: 15, height: 15, paddingRight: 10  }} /> Internship
                </p>
            </div>
        </div>
    );
}
