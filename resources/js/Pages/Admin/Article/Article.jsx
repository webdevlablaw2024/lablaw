import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import DeleteModal from "@/Components/Admin/Article/DeleteModal";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Article = (props) => {
    console.log(props.artikel);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const column = [
        { name: "No", selector: (row, index) => index + 1, sortable: false, width: "55px" },
        { name: "Title", selector: (row) => row.title, sortable: true, width: "400px" },
        { name: "Author", selector: (row) => row.author, sortable: true, width: "200px" },
        {
            name: "Date",
            selector: (row) => {
                const date = new Date(row.updated_at);
                const formattedDate = date.toISOString().split("T")[0];
                return formattedDate;
            },
            sortable: true,
            width: "200px",
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex space-x-2">
                    <Link
                        href={route("article.edit", row.id)}
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
    const handleDelete = () => {
        Inertia.delete(route("article.destroy", deleteItemId))
            .then(() => {
                setModalIsOpen(false);
                setDeleteItemId(null);
                console.log("Menghapus item dengan ID:", deleteItemId);
            })
            .catch((error) => {
                console.error("Error deleting referensi:", error);
            });
    };
    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mb-2">
                    <h1 className="text-center font-extrabold text-3xl my-2">
                        LabLaw Articles
                    </h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white">
                    <div className="text-center my-10">
                        <div className="flex flex-col md:flex-row justify-end items-center mb-4 mt-5">
                            <Link
                                href={route("article.create")}
                                className="py-2.5 px-8 font-semibold text-white bg-[#004877] rounded-full"
                            >
                                + Add New Articles
                            </Link>
                        </div>
                        <DataTable
                            columns={column}
                            data={props.artikel}
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
                <DeleteModal
                    isOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    handleDelete={handleDelete}
                />
            </AdminLayout>
        </>
    );
};
export default Article;
