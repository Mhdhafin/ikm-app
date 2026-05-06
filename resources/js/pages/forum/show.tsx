import { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import {
    ArrowLeft,
    Clock,
    User,
    MessageCircle,
    UserRoundPen,
    RollerCoaster,
    ShieldUser,
} from "lucide-react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { DiscussionReplies } from "../../components/discussion-replies";
import { ReplyForm } from "../../components/reply-form";
import { formatDate } from "../../utils/formatDate";

export default function Show() {
    const { props } = usePage<{
        forum: any;
        auth: { user: { id: number; name: string; role: string } };
    }>();
    const { forum, auth } = props;

    const [replies, setReplies] = useState(forum.replies || []);
    const [isLoading, setIsLoading] = useState(false);

    const handleReplySubmit = (data: { isi: string; file?: File }) => {
        const formData = new FormData();
        formData.append("isi", data.isi);
        if (data.file) {
            formData.append("file", data.file);
        }

        router.post(`/forum/${forum.id}/reply`, formData, {
            preserveScroll: true,
            preserveState: false,
            onSuccess: () => setIsLoading(false),
            onError: () => setIsLoading(false),
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
                <button
                    onClick={() => router.visit("/")}
                    className="flex items-center cursor-pointer gap-2 text-blue-600 font-semibold mb-8"
                >
                    <ArrowLeft size={20} />
                    Kembali ke Forum
                </button>

                {/* Forum Detail */}
                {/* <div className="bg-white rounded-2xl p-8 shadow mb-8">
                    <h1 className="text-3xl font-bold mb-2">{forum.judul}</h1>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {forum.deskripsi}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold">
                            {forum.category}
                        </span>
                    </div>
                </div> */}
                <div className="bg-card rounded-2xl p-8 border border-border mb-8">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
                            <UserRoundPen />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                                <span className="text-slate-800">
                                    Judul Diskusi:{" "}
                                </span>
                                {forum.judul}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <User size={16} />
                                    <span>{forum.user.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <ShieldUser size={16} />
                                    <span>Role: {forum.user.role}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock size={16} />
                                    <span>{formatDate(forum.created_at)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-border my-6"></div>

                    <p className="text-card-foreground leading-relaxed text-lg">
                        {forum.deskripsi}
                    </p>

                    {/* <div className="flex flex-wrap gap-2 mt-6">
                        <span className="inline-flex items-center gap-1 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            {discussion.category}
                        </span>
                    </div> */}
                </div>

                {/* Replies */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <MessageCircle size={24} className="text-blue-600" />
                        <h2 className="text-2xl font-bold">
                            Balasan ({replies.length})
                        </h2>
                    </div>

                    {replies.length === 0 ? (
                        <div className="bg-white rounded-xl p-6 border border-gray-200 text-center text-gray-600">
                            <p className="text-lg font-semibold">
                                Belum ada balasan
                            </p>
                            <p className="text-sm mt-2">
                                Mahasiswa belum memberikan tanggapan.
                            </p>
                        </div>
                    ) : (
                        <DiscussionReplies replies={replies} />
                    )}
                </div>

                {/* Reply Form */}
                {auth.user.role === "mahasiswa" && (
                    <ReplyForm
                        onSubmit={handleReplySubmit}
                        isLoading={isLoading}
                    />
                )}
            </main>

            <Footer />
        </div>
    );
}
