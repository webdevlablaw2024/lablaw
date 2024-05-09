import AboutCard from "@/Components/AboutCard";
import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import SubtitleText from "@/Components/SubtitleText";

const AboutPage = () => {
    return (
        <>
            <Header />
            <div className="w-full h-screen md:h-96 bg-cover bg-center bg-[url('/images/background-3.png')] flex items-center justify-start relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="mx-10 z-10 relative flex flex-col-reverse gap-10 md:gap-20 text-white text-center md:text-start md:flex-row md:top-5 xl:mx-20">
                    <p className="basis-1/2 xl:text-lg">
                        Law Lab is a legal education platform that provides
                        information about legal knowledge. The Law Lab was
                        founded in 2022 with the aspiration of building and
                        preparing a young generation with integrity to provide
                        professional legal services.
                    </p>
                    <div className="basis-1/2">
                        <h2 className="text-2xl mb-4 md:text-3xl xl:text-5xl">
                            “Analyzing, strategizing, and winning for you.”
                        </h2>
                        <p className="xl:text-lg">- LabLaw</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-fit md:h-[400px] bg-gray-300 p-10 xl:px-20">
                <SubtitleText classname="text-center pb-10">
                    Vision & Missions
                </SubtitleText>
                <div className="gap-10 md:flex">
                    <div>
                        <h2>Vision</h2>
                        <p className="xl:text-lg">
                            Building quality legal knowledge and producing a
                            young generation with integrity through easy access
                            to social media for the entire community, especially
                            young people.
                        </p>
                    </div>
                    <div>
                        <h2>Mission</h2>
                        <ul className="list-disc xl:text-lg">
                            <li>
                                Becoming a platform that provides training and a
                                forum for students to participate in providing
                                legal education and the importance of legal
                                knowledge in Indonesia.
                            </li>
                            <li>
                                Providing real legal education to the Indonesian
                                people through programs needed by the community.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <SubtitleText classname="text-center py-10">Meet Our Team</SubtitleText>
            <div className="flex justify-center">
              <AboutCard name="John Doe" division="Lawyer" />
            </div>
            <div className="text-center">
                <a href="/team">selengkapnya</a>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
