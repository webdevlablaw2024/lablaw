import Footer from "@/Components/Footer";
import KeySuccessCard from "@/Components/KeySuccessCard";
import Header from "@/Components/Navbar";
import SubtitleText from "@/Components/SubtitleText";
import TeamCard from "@/Components/TeamCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved, faEarthEurope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHandshake, faCircleCheck, faComments } from "@fortawesome/free-regular-svg-icons";

const TeamPage = () => {
    return (
        <>
            <Header />
            <div className="w-11/12 lg:w-5/6 mx-auto container mb-24 pt-32">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold mb-10 text-center text-2xl md:text-3xl lg:text-4xl">
                        Work Together,
                        <br /> Dream Together
                    </h1>
                    <p className="text-center font-medium w-4/5 md:w-2/3 lg:w-2/5 text-md md:text-lg mb-10">
                        Coming together is a beginning, staying together is
                        progress, and working together is success.
                    </p>
                    <img
                        src="/images/background-2.png"
                        className="w-11/12 aspect-[3/2] md:aspect-[2/1] object-cover rounded-md mb-10"
                        alt=""
                    />
                    <SubtitleText>Key to Success</SubtitleText>
                    <p className="text-center font-medium w-4/5 md:w-3/5 text-md md:text-lg mt-8 mb-10">
                        Coming together is a beginning, staying together is
                        progress, and working together is success.
                    </p>
                    <div className="md:flex gap-8 mx-8 mb-10">
                        <KeySuccessCard
                            icon={faComments}
                            title="Communication"
                            description="Team communication represents all interactions and exchanges of information that occur in a team. "
                        />
                        <KeySuccessCard
                            icon={faShieldHalved}
                            title="Trusted"
                            description="Trust is the cornerstone of effective leadership and the foundation for building strong teams."
                        />
                        <KeySuccessCard
                            icon={faHandshake}
                            title="Accessible"
                            description="Accessibility is the ability for all people to access, navigate, and use environments equally"
                        />
                    </div>

                    <SubtitleText>Our Values</SubtitleText>
                    <p className="text-center font-medium w-4/5 text-md md:text-lg mt-8 mb-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis.
                    </p>
                    <div className="grid md:grid-cols-2 text-justify gap-2 md:gap-6 mx-3 md:mx-10 mb-10">
                        <div className="flex">
                            <i><img src="/vector/peoples.svg" alt="" /></i>
                            <p>
                                <span className="font-bold">Be world-class.</span> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit aute id magna.
                            </p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon
                                icon={faEarthEurope}
                                className="text-md mr-1 mt-1"
                            />
                            <p>
                                <span className="font-bold">Take responsibility.</span> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit aute id magna.
                            </p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon
                                icon={faEarthEurope}
                                className="text-md mr-1 mt-1"
                            />
                            <p>
                                <span className="font-bold">Be supportive.</span> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit aute id magna.
                            </p>
                        </div>
                        <div className="flex">
                            <FontAwesomeIcon
                                icon={faEarthEurope}
                                className="text-md mr-1 mt-1"
                            />
                            <p>
                                <span className="font-bold">Enjoy downtime.</span> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit aute id magna.
                            </p>
                        </div>
                    </div>

                    <SubtitleText>My Team Our Family</SubtitleText>
                    <p className="text-center font-medium w-4/5 text-md md:text-lg mt-8 mb-10">
                        Solidarity, Support, Success, Together Stronger!
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-28">
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                        <TeamCard />
                    </div>
                    
                    <div className="md:flex gap-8 px-8 py-10 bg-[#D0D0D0] rounded-2xl lg:w-11/12">
                        <img src="/images/person.jpeg" alt="" className="rounded-lg w-full md:w-1/3 aspect-square" />
                        <div className="flex flex-col justify-between">
                            <h1 className="font-extrabold text-2xl lg:text-4xl">Join our team</h1>
                            <p className="md:text-md lg:text-lg">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus.</p>
                            <ul className="grid grid-cols-2 gap-2 lg:gap-4 md:text-md lg:text-lg">
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Profesionals Experience</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Flexible Working Hours</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Annual team retreats</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> A great work environments</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Recomendation letter</li>
                                <li><FontAwesomeIcon icon={faCircleCheck} /> Relation</li>
                            </ul>
                            <div className="flex items-center">
                                <a href="" className="text-md font-extrabold hover:underline text-blue-600">see our job postings <FontAwesomeIcon icon={faArrowRight} className="text-sm"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default TeamPage;
