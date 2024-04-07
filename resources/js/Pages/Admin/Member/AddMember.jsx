import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const AddMember = () => {
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
                        <Link href="">Member</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#004877]">
                            Add Member
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Add Member</h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <form
                        action=""
                        className="my-6"
                        encType="multipart/form-data"
                    >
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="name"
                                className="font-semibold text-lg"
                            >
                                Name*
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Please enter name"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            />
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="gender"
                                className="font-semibold text-lg"
                            >
                                Gender*
                            </label>
                            <select
                                id="gender"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
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
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="position"
                                className="font-semibold text-lg"
                            >
                                Position*
                            </label>
                            <select
                                id="position"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                            >
                                <option value="">Select position</option>
                                <option value="manager">Manager</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="staff">Staff</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <Link
                                href=""
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
export default AddMember;