import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

const ComingSoon = () => {
    return (
        <>
            <Navbar />
            <div className="h-screen flex flex-col">
                <div className="bg-cover bg-[#001624] h-5/6 md:h-3/4 flex items-center justify-center">
                    <div className="text-center text-white px-3 mt-24">
                        <h1 className="text-6xl font-bold mb-5 uppercase tracking-widest">
                            Coming Soon
                        </h1>
                        <div className="w-10/12  mx-auto">
                            <p className="text-center">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-cover bg-[#001624]  flex items-center justify-center">
                    <div className="text-white mb-10 mx-auto">
                        <p className="tracking-wider text-center">
                            www.lablaw.co.id
                        </p>
                        <div className="flex gap-8 mt-8 justify-center">
                            <Link className="w-5 h-5">
                                <img src="/vector/x.png" alt="" />
                            </Link>
                            <Link className="w-5 h-5">
                                <img
                                    src="/vector/thread.png"
                                    alt=""
                                />
                            </Link>
                            <Link className="w-5 h-5">
                                <img
                                    src="/vector/instagram.png"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bg-bottom bg-cover h-1/6 md:h-1/4">
                    <img
                        src="/images/asset1.png"
                        alt="Your Image"
                        className="w-full h-full object-cover filter grayscale"
                    />
                </div>
            </div>
        </>
    );
};

export default ComingSoon;
