const Home = () => {
    return (
        <>
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
                <div className="w-11/12 lg:w-5/6 mx-auto ">
                    <div>
                        <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                            Latest Articles
                        </h2>
                        <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-10"></div>
                    </div>
                    <div className="mt-10 flex ">
                        <img
                            src="build/assets/images/hero_image.png"
                            alt=""
                            className="w-5/12 lg:w-3/12 h-60 rounded-xl"
                        />
                        <div className="w-7/12 lg:w-9/12 bg-blue-300">
                            <h1 className="font-bold">INI JUDUL PALING PANJANGGGGGGGGGGGGGGG</h1>
                        </div>
                    </div>
                    <div className="mt-10 flex ">
                        <img
                            src="build/assets/images/facebook.png"
                            alt=""
                            className="w-3/12 h-60 rounded-xl"
                        />
                        <div className="w-9/12">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
