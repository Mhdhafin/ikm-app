import { Link } from "@inertiajs/react";
import { MessageSquare, Phone } from "lucide-react";

interface Props {
    src: string;
}

export function Hero({ src }: Props) {
    return (
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Text Section */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-pretty">
                                Hubungkan IKM dengan Kampus untuk Solusi Nyata
                            </h1>
                            <p className="text-lg opacity-90">
                                Bergabunglah dengan komunitas yang saling
                                berbagi pengetahuan dan pengalaman untuk
                                mendorong inovasi bisnis.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
                                <MessageSquare size={20} />
                                <Link href="#forum">Mulai Diskusi</Link>
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center  items-center">
                        <img
                            src={src} // ganti dengan path props atau asset kamu
                            alt="IKM Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
