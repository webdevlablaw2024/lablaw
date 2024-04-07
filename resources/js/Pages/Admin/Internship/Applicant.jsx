import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";

const Applicant = () => {
    const column = [
        { name: "No", selector: (row, index) => index + 1, sortable: false },
        { name: "Name", selector: (row) => row.name, sortable: true },
        { name: "Position", selector: (row) => row.position, sortable: true },
        { name: "Resume", selector: (row) => row.resume, sortable: true },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => {
                            setDeleteItemId(row.id);
                            setModalIsOpen(true);
                        }}
                        className=" p-2 flex items-center gap-x-1 text-sm"
                    >
                        <FiEye className="text-blue-600" size={20} /> View
                    </button>
                </div>
            ),
            width: "200px",
        },
    ];

    const data = [
        {
            name: "John Doe",
            position: "Software Engineer",
            resume: "https://example.com/resume1.pdf",
        },
        {
            name: "Jane Smith",
            position: "Data Analyst",
            resume: "https://example.com/resume2.pdf",
        },
        {
            name: "Michael Johnson",
            position: "Project Manager",
            resume: "https://example.com/resume3.pdf",
        },
    ];

    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mb-2">
                    <h1 className="text-center font-extrabold text-3xl my-2">
                        LabLaw Applicant
                    </h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white">
                    <div className="text-center my-10">
                        <DataTable
                            columns={column}
                            data={data}
                            pagination
                            customStyles={{
                                headRow: {
                                    style: {
                                        backgroundColor: "#F1F5F9",
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
export default Applicant;
