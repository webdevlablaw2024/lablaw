import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMapPin, faClock } from "@fortawesome/free-solid-svg-icons";

const PositionDetailPage = () => {
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
                    <a href="/internship" className="text-lg w-fit block border-2 border-[#D9D9D9] rounded-lg px-5 py-2 font-medium mb-10 hover:bg-[#D9D9D9]"><FontAwesomeIcon icon={faArrowLeft} className="text-lg" /> See all offers</a>
                    <h1 className="text-4xl font-bold mb-2">Fullstack Web Development</h1>
                    <p className="text-base mb-5">Fullstack Web Development involves both front-end and back-end development of web applications, utilizing languages like HTML, CSS, and JavaScript for the front-end, and languages like Python, Ruby, PHP, or JavaScript (Node.js) for the back-end. A fullstack developer typically designs, develops, and maintains web applications from start to finish, including database management, user interface, and business logic.</p>
                    <h2 className="text-3xl font-bold mb-2">What you need</h2>
                    <p>
                        As a fullstack web development, you’ll need a combination experience, skills, and qualities to excel in this dynamic role/ We’re looking for individuals who bring :
                    </p>
                    <ul className="list-disc ml-6 mb-5">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    </ul>
                    <h2 className="text-3xl font-bold mb-2">What will you do</h2>
                    <p>
                        As a fullstack web developer, there are several tasks that will be undertaken, such as :
                    </p>
                    <ul className="list-disc ml-6">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    </ul>
                </div>
                <div className="flex-none w-1/5">
                    <a href="/internship" className="text-lg w-fit block bg-[#004877] text-[#FFFFFF] rounded-lg px-5 py-2 font-medium mb-10">Apply now</a>
                    <div className="flex items-center mb-2"><FontAwesomeIcon icon={faMapPin} className="mr-3 w-5"/> Remote</div>
                    <div className="flex items-center"><FontAwesomeIcon icon={faClock} className="mr-3 w-5"/> Internship</div>
                </div>
                
            </div>

            <Footer />
        </>
    );
};

export default PositionDetailPage;
