import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link } from "@inertiajs/react";
import { BsBank2 } from "react-icons/bs";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineRoomService } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { IoIosGitNetwork } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";

const Sidebar = ({ isOpen }) => {
    const [activeMainMenuIndexes, setActiveMainMenuIndexes] = useState([]);

    const toggleMainMenu = (index) => {
        setActiveMainMenuIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    const isSubMenuOpen = (index) => {
        return activeMainMenuIndexes.includes(index);
    };

    const menuItems = [
        {
            icon: <GoHome size={20} className="mr-4" />,
            text: "Overview",
            url: route("overview.index"),
        },
        {
            icon: <GrArticle size={20} className="mr-4" />,
            text: "Articles",
            url: route("article.index"),
        },
        {
            icon: <GrUserManager size={20} className="mr-4" />,
            text: "Members",
            url: route("member.index"),
        },
        {
            icon: <BsBank2 size={20} className="mr-4" />,
            text: "Internship",
            submenu: [
                {
                    text: "Position ",
                    url: route("position.index"),
                    icon: <IoIosGitNetwork size={20} className="mr-4" />,
                },
                {
                    text: "Applicant ",
                    url: route("applicant.index"),
                    icon: <FiUsers size={20} className="mr-4" />,
                },
            ],
        },
    ];

    return (
        <>
            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-10 transition-transform ${
                    isOpen ? "" : "-translate-x-full"
                } bg-white border-r border-gray-200 sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 pt-10 overflow-y-auto bg-white ">
                    <ul className="space-y-2 font-medium">
                        {menuItems.map((menuItem, index) => (
                            <li
                                key={index}
                                className={`relative cursor-pointer ${
                                    isSubMenuOpen(index) ? "z-50" : ""
                                }`}
                            >
                                {menuItem.submenu ? (
                                    <div
                                        className={`flex items-center p-2 text-[#64748B] rounded-lg group hover:bg-gray-50 
                                        `}
                                        onClick={() => {
                                            toggleMainMenu(index);
                                        }}
                                    >
                                        {menuItem.icon}
                                        <span className="flex-1 ms-2 whitespace-nowrap">
                                            {menuItem.text}
                                        </span>
                                        {menuItem.submenu && (
                                            <IoChevronDownSharp
                                                size={20}
                                                className={`ml-auto transition duration-200 ${
                                                    isSubMenuOpen(index)
                                                        ? "transform rotate-180"
                                                        : ""
                                                }`}
                                            />
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={menuItem.url}
                                        className="flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100"
                                    >
                                        {menuItem.icon}
                                        <span className="flex-1 ms-2 whitespace-nowrap">
                                            {menuItem.text}
                                        </span>
                                    </Link>
                                )}
                                {menuItem.submenu && isSubMenuOpen(index) && (
                                    <ul className="pl-10">
                                        {menuItem.submenu.map(
                                            (subMenuItem, subIndex) => (
                                                <li
                                                    key={subIndex}
                                                    className="relative"
                                                >
                                                    <Link
                                                        href={subMenuItem.url}
                                                        className="flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100"
                                                    >
                                                        {subMenuItem.icon}
                                                        <span className="flex-1 ms-2 whitespace-nowrap">
                                                            {subMenuItem.text}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
