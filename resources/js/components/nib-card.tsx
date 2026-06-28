import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface Props {
    src: string;
}

export function NIBCard({ src }: Props) {
    const [expandedStep, setExpandedStep] = useState<number | null>(null);

    const benefits = [
        {
            icon: "✓",
            title: "Legalitas Bisnis Resmi",
            description: "Identitas bisnis yang diakui pemerintah",
        },
        {
            icon: "✓",
            title: "Akses Pembiayaan Bank",
            description: "Lebih mudah mendapatkan kredit dan pembiayaan",
        },
        {
            icon: "✓",
            title: "Izin Operasional Lengkap",
            description: "Akses ke semua perizinan bisnis yang diperlukan",
        },
    ];

    const steps = [
        {
            id: 1,
            title: "Registrasi Akun OSS",
            subtitle: "Buat akun di sistem OSS",
            description:
                "Daftar akun di OSS (Online Single Submission) untuk memulai proses NIB",
            details: [
                "Buka website OSS resmi",
                "Isi data diri dengan lengkap",
                "Verifikasi email dan nomor HP",
                "Buat password yang kuat",
            ],
            button: "Duat akasi Lorem OSS",
        },
        {
            id: 2,
            title: "Lengkapi Data Usaha",
            subtitle: "Isi informasi usaha Anda",
            description:
                "Masukkan data lengkap tentang usaha, lokasi, dan jenis bisnis",
            details: [
                "Nama usaha yang akan didaftarkan",
                "Jenis dan klasifikasi usaha",
                "Lokasi usaha/kantor",
                "Deskripsi detail usaha",
            ],
            button: "Mudah Fuman",
        },
        {
            id: 3,
            title: "Unggah Dokumen",
            subtitle: "Upload KTP, NPWP, dll.",
            description: "Siapkan dan unggah dokumen pendukung yang diperlukan",
            details: [
                "Fotokopi KTP pemilik",
                "Surat keterangan domisili",
                "NPWP (jika ada)",
                "Akta pendirian (untuk badan usaha)",
            ],
            button: "Daftar NIB",
        },
        {
            id: 4,
            title: "Verifikasi Data",
            subtitle: "Data akan diperiksa",
            description:
                "Tim verifikasi OSS akan memeriksa kelengkapan dan kevalidan semua data",
            details: [
                "Pengecekan dokumen oleh admin",
                "Validasi data usaha",
                "Klarifikasi jika ada data yang kurang",
                "Proses verifikasi 1-3 hari kerja",
            ],
            button: "Terbit NIB",
        },
        {
            id: 5,
            title: "Terbit NIB",
            subtitle: "NIB diterbitkan",
            description:
                "NIB akan diterbitkan dan dapat diunduh dari akun OSS Anda",
            details: [
                "NIB berhasil diterbitkan",
                "Download sertifikat NIB",
                "Simpan nomor NIB (16 digit)",
                "NIB berlaku seumur hidup",
            ],
            button: "3. Maudihittin Diwta",
        },
        {
            id: 6,
            title: "Aktivasi Izin Usaha",
            subtitle: "Perbarui data usaha",
            description:
                "Setelah NIB diterima, lanjutkan untuk mengurus izin usaha tambahan",
            details: [
                "Pilih izin usaha yang diperlukan",
                "Izin Mendirikan Bangunan (IMB) jika perlu",
                "Izin Usaha Perdagangan (SIUP)",
                "Surat Keterangan Domisili Usaha (SKDU)",
            ],
            button: "7. Pemutakhiran Data",
        },
    ];

    return (
        <section id="nib" className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Nomor Induk Berusaha (NIB) - IKM
                    </h2>
                    <p className="text-gray-600">
                        Nomor Induk Berusaha membantu IKM menjalankan usaha
                        secara sah, terstruktur, dan diakui oleh pemerintah
                    </p>
                </div>
                <div className="bg-card rounded-3xl border-2 border-border p-8 md:p-12 shadow-lg">
                    {/* Header Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-border items-center">
                        {/* Logo Besar */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-48 h-48 md:w-64 md:h-64">
                                <img
                                    src={src}
                                    alt="NIB Logo"
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Title & Description */}
                        <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                Nomor Induk Berusaha
                            </h1>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                NIB adalah identitas usaha yang diterbitkan
                                melalui sistem OSS. Dengan NIB, Anda dapat
                                mengurus izin usaha dan mendapatkan akses
                                pembiayaan dengan mudah.
                            </p>

                            {/* Benefits */}
                            <div className="space-y-3 pt-4">
                                {benefits.map((benefit, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <p className="font-semibold text-foreground text-sm">
                                            {benefit.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Steps Section */}
                    <h2 className="text-2xl font-bold text-foreground mb-4 text-start">
                        Tahapan Proses Sertifikasi Halal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="border border-border rounded-xl overflow-hidden hover:border-primary transition-colors h-fit self-start"
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
                                    className="w-full cursor-pointer px-6 py-4 flex items-center gap-4 hover:bg-muted transition-colors text-left bg-muted/30"
                                >
                                    <span className="text-xl font-bold text-primary min-w-8">
                                        {step.id}.
                                    </span>
                                    <div className="flex-1">
                                        <span className="text-lg font-semibold text-foreground">
                                            {step.title}
                                        </span>
                                        <p className="text-sm text-muted-foreground mt-1">
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
                                    <div className="px-6 py-4 bg-background border-t border-border space-y-3">
                                        <p className="font-semibold text-foreground mb-2">
                                            Detail Tahapan:
                                        </p>
                                        <ul className="space-y-1">
                                            {step.details.map((detail, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-muted-foreground text-sm"
                                                >
                                                    <span className="text-accent font-bold mt-0.5">
                                                        •
                                                    </span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
