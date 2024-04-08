import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPosition = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                        <Link href={route("position.index")}>Position</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#004877]">
                            Add Position
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Add Position</h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <form
                        action=""
                        className="my-6"
                        encType="multipart/form-data"
                    >
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="position"
                                className="font-semibold text-lg"
                            >
                                Position*
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Please enter position"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="gambar"
                                className="font-semibold text-lg"
                            >
                                Image
                            </label>
                            <input
                                id="gambar"
                                type="file"
                                name="gambar"
                                className="border-2 border-[#D8DBDF] p-2 bg-[#FBFBFB] rounded-lg"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-2 w-40 h-40 object-cover"
                                />
                            )}
                        </div>
                        <div className="my-5">
                            <label
                                htmlFor="description"
                                className="font-semibold text-lg"
                            >
                                Description*
                            </label>
                            <ReactQuill
                                id="description"
                                theme="snow"
                                placeholder="Please enter description"
                            />
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <Link
                                href={route("position.index")}
                                className="bg-white px-8 py-2.5 rounded-full text-[#004877] border-2 border-[#004877] font-semibold"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="bg-[#004877] px-8 py-2.5 rounded-full text-white font-semibold"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
};
export default AddPosition;
