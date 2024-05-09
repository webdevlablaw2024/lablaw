import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function KeySuccessCard({ icon, title, description }) {
    return (
        <>
            <div className="w-full flex flex-col items-center border-2 p-5 border-gray-300 md:w-1/3 rounded-md mb-4">
                <div className="rounded-full bg-gray-300 w-20 h-20 flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon={icon} className="text-3xl" />
                </div>
                <h3 className="font-bold text-xl mb-4">{title}</h3>
                <p className="text-center text-md">{description}</p>
            </div>
        </>
    );
}
