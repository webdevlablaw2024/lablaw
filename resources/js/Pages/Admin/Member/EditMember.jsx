import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const EditMember = (props) => {
    const positions = props.positions;
    const [imagePreview, setImagePreview] = useState(
        props.member.image
            ? `/storage/member/images/${props.member.image}`
            : null
    );
    const { data, setData, post, errors } = useForm({
        _method: "patch",
        id: props.member.id,
        name: props.member.name,
        gender: props.member.gender,
        position_id: props.member.position_id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("member.update", { id: props.member.id }), data);
        console.log(data);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setData("image", file); // Set image data to form data
        }
    };

    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                        <Link href={route("member.index")}>Member</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#004877]">
                            Edit Member
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Edit Member</h1>
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
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
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
                                name="gender"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                                value={data.gender}
                                onChange={(e) =>
                                    setData("gender", e.target.value)
                                }
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
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
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="position"
                                className="font-semibold text-lg"
                            >
                                Position*
                            </label>
                            <select
                                id="position"
                                name="position_id"
                                className="border-2 border-[#D8DBDF] bg-[#FBFBFB] rounded-lg"
                                value={data.position_id}
                                onChange={(e) =>
                                    setData("position_id", e.target.value)
                                }
                            >
                                <option value="">Select position</option>
                                {positions.map((pos, index) => (
                                    <option key={index} value={pos.id}>
                                        {pos.position}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <Link
                                href={route("member.index")}
                                className="bg-white px-8 py-2.5 rounded-full text-[#004877] border-2 border-[#004877] font-semibold"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="bg-[#004877] px-8 py-2.5 rounded-full text-white font-semibold"
                            >
                                Edit
                            </button>
                        </div>
                    </form>
                </div>
            </AdminLayout>
        </>
    );
};
export default EditMember;
