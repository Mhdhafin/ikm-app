import { useState } from "react";
import { X } from "lucide-react";

interface AddQuestionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: {
        judul: string;
        deskripsi: string;
        category_id: number;
    }) => void;
    categories: { id: number; name: string }[]; // daftar kategori dari backend
}

export function AddQuestionModal({
    isOpen,
    onClose,
    onSubmit,
    categories,
}: AddQuestionModalProps) {
    const [judul, setTitle] = useState("");
    const [deskripsi, setDescription] = useState("");
    const [category_id, setCategoryId] = useState<number | null>(null);
    const [errors, setErrors] = useState<{
        judul?: string;
        deskripsi?: string;
        category_id?: string;
    }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 200);
    };

    const validateForm = () => {
        const newErrors: {
            judul?: string;
            deskripsi?: string;
            category_id?: string;
        } = {};

        if (!judul.trim()) {
            newErrors.judul = "Judul pertanyaan tidak boleh kosong";
        } else if (judul.length < 10) {
            newErrors.judul = "Judul minimal harus 10 karakter";
        } else if (judul.length > 100) {
            newErrors.judul = "Judul maksimal 100 karakter";
        }

        if (!deskripsi.trim()) {
            newErrors.deskripsi = "Deskripsi tidak boleh kosong";
        } else if (deskripsi.length < 20) {
            newErrors.deskripsi = "Deskripsi minimal harus 20 karakter";
        }

        if (!category_id) {
            newErrors.category_id = "Kategori harus dipilih";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        setTimeout(() => {
            onSubmit({
                judul,
                deskripsi,
                category_id: category_id!, // kirim id kategori
            });
            setTitle("");
            setDescription("");
            setCategoryId(null);
            setErrors({});
            setIsSubmitting(false);
            handleClose();
        }, 500);
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 ${
                    isClosing
                        ? "animate-backdrop-exit"
                        : "animate-backdrop-enter"
                }`}
                onClick={handleClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className={`bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-border ${
                        isClosing ? "animate-modal-exit" : "animate-modal-enter"
                    }`}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-card border-b border-border px-6 py-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-card-foreground">
                                Tambah Pertanyaan Baru
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1">
                                Bagikan pertanyaan Anda dengan komunitas IKM
                            </p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0"
                        >
                            <X size={24} className="text-foreground" />
                        </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <div className="flex justify-between items-center gap-5">
                            {/* Judul */}
                            <input
                                type="text"
                                value={judul}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Judul"
                                className="w-full border rounded p-2"
                            />
                            {errors.judul && (
                                <p className="text-red-500">{errors.judul}</p>
                            )}

                            {/* Category Select */}
                            {categories.length > 0 && (
                                <select
                                    value={category_id ?? ""}
                                    onChange={(e) =>
                                        setCategoryId(Number(e.target.value))
                                    }
                                    className="w-full cursor-pointer border rounded p-2"
                                >
                                    <option value="">Pilih Kategori</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </select>
                            )}
                            {errors.category_id && (
                                <p className="text-red-500">
                                    {errors.category_id}
                                </p>
                            )}
                        </div>

                        {/* Deskripsi */}
                        <textarea
                            value={deskripsi}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Deskripsi"
                            className="w-full border rounded p-2"
                        />
                        {errors.deskripsi && (
                            <p className="text-red-500">{errors.deskripsi}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded-lg hover:bg-blue-500"
                        >
                            {isSubmitting ? "Menyimpan..." : "Simpan"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
