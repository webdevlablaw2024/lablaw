export default function AboutCard({ name, division, linkSocialMedia }) {
    return (
        <>
            <div className="w-[350px] h-[426px] bg-[#F8F8F8] flex flex-col items-center p-10 rounded-lg">
                <img
                    src="build/assets/images/person.jpeg"
                    alt="Person Card"
                    className="ratio-1/1 w-32 rounded-full"
                />
                <h3>{name}</h3>
                <h4>{division}</h4>
                <div className="ratio-1/1 p-3.5 rounded-full bg-gray-300 flex justify-center items-center">
                    <img
                        src="build/assets/images/instagram.png"
                        alt="Social Media"
                        className="ratio-1/1 w-10"
                    />
                </div>
            </div>
        </>
    );
}
