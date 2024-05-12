import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PositionDetailPage = () => {
    return (
        <>
            <Header />
            <div className="absolute h-[314px] top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
            <div className="bg-[url('/images/background-5.png')] bg-cover bg-center h-[314px]">
                <img
                    src="/images/logo.png"
                    className="absolute top-56 left-52 w-36 rounded-xl border-[6px] bg-[#001624] border-[#FFFFFF] p-3"
                    alt="Logo"
                />
            </div>

            <div className="mx-[160px] mt-32 flex bg-red-50">
                
            </div>

            <Footer />
        </>
    );
};

export default PositionDetailPage;
