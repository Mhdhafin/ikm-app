import { useState } from "react";

export function AttachmentModal({
    fileUrl,
    onClose,
}: {
    fileUrl: string;
    onClose: () => void;
}) {
    if (!fileUrl) return null;

    const isImage = /\.(jpg|jpeg|png|gif)$/i.test(fileUrl);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>

                {isImage ? (
                    <img
                        src={fileUrl}
                        alt="Lampiran"
                        className="max-h-[70vh] mx-auto rounded"
                    />
                ) : (
                    <iframe
                        src={fileUrl}
                        className="w-full h-[70vh]"
                        title="Lampiran"
                    ></iframe>
                )}

                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                    >
                        Kembali
                    </button>
                </div>
            </div>
        </div>
    );
}
