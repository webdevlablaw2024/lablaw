import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPosition = () => {
    const { data, setData, post, errors } = useForm();
    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("position.store"), data);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setData("image", file);
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
                        onSubmit={handleSubmit}
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
                                id="position"
                                type="text"
                                placeholder="Please enter position"
                                className={`border-2 border-gray-300 rounded-lg p-2 ${
                                    errors.position ? "border-red-500" : ""
                                }`}
                                value={data.position || ""}
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                            />
                            {errors.position && (
                                <div className="text-red-500">
                                    {errors.position}
                                </div>
                            )}
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="area"
                                className="font-semibold text-lg"
                            >
                                Area*
                            </label>
                            <select
                                id="area"
                                className={`border-2 border-gray-300 rounded-lg p-2 ${
                                    errors.area ? "border-red-500" : ""
                                }`}
                                value={data.area || ""}
                                onChange={(e) =>
                                    setData("area", e.target.value)
                                }
                            >
                                <option value="">Select area</option>
                                <option value="onsite">Onsite</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="remote">Remote</option>
                            </select>
                            {errors.area && (
                                <div className="text-red-500">
                                    {errors.area}
                                </div>
                            )}
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
                                accept="image/*"
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
                            <div
                                className={`border-2 rounded-lg ${
                                    errors.description
                                        ? "border-red-500"
                                        : "border-gray-300"
                                }`}
                            >
                                <ReactQuill
                                    id="description"
                                    theme="snow"
                                    placeholder="Please enter description"
                                    value={data.description || ""}
                                    onChange={(value) =>
                                        setData("description", value)
                                    }
                                />
                            </div>
                            {errors.description && (
                                <div className="text-red-500">
                                    {errors.description}
                                </div>
                            )}
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
