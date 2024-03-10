import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";

const Home = () => {
    return (
        <>
        <Header/>
            <div className="min-h-screen w-full bg-cover bg-[url('build/assets/images/hero_image.png')] flex items-center justify-start relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="ml-5 lg:ml-10 xl:ml-14 2xl:ml-28 z-10 relative">
                    <h1 className="text-4xl lg:text-6xl font-bold lg:font-extrabold tracking-wider text-white text-start w-4/5">
                        LEGAL EDUCATION PLATFORM & LAW FIRM
                    </h1>
                    <button className="bg-[#022F4C] mt-5 lg:mt-8 text-white px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base rounded-full">
                        Contact
                    </button>
                </div>
            </div>
            <div className="mt-20">
                <div className="w-11/12 lg:w-5/6 mx-auto container mb-32 ">
                    <div>
                        <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                            Latest Articles
                        </h2>
                        <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-10"></div>
                    </div>

                    <div className="flex mb-5">
                        <img
                            src="build/assets/images/hero_image.png"
                            alt="Product"
                            className="w-32 h-28 rounded-md lg:rounded-xl lg:w-48 lg:h-44  "
                        />
                        <div className="ml-4  w-full py-3 ">
                            <h3 className="text-lg lg:text-2xl text-black font-semibold leading-none">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <p className="text-slate-900 text-sm lg:text-base ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti in atque provident
                                nostrum alias dolorem.
                            </p>
                        </div>
                    </div>
                    <div className="flex mb-5">
                        <img
                            src="build/assets/images/hero_image.png"
                            alt="Product"
                            className="w-32 h-28 rounded-md lg:rounded-xl lg:w-48 lg:h-44 "
                        />
                        <div className="ml-4  w-full py-3 ">
                            <h3 className="text-lg lg:text-2xl text-black font-semibold leading-none">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <p className="text-slate-900 text-sm lg:text-base ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti in atque provident
                                nostrum alias dolorem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
