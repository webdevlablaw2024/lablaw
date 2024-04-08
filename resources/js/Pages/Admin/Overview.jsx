import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "react-data-table-component";

const Overview = (props) => {
    console.log(props)
     const formatDate = (dateString) => {
         const options = { day: "2-digit", month: "long", year: "numeric" };
         return new Date(dateString).toLocaleDateString("id-ID", options);
     };
    const columnArticle = [
        { name: "Title", selector: (row) => row.title, sortable: true },
        { name: "Author", selector: (row) => row.author, sortable: true },
        {
            name: "Date",
            selector: (row) => formatDate(row.updated_at),
            sortable: true,
        },
    ];
    const columnApplicant = [
        { name: "Name", selector: (row) => row.nama, sortable: true },
        {
            name: "Date",
            selector: (row) => formatDate(row.created_at),
            sortable: true,
        },
    ];
    const articleData = [
        { title: "Article 1", author: "Author 1", date: "2024-04-01" },
        { title: "Article 2", author: "Author 2", date: "2024-04-02" },
        { title: "Article 3", author: "Author 3", date: "2024-04-03" },
    ];

    // Data pelamar
    const applicantData = [
        { name: "Applicant 1", date: "2024-04-01" },
        { name: "Applicant 2", date: "2024-04-02" },
        { name: "Applicant 3", date: "2024-04-03" },
    ];
    return (
        <>
            <AdminLayout>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 gap-x-7 lg:gap-x-14 mb-4 mt-5">
                    <div className="flex justify-center items-center rounded-lg border-2 bg-white py-10">
                        <div className="text-center">
                            <h2 className="text-5xl font-extrabold mb-2">
                                {props.artikelCount}
                            </h2>
                            <p className="text-[#828282]">All Articles</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center rounded-lg border-2 bg-white py-10">
                        <div className="text-center">
                            <h2 className="text-5xl font-extrabold mb-2">
                                {props.memberCount}
                            </h2>
                            <p className="text-[#828282]">All Members</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center rounded-lg border-2 bg-white py-10">
                        <div className="text-center">
                            <h2 className="text-5xl font-extrabold mb-2">
                                {props.positionCount}
                            </h2>
                            <p className="text-[#828282]">Position</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center rounded-lg border-2 bg-white py-10">
                        <div className="text-center">
                            <h2 className="text-5xl font-extrabold mb-2">
                                {" "}
                                {props.internshipCount}
                            </h2>
                            <p className="text-[#828282]">
                                Applicant Internship
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-5 gap-y-14 mb-4 mt-5 border-2 rounded-lg bg-white p-7">
                    <div className="col-span-1 lg:col-span-7">
                        <h1 className="font-extrabold text-2xl mb-3">
                            New Articles
                        </h1>
                        <DataTable
                            columns={columnArticle}
                            data={props.artikel}
                            customStyles={{
                                headRow: {
                                    style: {
                                        backgroundColor: "#CBD5E1",
                                        fontSize: "1.3em",
                                        fontWeight: "bold",
                                    },
                                },
                                rows: {
                                    style: {
                                        fontSize: "1em",
                                        color: "black",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div className="col-span-1 lg:col-span-5">
                        <h1 className="font-extrabold text-2xl mb-3">
                            New Applicant
                        </h1>
                        <DataTable
                            columns={columnApplicant}
                            data={props.internship}
                            customStyles={{
                                headRow: {
                                    style: {
                                        backgroundColor: "#CBD5E1",
                                        fontSize: "1.3em",
                                        fontWeight: "bold",
                                    },
                                },
                                rows: {
                                    style: {
                                        fontSize: "1em",
                                        color: "black",
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};
export default Overview;
