import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import { Link } from "@inertiajs/react";
import moment from "moment";
const ShowArticle = ({ artikel, artikels }) => {
    const truncateText = (text) => {
        return text.length > 8 ? text.substr(0, 10) + "..." : text;
    };
    return (
        <>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-8 gap-4">
                <section className="mt-24 sm:col-span-5 pl-[20px] sm:pl-[70px] lg:pl-[100px] xl:pl-[200px] 2xl:pl-[250px] pr-5 py-9">
                    <div>
                        <h1 className="text-2xl font-bold text-darkGray">
                            {artikel.title}
                        </h1>
                        <br />
                        {/* <p className="text-darkGray">
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s.
                        </p> */}
                        <br />
                        <div className="flex flex-row md:flex-col xl:flex-row justify-between items-end md:items-start xl:items-end gap-4 mb-3">
                            <div className="text-gray flex flex-col md:flex-row gap-1 md:gap-3 2xl:gap-6 items-start md:items-center text-sm 2xl:text-base">
                                <p>by {artikel.author}</p>
                                <p className="hidden md:block">|</p>
                                <div className="flex items-center gap-2">
                                    <i className="fa-regular fa-clock"></i>
                                    <p>
                                        {moment(artikel.created_at).format(
                                            "DD MMMM YYYY"
                                        )}
                                    </p>
                                </div>
                                <p className="hidden md:block">|</p>
                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-message"></i>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-7 w-7 bg-cover bg-no-repeat bg-center rounded-lg bg-[url('/images/instagram.png')]"></div>
                                <div className="h-7 w-7 bg-cover bg-no-repeat bg-center rounded-lg bg-[url('/images/twitter.jpg')]"></div>
                                <div className="h-7 w-7 bg-cover bg-no-repeat bg-center rounded-lg bg-[url('/images/whatsapp.jpg')]"></div>
                                <div className="h-7 w-7 bg-cover bg-no-repeat bg-center rounded-lg bg-[url('/images/facebook.png')]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[350px] w-full">
                        <div
                            className="h-full w-full bg-cover bg-no-repeat bg-center rounded-lg"
                            style={{
                                backgroundImage: `url(${window.location.origin}/storage/artikel/images/${artikel.image})`,
                            }}
                        ></div>
                    </div>
                    <br />
                    <p
                        className="text-darkGrey"
                        dangerouslySetInnerHTML={{
                            __html: artikel?.description,
                        }}
                    ></p>
                    <br />
                    <br />
                    <div className="flex gap-5 font-semibold">
                        <div className="bg-lightGray rounded py-3 px-4 md:px-6 group">
                            <p className="group-hover:text-yellow">Masjid</p>
                        </div>
                        <div className="bg-lightGray rounded py-3 px-4 md:px-6 group">
                            <p className="group-hover:text-yellow">Jakarta</p>
                        </div>
                        <div className="bg-lightGray rounded py-3 px-4 md:px-6 group">
                            <p className="group-hover:text-yellow">Ibadah</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <p className="font-medium">Komentar</p>
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Tulis komentarmu"
                                className="mt-2 p-2.5 w-full border-2 border-gray rounded-xl placeholder:text-gray hover:bg-lightGray/50"
                            />
                            <i className="absolute top-4 right-5 text-gray text-lg fa-solid fa-paper-plane group-hover:text-cyan hover:text-blue-500"></i>
                        </div>
                    </div>
                    <br />
                    <br />
                </section>
                <aside className="mt-24 sm:col-span-3 px-[20px] sm:pr-[70px] lg:pr-[100px] xl:pr-[200px] 2xl:pr-[250px] py-9">
                    <h1 className="font-medium">Artikel Terbaru</h1>
                    <hr className="border-blue-700 bg-yelllow h-1 my-2" />
                    <br />
                    <div className="flex flex-col gap-y-3">
                        {artikels.map((article, index) => (
                            <div
                                key={index}
                                className="flex gap-4 text-sm text-darkGray items-center"
                            >
                                <div
                                    className="h-[50px] w-[20%] sm:w-[30%] lg:w-[20%] bg-cover bg-no-repeat bg-center rounded-lg"
                                    style={{
                                        backgroundImage: `url(${window.location.origin}/storage/artikel/images/${article.image})`,
                                    }}
                                ></div>
                                <div className="w-[80%] sm:w-[70%] lg:w-[80%]">
                                    <Link
                                        href={route("news.detail", {
                                            id: article.id,
                                        })}
                                        className="font-semibold"
                                    >
                                        {article.title}
                                    </Link>
                                    <div className="text-gray flex gap-0 2xl:gap-2 2xl:items-center pt-1 justify-start flex-col 2xl:flex-row">
                                        <p>
                                            {truncateText(
                                                "by " + article.author
                                            )}
                                        </p>
                                        <p className="hidden 2xl:block">|</p>
                                        <div className="flex items-center gap-2">
                                            <i className="hidden 2xl:block fa-regular fa-clock"></i>
                                            <p>
                                                {" "}
                                                {moment(
                                                    article.created_at
                                                ).format("DD MMMM YYYY")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="border-2 border-gray/50 text-gray h-[200px] rounded-md flex flex-col items-center justify-center">
                        <span>
                            <i className="fa-regular fa-envelope text-6xl"></i>
                        </span>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm">Subscribe to get news update</p>
                    </div>
                </aside>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
};

export default ShowArticle;
