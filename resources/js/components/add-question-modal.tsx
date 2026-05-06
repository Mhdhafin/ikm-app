import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface AddQuestionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: { judul: string; deskripsi: string }) => void;
}

export function AddQuestionModal({
    isOpen,
    onClose,
    onSubmit,
}: AddQuestionModalProps) {
    const [judul, setTitle] = useState("");
    const [deskripsi, setDescription] = useState("");
    // const [category, setCategory] = useState("Branding");
    const [errors, setErrors] = useState<{
        judul?: string;
        deskripsi?: string;
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
        const newErrors: { judul?: string; deskripsi?: string } = {};

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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            onSubmit({
                judul,
                deskripsi,
                // category,
            });
            setTitle("");
            setDescription("");
            // setCategory("Branding");
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
                        {/* Category Select */}
                        {/* <div>
                            <label
                                htmlFor="category"
                                className="block text-sm font-semibold text-foreground mb-2"
                            >
                                Kategori
                            </label>
                            <select
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                            >
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div> */}

                        {/* Title Input */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-sm font-semibold text-foreground mb-2"
                            >
                                Judul Pertanyaan
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={judul}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    if (errors.judul)
                                        setErrors({
                                            ...errors,
                                            judul: undefined,
                                        });
                                }}
                                placeholder="Contoh: Bagaimana cara meningkatkan penjualan online?"
                                maxLength={100}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                                    errors.judul
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        : "border-border focus:border-accent focus:ring-accent/20"
                                }`}
                            />
                            <div className="flex items-center justify-between mt-2">
                                {errors.judul && (
                                    <p className="text-sm text-red-500">
                                        {errors.judul}
                                    </p>
                                )}
                                <p
                                    className={`text-xs ml-auto ${judul.length >= 90 ? "text-red-500" : "text-muted-foreground"}`}
                                >
                                    {judul.length}/100
                                </p>
                            </div>
                        </div>

                        {/* Description Textarea */}
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-sm font-semibold text-foreground mb-2"
                            >
                                Deskripsi Detail
                            </label>
                            <textarea
                                id="deskripsi"
                                value={deskripsi}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    if (errors.deskripsi)
                                        setErrors({
                                            ...errors,
                                            deskripsi: undefined,
                                        });
                                }}
                                placeholder="Jelaskan pertanyaan Anda secara detail untuk mendapatkan jawaban yang lebih baik..."
                                rows={6}
                                maxLength={1000}
                                className={`w-full px-4 py-3 border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all resize-none ${
                                    errors.deskripsi
                                        ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                        : "border-border focus:border-accent focus:ring-accent/20"
                                }`}
                            />
                            <div className="flex items-center justify-between mt-2">
                                {errors.deskripsi && (
                                    <p className="text-sm text-red-500">
                                        {errors.deskripsi}
                                    </p>
                                )}
                                <p
                                    className={`text-xs ml-auto ${deskripsi.length >= 900 ? "text-red-500" : "text-muted-foreground"}`}
                                >
                                    {deskripsi.length}/1000
                                </p>
                            </div>
                        </div>

                        {/* Submit Buttons */}
                        <div className="flex gap-3 justify-end pt-6 border-t border-border">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="px-6 py-3 border border-border rounded-lg text-foreground font-medium hover:bg-muted transition-colors"
                            >
                                Batal
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-transparent border-t-accent-foreground rounded-full animate-spin" />
                                        Mengirim...
                                    </>
                                ) : (
                                    "Posting Pertanyaan"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
