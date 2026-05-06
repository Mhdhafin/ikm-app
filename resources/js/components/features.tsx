import { MessageCircle, Users, BookOpen } from "lucide-react";

export function Features() {
    const features = [
        {
            icon: MessageCircle,
            title: "Topik Terkini",
            subtitle: "Montserrat - Terkini",
            description:
                "Akses diskusi topik terkini seputar industri kecil menengah dan solusi bisnis modern",
        },
        {
            icon: Users,
            title: "Kolaborasi Sukses",
            subtitle: "Kolaborasi Sukses",
            description:
                "Temukan mitra kolaborasi terbaik untuk mengembangkan bisnis IKM Anda bersama kampus",
        },
        {
            icon: BookOpen,
            title: "Artikel Edukasi",
            subtitle: "Forum IKM - Kampus",
            description:
                "Pelajari strategi bisnis, tips marketing, dan inovasi produk dari expert di industri",
        },
    ];

    return (
        <section className="bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -translate-y-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all hover:translate-y-[-4px] duration-300"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center shrink-0">
                                        <Icon className="w-7 h-7 text-accent" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-card-foreground">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {feature.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
