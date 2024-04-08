import Footer from "@/Components/Footer";
import Header from "@/Components/Navbar";
import WhatsNewContent from "@/Components/WhatsNewContent";

const NewsPage = () => {
    return (
        <>
            <Header />
            <div className="pt-[120px]">
                <div className="w-11/12 lg:w-5/6 mx-auto container mb-32">
                    <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                        What's New
                    </h2>

                    <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-10"></div>

                    <div className="gap-10 mb-10 md:flex">
                        <WhatsNewContent />
                        <WhatsNewContent />
                        <WhatsNewContent />
                    </div>

                    <h2 className="text-xl 2xl:text-4xl font-bold mb-2">
                        Events
                    </h2>

                    <div className="h-[1px] lg:h-0.25 w-full bg-gray-500 mb-10"></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsPage;
