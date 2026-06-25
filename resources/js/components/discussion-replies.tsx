import { User } from "lucide-react";
import { useState } from "react";
import { AttachmentModal } from "./attachmentModal";
import { formatDate } from "../utils/formatDate";

interface Reply {
    id: number;
    isi: string;
    attachment?: string;
    user?: { id: number; name: string; role: string };
    created_at?: string;
}

export function DiscussionReplies({ replies }: { replies: Reply[] }) {
    const [selectedFile, setSelectedFile] = useState<string | null>(null);
    return (
        <div className="space-y-4">
            {/* {replies.map((reply) => (
                <div
                    key={reply.id}
                    className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold">
                            {reply.user?.name ? (
                                reply.user.name.charAt(0)
                            ) : (
                                <User />
                            )}
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">
                                {reply.user?.name ?? "Anonim"}
                            </p>
                            <p className="text-xs text-gray-500">
                                {reply.created_at ?? ""}
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-700">{reply.isi}</p>

                    {reply.attachment && (
                        <div className="mt-3">
                            <button
                                onClick={() =>
                                    setSelectedFile(
                                        `/storage/${reply.attachment}`,
                                    )
                                }
                                className="text-blue-600 text-sm hover:underline"
                            >
                                Lihat Lampiran
                            </button>
                        </div>
                    )}
                </div>
            ))} */}
            {replies.map((reply) => (
                <div
                    key={reply.id}
                    className="bg-card rounded-xl p-6 border border-border hover:border-blue-200 transition-colors"
                >
                    <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                            <User />
                        </div>

                        {/* Reply Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-card-foreground">
                                    {reply.user?.name}
                                </h4>
                                <span className="text-xs bg-blue-200 text-blue-500 px-2 py-1 rounded-full">
                                    Role: {reply.user?.role}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-3">
                                {formatDate(reply.created_at)}
                            </p>
                            <p className="text-sm text-card-foreground leading-relaxed">
                                {reply.isi}
                            </p>
                            {reply.attachment && (
                                <div className="mt-3 ">
                                    <button
                                        onClick={() =>
                                            setSelectedFile(
                                                `/storage/${reply.attachment}`,
                                            )
                                        }
                                        className="duration-300 cursor-pointer bg-blue-600 rounded-2xl px-6 py-2 text-sm text-white hover:bg-blue-500"
                                    >
                                        Lihat Lampiran
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

            {selectedFile && (
                <AttachmentModal
                    fileUrl={selectedFile}
                    onClose={() => setSelectedFile(null)}
                />
            )}
        </div>
    );
}
