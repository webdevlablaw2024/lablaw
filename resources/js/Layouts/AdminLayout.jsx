import Navbar from "@/Components/Admin/Navbar";

const AdminLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="p-4 md:p-7 lg:p-9 xl:p-10 sm:ml-64 mt-14 bg-[#F9FCFF] min-h-screen">
                {children}
            </div>
        </>
    );
};
export default AdminLayout;
