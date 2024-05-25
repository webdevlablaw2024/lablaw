import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Link, useForm } from "@inertiajs/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditArticle = (props) => {
    const [imagePreview, setImagePreview] = useState(
        props.artikel.image
            ? `${window.location.origin}/storage/artikel/images/${props.artikel.image}`
            : null
    );
    const { data, setData, post, errors } = useForm({
        _method: "patch",
        id: props.artikel.id,
        title: props.artikel.title,
        author: props.artikel.author,
        description: props.artikel.description,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("article.update", { id: props.artikel.id }), data);
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
            setData("image", file); 
        }
    };

    return (
        <>
            <AdminLayout>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <div className="flex gap-x-2 items-center text-[#64748B] my-3">
                        <Link href={route("article.index")}>Article</Link>
                        <MdKeyboardArrowRight size={25} />
                        <Link href="" className="text-[#004877]">
                            Edit Article
                        </Link>
                    </div>
                    <h1 className="text-xl font-bold mb-3">Edit Article</h1>
                </div>
                <div className="p-4 border-2 border-gray-200 rounded-xl px-5 md:px-8 lg:px-11 xl:px-14 bg-white mt-3">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="title"
                                className="font-semibold text-lg"
                            >
                                Title*
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Please enter title"
                                className={`border-2 border-gray-300 rounded-lg p-2 ${
                                    errors.title ? "border-red-500" : ""
                                }`}
                                value={data.title || ""}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <p className="text-red-500">{errors.title}</p>
                            )}
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="author"
                                className="font-semibold text-lg"
                            >
                                Author*
                            </label>
                            <input
                                id="author"
                                type="text"
                                placeholder="Please enter author"
                                className={`border-2 border-gray-300 rounded-lg p-2 ${
                                    errors.author ? "border-red-500" : ""
                                }`}
                                value={data.author || ""}
                                onChange={(e) =>
                                    setData("author", e.target.value)
                                }
                            />
                            {errors.author && (
                                <p className="text-red-500">{errors.author}</p>
                            )}
                        </div>
                        <div className="my-5 flex flex-col gap-y-2">
                            <label
                                htmlFor="image"
                                className="font-semibold text-lg"
                            >
                                Image
                            </label>
                            <input
                                id="image"
                                type="file"
                                name="image"
                                accept="image/*"
                                className="border-2 border-gray-300 rounded-lg p-2"
                                onChange={handleImageChange}
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-2 w-40 h-40 object-cover"
                                />
                            )}
                            {errors.image && (
                                <p className="text-red-500">{errors.image}</p>
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
                                value={data.description || ""}
                                onChange={(value) =>
                                    setData("description", value)
                                }
                            />
                            {errors.description && (
                                <p className="text-red-500">
                                    {errors.description}
                                </p>
                            )}
                        </div>

                        <div className="flex justify-end mt-6 gap-x-4">
                            <Link
                                href={route("article.index")}
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

export default EditArticle;
