export default function NewsCard({ classname = "", children, ...props }) {
    return (
        <>
            <div className={`mb-4 md:mb-0 ` + classname}>
                <img
                    src="build/assets/images/hero_image.png"
                    alt="News"
                    className="object-cover rounded-md"
                />
                <h1 className={`font-bold mt-4 ` + classname}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>
        </>
    );
}
