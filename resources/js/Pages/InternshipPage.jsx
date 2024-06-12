import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TitleText from "@/Components/TitleText";
import SubtitleText from "@/Components/SubtitleText";
import WhatWeNeedCard from "@/Components/WhatWeNeedCard";
import WhatYouGotCard from "@/Components/WhatYougotCard";
import OpenPositionCard from "@/Components/OpenPositionCard";
import HowToApplyCard from "@/Components/HowToApplyCard";
import FAQCard from "@/Components/FAQCard";

const InternshipPage = ({ positions }) => {
    console.log(positions);
    return (
        <>
            <Header />
            <div className="mx-[160px] pt-40 flex flex-col items-center">
                <div className="flex gap-[100px] mb-20">
                    <div>
                        <h3 className="font-display text-3xl mb-1">
                            Internship program
                        </h3>
                        <h1 className="font-extrabold text-8xl font-[Roboto] mb-5">
                            Lab Law
                        </h1>
                        <p className="text-lg text-justify">
                            The Lab Law internship program offers students and
                            fresh graduates the opportunity to develop practical
                            skills in the legal field for six months, gain work
                            experience, and build a professional portfolio. The
                            program also provides opportunities to establish
                            professional connections and expand networks in the
                            legal industry, which can be valuable for future
                            careers.
                        </p>
                    </div>
                    <img
                        src="/icons/teamup.svg"
                        className="w-[400px] p-10 mr-10 hidden md:block"
                        alt="Team Up"
                    />
                </div>
                <TitleText>What We Need</TitleText>
                <div className="flex flex-col gap-7 mb-20">
                    <WhatWeNeedCard>
                        Currently enrolled in an undergraduate program (minimum
                        of 4th semester) or a diploma program (minimum of 4th
                        semester), as well as recent graduates.
                    </WhatWeNeedCard>
                    <WhatWeNeedCard>
                        Committed to working full-time (Monday to Friday) each
                        week.
                    </WhatWeNeedCard>
                    <WhatWeNeedCard>
                        Comunicative, creative, flexible, can work in team &
                        consistenly carry out task.{" "}
                    </WhatWeNeedCard>
                    <WhatWeNeedCard>
                        Have high commitment to completing a remote internship.
                    </WhatWeNeedCard>
                    <WhatWeNeedCard>
                        Have a good time management ability & fast response.
                    </WhatWeNeedCard>
                    <WhatWeNeedCard>
                        Have a good attitude, responsibility, and attention to
                        detail.
                    </WhatWeNeedCard>
                </div>

                <TitleText>What You Got</TitleText>
                <div className="flex gap-10 w-full mb-32">
                    <WhatYouGotCard
                        imageUrl={"/images/prizes/e-certificates.png"}
                        title="E-Certificates"
                    />
                    <WhatYouGotCard
                        imageUrl={"/images/prizes/recommendation-letter.png"}
                        title="Recommendation Letter"
                    />
                    <WhatYouGotCard
                        imageUrl={"/images/prizes/networking.png"}
                        title="Networking Opportunities"
                    />
                    <WhatYouGotCard
                        imageUrl={"/images/prizes/training-session.png"}
                        title="Training Sessions"
                    />
                </div>
            </div>

            <div className="px-[160px] p-20 flex flex-col items-center bg-[#EDEDED]">
                <TitleText>Open positions</TitleText>
                <SubtitleText classname="text-center w-3/4">
                    Are you a student or fresh graduate looking to gain
                    internship experience without having to leave home? Join our
                    team that works fully remotely!
                </SubtitleText>
                <div className="w-full flex flex-col gap-8">
                    {positions.map((position) => (
                        <OpenPositionCard
                            key={position.id}
                            position={position}
                        />
                    ))}
                </div>
            </div>

            <div className="mx-[160px] p-20 flex flex-col items-center mb-20">
                <TitleText>How to Apply</TitleText>
                <div className="flex gap-5 mb-20">
                    <HowToApplyCard
                        index={"01"}
                        imageUrl={"/icons/monitor.svg"}
                        title="Registration"
                        description="The registration stage in the internship involves filling out an online application form and submitting relevant documents."
                    />
                    <HowToApplyCard
                        index={"02"}
                        imageUrl={"/icons/administration.svg"}
                        title="Administration"
                        description="The administrative stage of the internship includes document screening and sending interview invitations to successful applicants."
                    />
                    <HowToApplyCard
                        index={"03"}
                        imageUrl={"/icons/interview.svg"}
                        title="First Interview"
                        description="The first interview stage of the internship involves a session with HR to discuss the applicant's background and other relevant details."
                    />
                    <HowToApplyCard
                        index={"04"}
                        imageUrl={"/icons/interview.svg"}
                        title="Second Interview"
                        description="The second interview stage of the internship entails an interview with the Founder and Director, focusing on more technical aspects of the applicant."
                    />
                    <HowToApplyCard
                        index={"05"}
                        imageUrl={"/icons/offering.svg"}
                        title="Offering"
                        description="The offering stage of the internship involves sending position offers via email to candidates who have successfully passed the previous stages."
                    />
                </div>

                <TitleText>Frequenly Ask Questions</TitleText>
                <SubtitleText classname="text-center  w-4/5">
                    Welcome to our FAQs page! We’ve compiled a list of commonly
                    asked questions to provide you with quick and informative
                    answer.
                </SubtitleText>
                <div className="flex flex-col w-full">
                    <FAQCard
                        question="Is this internship paid?"
                        answer="The internship is unpaid. However, there are several additional advantages you'll receive."
                    />
                    <FAQCard
                        question="Is it a prerequisite to have previous experience?"
                        answer="Experience isn't necessary, but if you have any, it will be a plus point."
                    />
                    <FAQCard
                        question="What divisions are currently open and what are their job descriptions?"
                        answer="The available positions can be found in the Open Internship section, where you can visit to view the detailed job descriptions."
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InternshipPage;
