import React, { useState } from "react";
import Header from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import InputForm from "@/Components/InputForm";

const FormPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const institution = formData.get("institution");
        const major = formData.get("major");
        const reasons = formData.get("reasons");
        const summary = formData.get("summary");
        const newErrors = {};
    };
    return (
        <>
            <Header />
            <div className="mx-[160px] pt-40">
                <form onSubmit={handleSubmit}>
                    <InputForm
                        id="name"
                        label="Full name"
                    />
                    <InputForm
                        id="phone"
                        label="Phone Number"
                    />
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
                        className="shadow-md p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md mb-12"
                    ></textarea>

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
