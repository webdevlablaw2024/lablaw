import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TitleText from "@/Components/TitleText";
import SubtitleText from "@/Components/SubtitleText";
import TeamCard from "@/Components/TeamCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ItemTabDivision from "@/Components/ItemTabDivision";

const TeamPage = () => {
    return (
        <>
            <Header />
            <div className="mx-[160px] pt-40 flex flex-col items-center">
                <TitleText classname="py-4 px-8  rounded-full border-2 border-black">
                    My Team Our Family
                </TitleText>
                <SubtitleText>
                    Solidarity, Support, Success, Together Stronger!
                </SubtitleText>
                <div className="flex gap-5 font-bold mb-10">
                    <ItemTabDivision>View all</ItemTabDivision>
                    <ItemTabDivision>Web Development</ItemTabDivision>
                    <ItemTabDivision>SMS</ItemTabDivision>
                    <ItemTabDivision>CDVE</ItemTabDivision>
                    <ItemTabDivision>Legal Secretary</ItemTabDivision>
                    <ItemTabDivision>HRD</ItemTabDivision>
                    <ItemTabDivision>Project</ItemTabDivision>
                    <ItemTabDivision>LCW</ItemTabDivision>
                    <ItemTabDivision>Public Relation</ItemTabDivision>
                </div>
                <div className="grid grid-cols-4 gap-10 mb-10">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>
                <button className="border-2 border-black font-bold py-2 px-6 rounded-full mb-20 hover:translate-y-2 transition duration-300 ease-in-out active:bg-[#BBBBBB]">
                    <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
                    Load more
                </button>
                <div className="w-full p-12 bg-[#EDEDED] rounded-lg">
                    <h2 className="text-4xl font-bold mb-1">We’re hiring</h2>
                    <h4 className="text-lg">
                        Discover Your Potential: Connect with Us Today!
                    </h4>
                    <div className="flex justify-between items-center">
                        <a
                            href=""
                            className="border-2 bg-[#FFFFFF] border-[#BBBBBB] font-bold py-2 px-6 rounded-lg hover:bg-[#BBBBBB] transition duration-300 ease-in-out"
                        >
                            Explore open roles
                        </a>
                        <div className="flex">
                            <img
                                src="./images/person.png"
                                className="w-16 rounded-full bg-[#CDCDCD]"
                                alt="person"
                            />
                            <img
                                src="./images/person.png"
                                className="w-16 rounded-full bg-[#CDCDCD]"
                                alt="person"
                            />
                            <img
                                src="./images/person.png"
                                className="w-16 rounded-full bg-[#CDCDCD]"
                                alt="person"
                            />
                            <img
                                src="./images/person.png"
                                className="w-16 rounded-full bg-[#CDCDCD]"
                                alt="person"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TeamPage;