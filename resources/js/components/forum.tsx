import { useState } from "react";
import { MessageCircle, User, UserRoundPen } from "lucide-react";
import { router, usePage } from "@inertiajs/react";
import { AddQuestionModal } from "./add-question-modal";

export function Forum() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const page: any = usePage();
    const { auth, forums } = page.props as {
        auth: { user: { role: string } };
        forums: any[];
    };

    // Submit ke backend
    const handleAddQuestion = (data: { judul: string; deskripsi: string }) => {
        router.post(
            "/forum/create",
            {
                judul: data.judul,
                deskripsi: data.deskripsi,
            },
            {
                onSuccess: () => {
                    setIsModalOpen(false);
                },
            },
        );
    };

    return (
        <section id="forum" className="bg-gray-50 py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        FORUM DISKUSI
                    </h2>
                    <p className="text-gray-600">
                        Berbagi pengalaman dan solusi dengan komunitas IKM
                    </p>
                </div>

                {/* Jika belum ada diskusi */}
                {forums.length === 0 ? (
                    <div className="bg-white rounded-2xl p-8 shadow text-center text-gray-600">
                        <p className="text-lg font-semibold">
                            Belum ada diskusi
                        </p>
                        <p className="text-sm mt-2">
                            Jadilah yang pertama membuat pertanyaan!
                        </p>
                    </div>
                ) : (
                    <div className="space-y-4 mb-12">
                        {forums.map((discussion) => (
                            <div
                                key={discussion.id}
                                onClick={() =>
                                    router.visit(`/forum/${discussion.id}`)
                                }
                                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-400 transition-all duration-200 cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Avatar */}
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">
                                        {/* {discussion.user?.name?.charAt(0) ??
                                            "👤"} */}
                                        <UserRoundPen />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                                            <span className="text-slate-800">
                                                Judul Diskusi:{" "}
                                            </span>{" "}
                                            {discussion.judul}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Oleh: {discussion.user?.name}
                                        </p>
                                    </div>

                                    {/* Comments Count */}
                                    <div className="flex items-center gap-2 text-blue-600 font-semibold flex-shrink-0">
                                        <MessageCircle size={18} />
                                        <span>
                                            {discussion.replies_count ?? 0}{" "}
                                            Balasan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Add Question Button */}
                {(auth.user?.role === "ikm" || auth.user?.role === "admin") && (
                    <div className="flex justify-center pt-12">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors"
                        >
                            Tambah Pertanyaan
                        </button>
                    </div>
                )}

                <AddQuestionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddQuestion}
                />
            </div>
        </section>
    );
}
