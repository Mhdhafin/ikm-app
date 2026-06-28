import { useState } from "react";
// import Image from "next/image";
import { Check, ChevronDown, CircleCheckBig } from "lucide-react";

interface Props {
    src: string;
}

export function HalalCard({ src }: Props) {
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    const benefits = [
        {
            // icon: "✓",
            title: "Menjamin Produk Halal dan Berkualitas  ",
            description:
                "Memberikan kepastian bahwa produk sesuai syariat dan standar mutu.",
        },
        {
            // icon: "✓",
            title: "Meningkatkan Kepercayaan Konsumen",
            description:
                "Membuat konsumen lebih yakin dan loyal terhadap produk usaha.",
        },
        {
            // icon: "✓",
            title: "Memperluas Akses Pasar",
            description:
                "Membuka peluang masuk ke pasar nasional maupun internasional.",
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Daftar Akun SiHalal BPJPH",
            description:
                "Buat akun di aplikasi resmi https://ptsp.halal.go.id dengan KTP, NIB, email aktif, dan data usaha",
            details: [
                "Siapkan KTP dan NIB",
                "Email aktif untuk verifikasi",
                "Data lengkap usaha Anda",
                "Gunakan email khusus bisnis untuk kemudahan validasi",
            ],
            icon: "📱",
        },
        {
            id: 2,
            title: "Isi Formulir Pendaftaran Sertifikasi Halal",
            description:
                "Lengkapi formulir dengan data pelaku usaha, produk, bahan, diagram alur produksi, dan foto fasilitas",
            details: [
                "Data pelaku usaha lengkap",
                "Data produk terperinci",
                "Daftar bahan dan pemasok",
                "Diagram alur proses produksi",
                "Foto fasilitas produksi",
            ],
            icon: "📝",
        },
        {
            id: 3,
            title: "Siapkan Bahan dan Pemasok yang Sudah Halal",
            description:
                "Pastikan semua bahan memiliki sertifikat halal pemasok, COA, invoice, dan daftar komposisi yang jelas",
            details: [
                "Sertifikat halal dari semua pemasok",
                "Certificate of Analysis (COA)",
                "Invoice bahan baku",
                "Daftar komposisi lengkap",
                "Konsultasi untuk mengganti bahan meragukan",
            ],
            icon: "✓",
        },
        {
            id: 4,
            title: "Pemeriksaan Proses Produksi oleh Lab Uji Makanan",
            description:
                "Produk high-risk akan diuji di lab untuk uji DNA porcine, alcohol, dan kandungan bahan kritis",
            details: [
                "Uji DNA porcine",
                "Uji kandungan alcohol",
                "Uji bahan kritis lainnya",
                "Certificate of Analysis dari lab",
            ],
            icon: "🧪",
        },
        {
            id: 5,
            title: "Audit Halal oleh Lembaga Pemeriksa Halal (LPH)",
            description:
                "Auditor halal memeriksa layout, bahan baku, proses manufaktur, kebersihan, dan pemisahan produk",
            details: [
                "Pemeriksaan layout fasilitas",
                "Penyimpanan bahan baku",
                "Proses manufaktur lengkap",
                "Catatan dan sistem kebersihan",
                "Pemisahan produk halal vs non-halal",
            ],
            icon: "🔍",
        },
        {
            id: 6,
            title: "Penetapan Halal oleh MUI",
            description:
                "Komisi Fatwa MUI melakukan review untuk memastikan tidak ada unsur haram dan proses sesuai standar",
            details: [
                "Verifikasi tidak ada unsur haram",
                "Review proses produksi",
                "Verifikasi bahan aman",
                "Pemeriksaan kelayakan fasilitas",
            ],
            icon: "✅",
        },
        {
            id: 7,
            title: "Penerbitan Sertifikat Halal oleh BPJPH",
            description:
                "BPJPH mengeluarkan sertifikat halal resmi yang dapat diunduh melalui dashboard SiHalal",
            details: [
                "Penerbitan sertifikat halal resmi",
                "Nomor sertifikat unik",
                "Masa berlaku sertifikat",
                "Download sertifikat di dashboard SiHalal",
            ],
            icon: "📜",
        },
    ];

    return (
        <section id="halal" className="py-12 px-4">
            <div className="max-w-7xl  mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Sertifikasi Halal - IKM
                    </h2>
                    <p className="text-gray-600">
                        Panduan lengkap sertifikasi halal untuk usaha IKM dengan
                        penjelasan, tahapan proses dan persyaratan sesuai
                        syariat Islam
                    </p>
                </div>
                <div className="bg-card rounded-3xl border-2 border-border p-6 md:p-10 shadow-lg">
                    {/* Header Section - Compact Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-10 border-b border-border items-center">
                        {/* Logo Besar */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-40 h-40 md:w-56 md:h-56">
                                <img
                                    src={src}
                                    alt="Logo Halal"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Title & Description */}
                        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold text-primary">
                                Sertifikasi Halal
                            </h1>

                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                Sertifikasi Halal adalah proses memastikan bahwa
                                produk usaha memenuhi standar kehalalan sesuai
                                syariat Islam, sehingga dapat diterima oleh
                                konsumen lokal dan global.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-2 pt-2">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <CircleCheckBig className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <p className="font-semibold text-foreground text-sm">
                                            {benefit.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-foreground mb-4 text-start">
                            Tahapan Proses Sertifikasi Halal
                        </h2>

                        {/* Grid 2 kolom agar card horizontal */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="border border-border rounded-xl overflow-hidden hover:border-primary transition-colors h-fit"
                                >
                                    {/* Step Header */}
                                    <button
                                        onClick={() =>
                                            setExpandedStep(
                                                expandedStep === step.id
                                                    ? null
                                                    : step.id,
                                            )
                                        }
                                        className="w-full cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-muted transition-colors text-left bg-muted/30"
                                    >
                                        <span className="text-2xl flex-shrink-0">
                                            {step.icon}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="text-base font-bold text-primary">
                                                    {step.id}.
                                                </span>
                                                <span className="text-base font-semibold text-foreground">
                                                    {step.title}
                                                </span>
                                                {/* <span className="text-xs text-muted-foreground">
                                                    {step.subtitle}
                                                </span> */}
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {step.description}
                                            </p>
                                        </div>
                                        <ChevronDown
                                            className={`w-5 h-5 text-foreground flex-shrink-0 transition-transform ${
                                                expandedStep === step.id
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />
                                    </button>

                                    {/* Step Details */}
                                    {expandedStep === step.id && (
                                        <div className="px-6 py-4 bg-background border-t border-border space-y-4 max-h-64 overflow-y-auto">
                                            <p className="font-semibold text-foreground mb-3">
                                                Detail Tahapan:
                                            </p>
                                            <ul className="space-y-2">
                                                {step.details.map(
                                                    (detail, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-3 text-muted-foreground"
                                                        >
                                                            <span className="text-accent font-bold mt-0.5">
                                                                •
                                                            </span>
                                                            <span>
                                                                {detail}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
