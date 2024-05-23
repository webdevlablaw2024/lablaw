import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";

const Home = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen pt-20 w-full bg-cover bg-center bg-[url('/images/background-3.png')] flex items-center justify-start relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div className="ml-5 lg:ml-10 xl:ml-14 2xl:ml-28 z-10 relative">
                    <h1 className="text-4xl lg:text-6xl font-bold lg:font-extrabold tracking-wider text-white text-start w-4/5">
                        LEGAL EDUCATION PLATFORM & LAW FIRM
                    </h1>
                    <button className="bg-[#022F4C] mt-5 lg:mt-8 text-white px-3 py-1.5 text-md md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base rounded-full">
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
                            src="/images/hero_image.png"
                            alt="Product"
                            className="w-32 h-28 rounded-md lg:rounded-xl lg:w-48 lg:h-44"
                        />
                        <div className="ml-4 w-full flex flex-col justify-between lg:py-3 text-justify">
                            <h3 className="text-lg lg:text-2xl xl:text-3xl text-black font-semibold">
                                Lorem ipsum dolor sit amet consectetur.
                            </h3>
                            <p className="text-slate-900 text-sm lg:text-base text-ellipsis overflow-hidden line-clamp-3 lg:line-clamp-4 mt-auto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio aut, soluta, error debitis vel ipsum rem aspernatur repudiandae unde ex accusamus itaque nobis exercitationem totam, saepe alias dolorum vero eos nostrum odit? Nisi id aperiam quis laboriosam magnam odit tempore impedit, vitae doloremque. Nemo ipsa quasi corporis earum numquam, eos quidem provident eius distinctio? Debitis quis doloremque quo consequuntur beatae quos, voluptatibus non? Neque iusto doloribus quo dicta quia consectetur eum veritatis cupiditate blanditiis obcaecati nam esse, fugit dolore similique alias minima error facere delectus voluptas dolorem quaerat assumenda sapiente, placeat in. Quod commodi illum modi cum impedit, dolorem ullam minus enim excepturi doloribus porro ipsa quas et dolores quos doloremque totam delectus quae! Sunt aspernatur necessitatibus alias quasi molestiae tenetur debitis ab, odio laborum inventore id recusandae, autem dicta nihil, numquam eum ut saepe sequi ad. Modi quos perspiciatis nobis? Saepe culpa laudantium sunt iste a optio aspernatur, iure voluptates magni architecto, quaerat quo eos ducimus nobis! Repudiandae, illum. Fuga earum, aliquam quia fugiat cumque praesentium repellat ipsum expedita. Ducimus cumque quisquam esse sed nostrum, odit iure sequi reprehenderit culpa praesentium voluptatibus quibusdam qui labore, repudiandae eligendi odio dolor accusantium quidem asperiores quam. Quaerat quisquam eos animi natus quo voluptas qui deleniti laudantium blanditiis. Dolor nesciunt corporis quibusdam sit nostrum. Labore repellendus soluta harum optio laborum amet maiores dignissimos alias laudantium eum tenetur eaque ducimus obcaecati a repudiandae corrupti quod quidem quam, officia dolores perferendis! Molestias eligendi sint aperiam fugiat animi. Inventore, saepe dignissimos! Quaerat molestias, laudantium architecto delectus ducimus at mollitia porro repellendus molestiae, nobis doloremque voluptas culpa sint repudiandae velit perferendis voluptatem. Nihil corrupti hic expedita illum perferendis, culpa suscipit fuga saepe odit laboriosam ipsum error nisi, ducimus officia vitae! Harum numquam alias suscipit repudiandae nobis aut enim totam at voluptatum quas veniam, saepe voluptatem nulla consequatur atque laborum necessitatibus. Mollitia nisi enim minima illum nesciunt ullam adipisci voluptates magnam consequuntur atque ducimus animi autem maxime, aspernatur sint libero vero et ab omnis, aut expedita culpa, reprehenderit molestiae velit. Earum perferendis error quae odio maxime rem, pariatur maiores excepturi, assumenda alias culpa voluptatem vitae atque consequatur explicabo dolores dolore ullam laudantium ad blanditiis possimus! Modi recusandae facilis harum magni iusto voluptates ut mollitia inventore ratione, error eaque, ad sequi, ducimus dignissimos. Totam excepturi sequi placeat labore ipsa voluptates illo incidunt. Illum nulla quo sequi harum rem ducimus sint veritatis, dolorum doloremque minima accusantium ex? Quibusdam, explicabo laudantium! Aperiam iste rerum facere sequi fugiat, quisquam et, cum facilis porro itaque quae ratione tenetur alias minus corrupti! Veritatis quia molestias corrupti facere ratione, suscipit perferendis enim est dolor nemo repellat cumque voluptates explicabo dolore nesciunt ut? Velit earum soluta perferendis dignissimos cumque blanditiis eaque quisquam. Voluptas aperiam culpa deserunt nesciunt quos consectetur eum voluptates veritatis placeat odit architecto blanditiis reiciendis aliquid minus dolore hic nihil dolores mollitia neque, at repellat. Iure suscipit quisquam repudiandae commodi perferendis? Maiores dignissimos itaque possimus velit alias illo ut? Ad repellendus quasi minus nemo incidunt repudiandae? Enim odit, et facere excepturi illum qui!
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
