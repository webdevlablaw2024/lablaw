import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link } from "@inertiajs/react";
import { BsBank2 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { LuUserCog } from "react-icons/lu";
import { MdOutlineRoomService } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
    const [activeSubMenuIndexes, setActiveSubMenuIndexes] = useState([]);
    // const location = useLocation();

    const toggleSubMenu = (index) => {
        setActiveSubMenuIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    const menuItems = [
        {
            icon: <GoHome size={20} className="mr-4" />,
            text: "Dashboard",
            url: "/dashboard",
        },
        {
            icon: <BsBank2 size={20} className="mr-4" />,
            text: "Mitra",
            submenu: [
                {
                    text: "Profile ",
                    url: "/profile-mitra",
                    icon: <LuUserCog size={20} className="mr-4" />,
                },
                {
                    text: "Layanan ",
                    url: "/layanan-mitra",
                    icon: <MdOutlineRoomService size={20} className="mr-4" />,
                },
            ],
        },
        {
            icon: <FaUsers size={20} className="mr-4" />,
            text: "Peserta",
            submenu: [
                {
                    text: "Profile",
                    url: "/profile-mitra",
                    icon: <FaUserGear size={20} className="mr-4" />,
                },
                {
                    text: "Hasil Tes",
                    url: "/layanan-mitra",
                    icon: <FaChartBar size={20} className="mr-4" />,
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
                                className={`relative ${
                                    activeSubMenuIndexes.includes(index)
                                        ? "z-50"
                                        : ""
                                }`}
                            >
                                <Link
                                    to={menuItem.url}
                                    className={`flex items-center p-2 text-[#64748B] rounded-lg group hover:bg-gray-50 
                                    `}
                                    onClick={() =>
                                        menuItem.submenu && toggleSubMenu(index)
                                    }
                                >
                                    {menuItem.icon}
                                    <span className="flex-1 ms-2 whitespace-nowrap">
                                        {menuItem.text}
                                    </span>
                                    {menuItem.submenu && (
                                        <IoChevronDownSharp
                                            size={20}
                                            className={`ml-auto transition duration-200 ${
                                                activeSubMenuIndexes.includes(
                                                    index
                                                )
                                                    ? "transform rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    )}
                                </Link>
                                {menuItem.submenu &&
                                    activeSubMenuIndexes.includes(index) && (
                                        <ul className="pl-10">
                                            {menuItem.submenu.map(
                                                (subMenuItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="relative"
                                                    >
                                                        <a
                                                            href={
                                                                subMenuItem.url
                                                            }
                                                            className="flex items-center p-2 text-base text-[#64748B] transition duration-200 rounded-lg group hover:bg-gray-100"
                                                        >
                                                            {subMenuItem.icon}
                                                            <span className="flex-1 ms-2 whitespace-nowrap">
                                                                {
                                                                    subMenuItem.text
                                                                }
                                                            </span>
                                                        </a>
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
