import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Showcase() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Project 1: UKM Kopi & Universitas Maju",
            description:
                "Peningkatan efisiensi produksi 30% melalui teknologi tepat guna",
            image: "bg-linear-to-br from-amber-800 via-amber-600 to-amber-700",
        },
        {
            id: 2,
            title: "Project 2: Batik Lestari & Kampus Kreatif",
            description:
                "Rebranding produk batik dengan desain modern dan pemasaran digital",
            image: "bg-linear-to-br from-indigo-700 via-blue-600 to-blue-700",
        },
        {
            id: 3,
            title: "Project 3: Inovasi Pangan & Politeknik",
            description:
                "Pengembangan produk makanan inging berbasis bahan lokal yang inovatif",
            image: "bg-linear-to-br from-cyan-600 via-blue-500 to-blue-600",
        },
        {
            id: 4,
            title: "Project 4: Kerajinan Tangan & Universitas Seni",
            description:
                "Ekspor internasional kerajinan tangan lokal dengan kualitas premium",
            image: "bg-linear-to-br from-purple-700 via-pink-600 to-purple-700",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + projects.length) % projects.length,
        );
    };

    // Show 3 slides at a time
    const visibleSlides = [
        projects[currentSlide],
        projects[(currentSlide + 1) % projects.length],
        projects[(currentSlide + 2) % projects.length],
    ];

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-2 text-foreground">
                    SHOWCASE KOLABORASI
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lihat kisah sukses kolaborasi antara UMKM dan kampus yang
                    telah menciptakan inovasi dan pertumbuhan bersama
                </p>

                {/* Carousel */}
                <div className="relative">
                    {/* Slides Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
                        {visibleSlides.map((project, index) => (
                            <div
                                key={`${currentSlide}-${index}`}
                                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Image Placeholder */}
                                <div
                                    className={`${project.image} h-48 relative overflow-hidden`}
                                >
                                    <div className="absolute inset-0 bg-black/20" />
                                </div>

                                {/* Content */}
                                <div className="bg-card p-6">
                                    <h3 className="font-bold text-lg text-card-foreground mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${
                                    index === currentSlide
                                        ? "bg-accent w-8"
                                        : "bg-muted w-2 hover:bg-muted-foreground"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
