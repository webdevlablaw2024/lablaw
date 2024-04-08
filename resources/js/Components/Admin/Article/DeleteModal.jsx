import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const DeleteModal = ({ isOpen, onClose, handleDelete }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 relative">
                        <IoMdClose
                            className="absolute top-0 right-0 m-4 cursor-pointer"
                            onClick={onClose}
                            size={20}
                            color="#6B7280"
                        />
                        <img
                            src="/icons/warning.svg"
                            alt=""
                            className="mx-auto mb-4 w-16"
                        />
                        <p className="text-xl font-bold mb-4 text-center">
                            Delete Article
                        </p>
                        <p className="text-[#6B7280]">
                            Are you sure you want to delete the article?
                        </p>
                        <div className="mt-4 flex justify-center">
                            <button
                                className="bg-white text-[#004877] border-2 border-[#004877] px-8 py-2 rounded-full mr-4"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-[#004877] text-white px-8 py-2 rounded-full"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeleteModal;
