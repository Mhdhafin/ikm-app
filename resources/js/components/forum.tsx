import { useState } from "react";
import { MessageCircle, UserRoundPen } from "lucide-react";
import { router, usePage } from "@inertiajs/react";
import { AddQuestionModal } from "./add-question-modal";

export function Forum() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<number | null>(null);

    const page: any = usePage();
    const {
        auth,
        forums,
        categories = [],
    } = page.props as {
        auth: { user: { role: string } };
        forums: any[];
        categories: { id: number; name: string }[];
    };

    // Submit ke backend
    const handleAddQuestion = (data: {
        judul: string;
        deskripsi: string;
        category_id: number;
    }) => {
        router.post(
            "/forum/create",
            {
                judul: data.judul,
                deskripsi: data.deskripsi,
                category_id: data.category_id, // kirim id kategori
            },
            {
                onSuccess: () => {
                    setIsModalOpen(false);
                },
            },
        );
    };

    // Filter forum berdasarkan kategori aktif (opsional)
    const filteredForums =
        activeCategory !== null
            ? forums.filter((f) => f.category_id === activeCategory)
            : forums;

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

                {/* Category Buttons */}
                {categories.length > 0 && (
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all duration-200 ${
                                activeCategory === null
                                    ? "bg-blue-600 text-accent-foreground"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                            Semua
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 cursor-pointer rounded-full font-medium transition-all duration-200 ${
                                    activeCategory === category.id
                                        ? "bg-blue-600 text-accent-foreground"
                                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                )}

                {/* Forum List */}
                {filteredForums.length === 0 ? (
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
                        {filteredForums.map((discussion) => (
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
                                        <UserRoundPen />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg text-gray-900 mb-1 hover:text-blue-600 transition-colors">
                                            <span className="text-slate-800">
                                                Judul Diskusi:{" "}
                                            </span>
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
                    <div className="flex justify-center pt-8 ">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors"
                        >
                            Tambah Pertanyaan
                        </button>
                    </div>
                )}

                <AddQuestionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddQuestion}
                    categories={categories} // WAJIB dikirim
                />
            </div>
        </section>
    );
}
