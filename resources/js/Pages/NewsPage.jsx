import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import NewsCard from "@/Components/NewsCard";
import WhatsNewContent from "@/Components/WhatsNewContent";

const NewsPage = () => {
    return (
        <>
            <Header />
            <div className="pt-[120px]">
                <div className="w-11/12 lg:w-5/6 mx-auto container mb-32">
                    <div
                        className="relative h-48 md:h-64 xl:h-72 w-full flex items-end justify-start text-left bg-cover bg-center mb-5 rounded-lg"
                        style={{
                            backgroundImage:
                                "url('/images/hero_image.png')",
                        }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <div className="text-white font-regular flex flex-col justify-start">
                                <span className="text-2xl leading-0 font-semibold">
                                    20
                                </span>
                                <span className="-mt-2">Jun</span>
                            </div>
                        </div>
                        <main className="px-3 pb-5 z-10">
                            <a
                                href=""
                                className="text-lg lg:text-2xl tracking-tight font-medium leading-6 font-regular text-white hover:underline"
                            >
                                <p className="line-clamp-2 text-ellipsis overflow-hidden ...">
                                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate ex magnam eaque quo facere id dolore error nemo assumenda!
                                </p>
                            </a>
                        </main>
                    </div>
                    <div className="flex gap-3 mb-4">
                        <NewsCard classname="md:text-lg" />
                        <NewsCard classname="md:text-lg" />
                        <NewsCard classname="md:text-lg" />
                    </div>

                    <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                        What's New
                    </h2>

                    <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-4"></div>

                    <div className="gap-10 mb-10 md:flex">
                        <WhatsNewContent />
                        <WhatsNewContent />
                        <WhatsNewContent />
                    </div>

                    <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                        Events
                    </h2>

                    <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-10"></div>

                    <div className="gap-10 md:flex">
                        <NewsCard classname="text-xl" />
                        <NewsCard classname="text-xl" />
                        <NewsCard classname="text-xl" />
                        <NewsCard classname="text-xl" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsPage;
