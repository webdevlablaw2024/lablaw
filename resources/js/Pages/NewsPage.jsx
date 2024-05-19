import React from "react";
import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import NewsCard from "@/Components/NewsCard";
import WhatsNewContent from "@/Components/WhatsNewContent";
import moment from "moment";
import { Link } from "@inertiajs/react";

const NewsPage = ({ artikel }) => {
    const articlesTop = artikel.slice(1, 4);
    const articlesMiddle = artikel.slice(4, 7);
    return (
        <>
            <Header />
            <div className="pt-[120px]">
                <div className="w-11/12 lg:w-5/6 mx-auto container mb-32">
                    <div
                        className="relative h-48 md:h-64 xl:h-72 w-full flex items-end justify-start text-left bg-cover bg-center mb-5 rounded-lg"
                        style={{
                            backgroundImage: `url(${artikel[0].image})`,
                        }}
                    >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
                        <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                            <div className="text-white font-regular flex flex-col justify-start">
                                <span className="text-2xl leading-0 font-semibold">
                                    {moment(artikel[0].created_at).format("DD")}
                                </span>
                                <span className="-mt-2">
                                    {moment(artikel[0].created_at).format(
                                        "MMM"
                                    )}
                                </span>
                            </div>
                        </div>
                        <main className="px-3 pb-5 z-10">
                            <Link
                                href={route(
                                    "news.detail",
                                    artikel[0].id
                                )}
                                className="text-lg lg:text-2xl tracking-tight font-medium leading-6 font-regular text-white hover:underline"
                            >
                                <p className="line-clamp-2 text-ellipsis overflow-hidden ...">
                                    {artikel[0].title}
                                </p>
                            </Link>
                        </main>
                    </div>
                    <div className="flex gap-5">
                        {articlesTop.map((article, index) => (
                            <NewsCard
                                key={index}
                                classname="md:text-lg"
                                article={article}
                            />
                        ))}
                    </div>

                    <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                        What's New
                    </h2>

                    <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-4"></div>

                    <div className="gap-10 mb-10 md:grid md:grid-cols-3">
                        {articlesMiddle.map((article, index) => (
                            <WhatsNewContent key={index} article={article} />
                        ))}
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
