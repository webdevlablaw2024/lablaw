import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMapPin, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

const PositionDetailPage = ({position}) => {
    return (
        <>
            <Header />
            <div className="absolute h-[350px] top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className="bg-[url('/images/background-5.png')] bg-cover bg-center h-[350px]">
                <img
                    src="/images/logo.png"
                    className="absolute top-72 left-56 w-32 rounded-xl border-[6px] bg-[#001624] border-[#FFFFFF] p-3"
                    alt="Logo"
                />
            </div>

            <div className="mx-[160px] mt-32 flex gap-10">
                <div className="flex-1 w-4/5">
                    <Link
                        href="/internship"
                        className="text-lg w-fit block border-2 border-[#D9D9D9] rounded-lg px-5 py-2 font-medium mb-10 hover:bg-[#D9D9D9]"
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="text-lg"
                        />{" "}
                        See all offers
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">
                        {position.position}
                    </h1>
                    <p
                        className="mb-5"
                        dangerouslySetInnerHTML={{
                            __html: position?.description,
                        }}
                    ></p>
                </div>
                <div className="flex-none w-1/5">
                    <Link
                        href="/internship"
                        className="text-lg w-fit block bg-[#004877] text-[#FFFFFF] rounded-lg px-5 py-2 font-medium mb-10"
                    >
                        Apply now
                    </Link>
                    <div className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faMapPin} className="mr-3 w-5" />{" "}
                        Remote
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-3 w-5" />{" "}
                        Internship
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default PositionDetailPage;
