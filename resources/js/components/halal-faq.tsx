import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function HalalFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Siapa yang bisa mengajukan sertifikasi halal?",
            answer: "Setiap usaha yang memproduksi makanan, minuman, obat, atau produk konsumsi lainnya dapat mengajukan sertifikasi halal. Termasuk UMKM, IKM, perusahaan besar, dan produsen lokal yang ingin memperluas pasar mereka.",
        },
        {
            question: "Apa saja dokumen yang dibutuhkan untuk pengajuan?",
            answer: "Dokumen yang diperlukan meliputi: (1) Identitas dan legalitas perusahaan, (2) Daftar produk yang akan disertifikasi, (3) Daftar bahan baku dan aditif, (4) Sertifikat dari supplier bahan baku, (5) Proses produksi dan SOP, (6) Sertifikat halal supplier jika ada.",
        },
        {
            question: "Berapa biaya sertifikasi halal?",
            answer: "Biaya sertifikasi halal berkisar antara Rp 1-5 juta tergantung jumlah produk dan kompleksitas proses produksi. Biaya ini mencakup biaya administrasi, audit, pengujian laboratorium, dan penerbitan sertifikat.",
        },
        {
            question: "Berapa lama proses sertifikasi halal?",
            answer: "Waktu proses sertifikasi halal biasanya memakan waktu 3-6 bulan sejak pengajuan. Waktu dapat lebih cepat atau lebih lama tergantung kelengkapan dokumen dan hasil audit lapangan.",
        },
        {
            question: "Berapa lama masa berlaku sertifikat halal?",
            answer: "Sertifikat halal berlaku selama 3 tahun. Setelah itu, perusahaan dapat melakukan perpanjangan dengan melakukan audit ulang dan verifikasi dokumen yang sudah diperbarui.",
        },
        {
            question:
                "Bagaimana jika ada perubahan bahan baku atau proses produksi?",
            answer: "Jika terjadi perubahan signifikan pada bahan baku atau proses produksi, perusahaan harus segera melaporkan kepada lembaga sertifikasi halal. Perubahan ini mungkin memerlukan verifikasi dan audit ulang sebelum disetujui.",
        },
    ];

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto mb-12">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Temukan jawaban untuk pertanyaan umum tentang
                        sertifikasi halal
                    </p>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl text-card-foreground border border-border overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index,
                                    )
                                }
                                className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                            >
                                <h3 className="font-semibold text-foreground text-lg">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    size={24}
                                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-6 border-t border-border pt-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                {/* <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Siap Mendapatkan Sertifikasi Halal?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Hubungi kami atau konsultasikan kebutuhan bisnis Anda dengan tim ahli
            kami untuk memulai proses sertifikasi halal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Konsultasi Gratis
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Download Panduan
            </button>
          </div>
        </div> */}
            </div>
        </section>
    );
}
