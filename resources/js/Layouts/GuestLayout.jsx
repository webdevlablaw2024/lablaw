export default function Guest({ children }) {
    return (
        <div className="w-full h-screen bg-[url('/images/background-1.png')] bg-cover mx-auto flex justify-center md:items-center sm:pt-0">

            <div className="w-full p-10 m-8 bg-white overflow-y-auto shadow-md rounded-lg md:max-w-md md:h-max">
                {children}
            </div>
        </div>
    );
}
