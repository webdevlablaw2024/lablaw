import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";
import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import InputForm from "@/Components/InputForm";

const FormPage = () => {
    const [cvFile, setCvFile] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setCvFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: ".pdf",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", event.target.name.value);
        formData.append("phone", event.target.phone.value);
        formData.append("email", event.target.email.value);
        formData.append("institution", event.target.institution.value);
        formData.append("major", event.target.major.value);
        formData.append("reasons", event.target.reasons.value);
        formData.append("summary", event.target.summary.value);
        if (cvFile) {
            formData.append("cv", cvFile);
        }
        
        try {
            const response = await fetch("/api/formSubmit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Your form has been successfully submitted.",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "There was an error submitting your form. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <>
            <Header />
            <div className="mx-[160px] pt-40">
                <h1 className="text-4xl font-bold mb-10">
                    Fullstack Web Development
                </h1>
                <form onSubmit={handleSubmit}>
                    <InputForm id="name" label="Full name" />
                    <InputForm id="phone" label="Phone Number" />
                    <InputForm id="email" label="Email" />
                    <InputForm id="institution" label="Institution" />
                    <InputForm id="major" label="Major" />

                    <label
                        htmlFor="reasons"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Reasons for choosing a division
                    </label>
                    <textarea
                        name="reasons"
                        id="reasons"
                        cols="30"
                        rows="10"
                        className="shadow-md p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5"
                    ></textarea>

                    <label
                        htmlFor="summary"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Summary
                    </label>
                    <textarea
                        name="summary"
                        id="summary"
                        cols="30"
                        rows="10"
                        className="shadow-md p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-5"
                    ></textarea>

                    <label
                        htmlFor="cv"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Upload CV
                    </label>
                    <div
                        {...getRootProps()}
                        className={`p-6 border-2 rounded-md hover:cursor-pointer shadow-md mb-12 ${
                            isDragActive ? "border-blue-500" : "border-gray-300"
                        } mb-12`}
                    >
                        <input {...getInputProps()}/>
                        {isDragActive ? (
                            <p>Drop the files here...</p>
                        ) : (
                            <p>
                                Drag & drop your CV here, or <span className="text-blue-500">click to select
                                files</span> <span  className="text-gray-400">(.pdf only)</span>
                            </p>
                        )}
                        {cvFile && (
                            <p className="mt-2 text-green-500">{cvFile.name}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className=" text-[#828282] px-7 py-2 rounded-lg border-2 border-[#828282] border-opacity-50 hover:bg-[#828282] hover:text-[#333333] transition duration-300 ease-in-out mr-8"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-[#004877] text-[#FFFFFF] px-7 py-2 rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default FormPage;
