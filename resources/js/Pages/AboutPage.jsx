import Footer from "@/Components/Footer";
import KeySuccessCard from "@/Components/KeySuccessCard";
import Header from "@/Components/Navbar";
import OurValuesItem from "@/Components/OurValuesItem";
import SubtitleText from "@/Components/SubtitleText";
import TitleText from "@/Components/TitleText";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="w-full pt-40 px-[20px] md:px-[100px] xl:px-[160px] pb-20 bg-[url('/images/background-3.png')] bg-cover relative mb-20">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="md:flex gap-40 z-10 relative">
                    <p className="flex-1 text-center md:text-left text-white text-md mb-12">
                        Law Lab is a legal education platform that provides
                        information about legal knowledge. The Law Lab was
                        founded in 2022 with the aspiration of building and
                        preparing a young generation with integrity to provide
                        professional legal services.
                    </p>
                    <div className="flex-1 text-white text-center md:text-left">
                        <blockquote className="text-4xl mb-4 ">
                            "Analyzing, strategizing, and winning for you."
                        </blockquote>
                        <footer>
                            — <cite className="text-md">Lab Law</cite>
                        </footer>
                    </div>
                </div>
            </div>
            <div className="mx-[20px] md:px-[100px] lg:mx-[160px] mb-20">
                <div className="w-full flex flex-col items-center">
                    <TitleText classname="md:w-3/4 text-center">
                        Toward Legal Enlightenment: Lab Law, Your Gateway to
                        Informed Legal Empowerment.
                    </TitleText>
                    <SubtitleText classname="md:w-3/5 text-center">
                        We are thrilled to present ourselves as a company
                        committed to shaping the legal landscape, one innovative
                        solution at a time.
                    </SubtitleText>
                    <img
                        src="/images/about-team.jpg"
                        className="h-[200px] md:h-[300px] lg:h-[400px] w-full md:w-4/5 object-cover rounded-lg mb-9"
                        alt="Team Image"
                    />
                </div>
            </div>
            <div className="bg-[#EDEDED] w-full text-[#333333] px-[20px] md:px-[100px] lg:px-[160px] pt-10 pb-20 mb-20">
                <TitleText classname="mb-9 text-center">
                    Vision & Mission
                </TitleText>
                <div className="md:flex gap-8">
                    <p className="text-lg mb-6  ">
                        Building quality legal knowledge and producing a young
                        generation with integrity through easy access to social
                        media for the entire community, especially young people.
                    </p>
                    <div className="w-[1px] bg-gray-500"></div>
                    <ul className="list-disc text-lg ml-8">
                        <li>
                            Becoming a platform that provides training and a
                            forum for students to participate in providing legal
                            education and the importance of legal knowledge in
                            Indonesia.
                        </li>
                        <li>
                            Providing real legal education to the Indonesian
                            people through programs needed by the community.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-[20px] md:px-[100px] lg:px-[160px]">
                <div className="w-full text-center">
                    <TitleText>Key to Success</TitleText>
                    <SubtitleText>
                        Unlocking Your Full Potential with Resilience and
                        Determination
                    </SubtitleText>
                    <div className="md:flex md:gap-6 lg:gap-10 mb-16">
                        <KeySuccessCard
                            icon="/icons/communication.svg"
                            title="Communication"
                            description="Team communication represents all interactions and exchanges of information that occur in a team."
                        />
                        <KeySuccessCard
                            icon="/icons/trusted.svg"
                            title="Trusted"
                            description="Trust is the cornerstone of effective leadership and the foundation for building strong teams."
                        />
                        <KeySuccessCard
                            icon="/icons/accessible.svg"
                            title="Accessible"
                            description="Accessibility is the ability for all people to access, navigate, and use environments equally"
                        />
                    </div>

                    <TitleText>Our Values</TitleText>
                    <SubtitleText>
                        Uniting Purpose, Empowering Progress, Inspiring Growth
                    </SubtitleText>
                    <div className="md:grid grid-cols-2 mb-20">
                        <OurValuesItem
                            icon={"/icons/people.svg"}
                            desciption="Be world-class. Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna."
                        />
                        <OurValuesItem
                            icon={"/icons/rocket.svg"}
                            desciption="Be supportive. Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et."
                        />
                        <OurValuesItem
                            icon={"/icons/hand.svg"}
                            desciption="Take responsibility. Anim aute id magna aliqua ad ad non deserunt sunt. "
                        />
                        <OurValuesItem
                            icon={"/icons/sun.svg"}
                            desciption="Enjoy downtime. Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat."
                        />
                    </div>

                    <TitleText>Want to meet our team?</TitleText>
                    <SubtitleText>
                        Let's see who the great minds are in this company.
                    </SubtitleText>
                    <a
                        href="/soon"
                        className="rounded-full border-2 px-8 py-3 border-[#E2E2E2] font-bold text-lg"
                    >
                        <FontAwesomeIcon icon={faEye} className="mr-2" /> View
                        Team
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
