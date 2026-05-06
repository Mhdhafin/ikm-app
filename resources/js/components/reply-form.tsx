import { useState } from "react";
import { Send, Image as ImageIcon } from "lucide-react";

interface ReplyFormProps {
    onSubmit: (data: { isi: string; file?: File }) => void;
    isLoading?: boolean;
}

export function ReplyForm({ onSubmit, isLoading = false }: ReplyFormProps) {
    const [isi, setIsi] = useState("");
    const [file, setFile] = useState<File | undefined>(undefined);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isi.trim()) {
            setError("Balasan tidak boleh kosong");
            return;
        }

        onSubmit({ isi, file });

        // Reset form
        setIsi("");
        setFile(undefined);
        setError("");
    };

    return (
        <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Tulis Balasan Anda
            </h3>

            <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-5"
            >
                {/* Isi Balasan */}
                <div>
                    <label
                        htmlFor="isi"
                        className="block text-sm font-semibold text-card-foreground mb-2"
                    >
                        Pesan Anda
                    </label>
                    <textarea
                        id="isi"
                        value={isi}
                        onChange={(e) => {
                            setIsi(e.target.value);
                            if (error) setError("");
                        }}
                        placeholder="Tulis balasan Anda di sini..."
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none ${
                            error ? "border-red-500" : "border-border"
                        }`}
                    />
                    {error && (
                        <p className="text-xs text-red-500 mt-1">{error}</p>
                    )}
                </div>

                {/* Upload File/Gambar */}
                <div>
                    <label
                        htmlFor="file"
                        className="block text-sm font-semibold text-card-foreground mb-2"
                    >
                        Lampiran (opsional)
                    </label>
                    <input
                        id="file"
                        type="file"
                        accept="image/*,.pdf,.doc,.docx"
                        onChange={(e) => setFile(e.target.files?.[0])}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                    {file && (
                        <p className="text-xs text-gray-500 mt-1">
                            File terpilih: {file.name}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        <Send size={18} />
                        {isLoading ? "Mengirim..." : "Kirim Balasan"}
                    </button>
                </div>
            </form>
        </div>
    );
}
