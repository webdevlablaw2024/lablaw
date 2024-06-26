import { Link } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import DataTable from "react-data-table-component";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";
import DeleteModal from "@/Components/Admin/Position/DeleteModal";
import { Inertia } from "@inertiajs/inertia";

const Position = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    const handleChangeStatus = (id) => {
        Inertia.put(route("position.changeStatus", id));
    };

    const columns = [
        { name: "No", selector: (row, index) => index + 1, sortable: false },
        { name: "Title", selector: (row) => row.position, sortable: true },
        { name: "Image", selector: (row) => row.image, sortable: true },
        {
            name: "Is Oprec",
            cell: (row) => (
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={row.is_oprec}
                        onChange={() => handleChangeStatus(row.id)}
                    />
                    <div className="relative w-11 h-6 bg-[#E7E7E7] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004877]"></div>
                </label>
            ),
            width: "200px",
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="flex space-x-2">
                    <Link
                        href={route("position.edit", row.id)}
                        className="p-2 flex items-center gap-x-1 text-sm"
                    >
                        <FiEdit className="text-green-600" size={20} /> Edit
                    </Link>
                    <button
                        onClick={() => {
                            setDeleteItemId(row.id);
                            setModalIsOpen(true);
                        }}
                        className="p-2 flex items-center gap-x-1 text-sm"
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
        Inertia.delete(route("position.destroy", deleteItemId))
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
                        columns={columns}
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
            <DeleteModal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                handleDelete={handleDelete}
            />
        </AdminLayout>
    );
};

export default Position;
