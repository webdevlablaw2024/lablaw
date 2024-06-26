import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

const Home = (props) => {
    console.log(props);
    return (
        <>
            <Header />
            <div className="min-h-screen pt-20 w-full bg-cover bg-center bg-[url('/images/background-3.png')] flex items-center justify-start relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="ml-5 lg:ml-10 xl:ml-14 2xl:ml-28 z-10 relative">
                    <h1 className="text-4xl lg:text-6xl font-bold lg:font-extrabold tracking-wider text-white text-start w-4/5">
                        LEGAL EDUCATION PLATFORM & LAW FIRM
                    </h1>
                    <Link href="#footer">
                    <button className="bg-[#022F4C] mt-5 lg:mt-8 text-white px-3 py-1.5 text-md md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base rounded-full">
                        Contact
                    </button>
                    </Link>
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

                    {props.artikels.map((article, index) => (
                        <div className="flex mb-5" key={index}>
                            <img
                                src={`${window.location.origin}/storage/artikel/images/${article.image}`}
                                alt={article.title}
                                className="w-32 h-28 rounded-md lg:rounded-xl lg:w-48 lg:h-44"
                            />
                            <div className="ml-4 w-full flex flex-col justify-between lg:py-3 text-justify">
                                <Link
                                    href={route("news.detail", article.id)}
                                    className="text-lg lg:text-2xl xl:text-3xl text-black font-semibold hover:underline"
                                >
                                    {article.title}
                                </Link>
                                <p
                                    className="text-slate-900 text-sm lg:text-base text-ellipsis overflow-hidden line-clamp-3 lg:line-clamp-4 mt-auto"
                                    dangerouslySetInnerHTML={{
                                        __html: article?.description,
                                    }}
                                ></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
