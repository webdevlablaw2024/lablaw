import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faClock,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

export default function OpenPositionCard({ position, onClick }) {
    return (
        <div className="w-full px-8 py-5 bg-[#FFFFFF] rounded-lg text-[#333333] hover:cursor-pointer hover:bg-[#BBBBBB] transition duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
                <h5 className="text-xl font-medium mb-6">
                    {position.position}
                </h5>
                <Link
                    href={route("internship.detail", { id: position.id })}
                    className="text-base font-medium flex items-center hover:underline"
                >
                    View job{" "}
                    <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ width: 13, height: 13, paddingLeft: 10 }}
                    />
                </Link>
            </div>
            <div className="flex gap-10">
                <p className="flex items-center text-base font-medium">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ width: 15, height: 15, paddingRight: 10 }}
                    />{" "}
                    Remote
                </p>
                <p className="flex items-center  text-base font-medium">
                    <FontAwesomeIcon
                        icon={faClock}
                        style={{ width: 15, height: 15, paddingRight: 10 }}
                    />{" "}
                    Internship
                </p>
            </div>
        </div>
    );
}
