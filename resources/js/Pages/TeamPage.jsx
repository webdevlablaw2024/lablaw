import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import TitleText from "@/Components/TitleText";
import SubtitleText from "@/Components/SubtitleText";
import TeamCard from "@/Components/TeamCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ItemTabDivision from "@/Components/ItemTabDivision";

const TeamPage = ({ members }) => {
    const [selectedDivisionId, setSelectedDivisionId] = useState(null);

    const handleDivisionChange = (divisionId) => {
        event.preventDefault();
        setSelectedDivisionId(divisionId);
    };

    const filteredMembers = selectedDivisionId === null
        ? members
        : members.filter(member => member.position.id === selectedDivisionId);

    const divisions = [
        { id: null, name: 'View all' },
        { id: 1, name: 'Web Development' },
        { id: 2, name: 'Project' },
        { id: 3, name: 'CDVE' },
        { id: 4, name: 'Legal Secretary' },
        { id: 5, name: 'HRD' },
        { id: 6, name: 'SMS' },
        { id: 7, name: 'LCW' },
        { id: 8, name: 'Public Relation' }
    ];

    return (
        <>
            <Header />
            <div className="px-[20px] md:px-[100px] xl:px-[160px] pt-40 flex flex-col items-center">
                <TitleText classname="py-4 px-8 rounded-full border-2 border-black">
                    My Team Our Family
                </TitleText>
                <SubtitleText classname="text-center">
                    Solidarity, Support, Success, Together Stronger!
                </SubtitleText>
                <div className="hidden md:flex gap-2 xl:gap-5 font-bold mb-10 text-center items-center">
                    {divisions.map((division) => (
                        <ItemTabDivision key={division.id} onClick={() => handleDivisionChange(division.id)}>
                            {division.name}
                        </ItemTabDivision>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mb-10">
                    {filteredMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                        >
                            <TeamCard key={member.id} member={member} />
                        </motion.div>
                    ))}
                </div>
                <button className="border-2 border-black font-bold py-2 px-6 rounded-full mb-20 hover:translate-y-2 transition duration-300 ease-in-out active:bg-[#BBBBBB]">
                    <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
                    Load more
                </button>
                <div className="w-full p-12 bg-[#EDEDED] rounded-lg flex justify-between">
                    <div>
                        <h2 className="text-4xl font-bold mb-1">
                            We’re hiring
                        </h2>
                        <h4 className="text-lg">
                            Discover Your Potential: Connect with Us Today!
                        </h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <a
                            href="/internship"
                            className="border-2 bg-[#FFFFFF] border-[#BBBBBB] font-bold py-2 px-6 rounded-lg hover:bg-[#BBBBBB] transition duration-300 ease-in-out"
                        >
                            Explore open roles
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TeamPage;
