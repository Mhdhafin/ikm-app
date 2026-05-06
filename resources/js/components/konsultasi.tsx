import { useState } from "react";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";

export function Konsultasi() {
    const [problem, setProblem] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const consultations = [
        {
            id: 1,
            topic: "Optimasi Rantai Pasok",
            status: "Diakui",
            statusColor: "bg-yellow-100 text-yellow-800",
            replies: 3,
            tag: "Selesai",
            tagColor: "bg-green-100 text-green-700",
        },
        {
            id: 2,
            topic: "Strategi Marketing Digital",
            status: "Menunggu",
            statusColor: "bg-blue-100 text-blue-800",
            replies: 5,
            tag: "Dalam Diskusi",
            tagColor: "bg-blue-100 text-blue-700",
        },
        {
            id: 3,
            topic: "Manajemen Keuangan UMKM",
            status: "Selesai",
            statusColor: "bg-green-100 text-green-800",
            replies: 8,
            tag: "Selesai",
            tagColor: "bg-green-100 text-green-700",
        },
    ];

    const categories = [
        "Pemasaran",
        "Produksi",
        "Keuangan",
        "Manajemen",
        "Teknologi",
    ];

    return (
        <section className="py-16 bg-linear-to-br from-background via-background to-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
                    KONSULTASI LANGSUNG
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Consultation Form */}
                    <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                        <h3 className="text-xl font-bold text-card-foreground mb-6">
                            Masalah Anda
                        </h3>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-card-foreground mb-2">
                                Jelaskan tantangan bisnis atau kebutuhan
                                konsultasi Anda...
                            </label>
                            <textarea
                                value={problem}
                                onChange={(e) => setProblem(e.target.value)}
                                placeholder="Tulis masalah atau tantangan yang ingin Anda diskusikan dengan para ahli..."
                                className="w-full h-32 p-4 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:outline-hidden focus:ring-2 focus:ring-accent resize-none"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-card-foreground mb-3">
                                Kategori
                            </label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                            selectedCategory === cat
                                                ? "bg-accent text-accent-foreground"
                                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl transition-colors">
                            Ajukan Konsultasi
                        </button>
                    </div>

                    {/* Consultation List */}
                    <div className="space-y-4">
                        {consultations.map((consult) => (
                            <div
                                key={consult.id}
                                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h4 className="font-bold text-lg text-card-foreground pr-4">
                                        Topik Konsultasi: {consult.topic}
                                    </h4>
                                    <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-2">
                                        Lihat Detail
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 flex-wrap">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-semibold text-muted-foreground">
                                            Status:
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${consult.statusColor}`}
                                        >
                                            {consult.status}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground font-medium">
                                            {consult.replies} Balasan
                                        </span>
                                    </div>

                                    <div className="ml-auto">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${consult.tagColor}`}
                                        >
                                            {consult.tag}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
