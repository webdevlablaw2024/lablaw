import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#001624]">
                <div className="mx-auto w-full max-w-screen-xl mt-20">
                    <img
                        src="/images/logo.png"
                        alt=""
                        className="px-4 pt-20 w-32 h-44 lg:w-40 lg:h-52"
                    />
                    <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                        <div className="">
                            <h6 className=" flex items-center  mb-6   text-white font-semibold uppercase ">
                                CONTACT US
                            </h6>
                            <h1 className="text-white text-2xl mb-6">
                                info@lablaw.id
                            </h1>
                            <p className="text-[#D5D5D5] capitalize">
                            Legal education platform & firm
                            </p>
                        </div>
                        <div>
                            <h2 className="mb-6 font-semibold uppercase text-white">
                                Explore
                            </h2>
                            <ul className=" text-[#D5D5D5] font-medium">
                                <li className="mb-4">
                                    <a href="/about" className="hover:underline">
                                        About
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="/news" className="hover:underline">
                                        News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-semibold uppercase text-white">
                                Location
                            </h2>
                            <p className="text-[#D5D5D5]">
                                99 Padang Indah Rd, Badung, Bali
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-gray-500 "></div>
                    <div className="px-4 py-6   md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-400  sm:text-center">
                            Copyright LabLaw © 2024
                        </span>
                        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 gap-1 rtl:space-x-reverse">
                            <Link
                                href="#"
                                className="w-10 h-10 border rounded-full p-2"
                            >
                                <img src="/vector/x.png" alt="" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border rounded-full p-2"
                            >
                                <img
                                    src="/vector/thread.png"
                                    alt=""
                                />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 border rounded-full p-2"
                            >
                                <img
                                    src="/vector/instagram.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
