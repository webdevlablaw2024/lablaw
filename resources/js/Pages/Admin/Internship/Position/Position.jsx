import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Position = (props) => {
    const column = [
        { name: "No", selector: (row, index) => index + 1, sortable: false },
        { name: "Title", selector: (row) => row.position, sortable: true },
        { name: "Image", selector: (row) => row.image, sortable: true },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex space-x-2">
                    <Link
                        href=""
                        className=" p-2 flex items-center gap-x-1 text-sm"
                    >
                        <FiEdit className="text-green-600" size={20} /> Edit
                    </Link>
                    <button
                        onClick={() => {
                            setDeleteItemId(row.id);
                            setModalIsOpen(true);
                        }}
                        className=" p-2 flex items-center gap-x-1 text-sm"
                    >
                        <RiDeleteBinLine className="text-red-600" size={20} />{" "}
                        Delete
                    </button>
                </div>
            ),
            width: "200px",
        },
    ];

    const data = [
        { title: "Article 1", image: "https://example.com/image1.jpg", id: 1 },
        { title: "Article 2", image: "https://example.com/image2.jpg", id: 2 },
        { title: "Article 3", image: "https://example.com/image3.jpg", id: 3 },
    ];

    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mb-2">
                    <h1 className="text-center font-extrabold text-3xl my-2">
                        LabLaw Position
                    </h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white">
                    <div className="text-center my-10">
                        <div className="flex flex-col md:flex-row justify-end items-center mb-4 mt-5">
                            <Link
                                href={route("position.create")}
                                className="py-2.5 px-8 font-semibold text-white bg-[#004877] rounded-full"
                            >
                                + Add New Position
                            </Link>
                        </div>
                        <DataTable
                            columns={column}
                            data={props.position}
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
export default Position;
