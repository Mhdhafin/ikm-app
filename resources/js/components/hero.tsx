import { Link } from "@inertiajs/react";
import { MessageSquare, Phone } from "lucide-react";

export function Hero() {
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
                            {/* <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                                    <Phone size={20} />
                                    Cari Konsultasi
                                </button> */}
                        </div>
                    </div>

                    {/* Illustration Section */}
                    {/* <div className="hidden md:flex items-center justify-center">
                        <div className="relative w-full h-80"> */}
                    {/* Decorative Elements */}
                    {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                    {/* Gear Icons */}
                    {/* <div className="absolute  right-10 w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l1.72-1.34c.15-.12.2-.34.1-.52l-1.63-2.83c-.12-.22-.37-.29-.59-.22l-2.03.81c-.42-.32-.9-.6-1.44-.84L15 2.7c-.04-.24-.24-.41-.48-.41h-3.27c-.24 0-.43.17-.47.41L10.4 5.32c-.54.24-1.02.52-1.44.84l-2.03-.81c-.23-.09-.47 0-.59.22L4.71 9.37c-.1.18-.05.4.1.52l1.72 1.34c-.05.3-.07.62-.07.94 0 .33.02.64.07.94l-1.72 1.34c-.15.12-.2.34-.1.52l1.63 2.83c.12.22.37.29.59.22l2.03-.81c.42.32.9.6 1.44.84l.3 2.16c.05.24.24.41.48.41h3.27c.24 0 .44-.17.47-.41l.3-2.16c.54-.24 1.02-.52 1.44-.84l2.03.81c.23.09.47 0 .59-.22l1.63-2.83c.1-.18.05-.4-.1-.52l-1.72-1.34zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                    </svg>
                                </div> */}

                    {/* Another Gear */}
                    {/* <div className="absolute top-20 right-0 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l1.72-1.34c.15-.12.2-.34.1-.52l-1.63-2.83c-.12-.22-.37-.29-.59-.22l-2.03.81c-.42-.32-.9-.6-1.44-.84L15 2.7c-.04-.24-.24-.41-.48-.41h-3.27c-.24 0-.43.17-.47.41L10.4 5.32c-.54.24-1.02.52-1.44.84l-2.03-.81c-.23-.09-.47 0-.59.22L4.71 9.37c-.1.18-.05.4.1.52l1.72 1.34c-.05.3-.07.62-.07.94 0 .33.02.64.07.94l-1.72 1.34c-.15.12-.2.34-.1.52l1.63 2.83c.12.22.37.29.59.22l2.03-.81c.42.32.9.6 1.44.84l.3 2.16c.05.24.24.41.48.41h3.27c.24 0 .44-.17.47-.41l.3-2.16c.54-.24 1.02-.52 1.44-.84l2.03.81c.23.09.47 0 .59-.22l1.63-2.83c.1-.18.05-.4-.1-.52l-1.72-1.34zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                    </svg>
                                </div> */}

                    {/* Illustrated people/circle */}
                    {/* <div className="w-48 h-48 bg-primary-foreground/5 rounded-full flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="flex gap-4 justify-center">
                                            <div className="w-12 h-12 bg-accent rounded-full"></div>
                                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full"></div>
                                        </div>
                                        <div className="flex gap-4 justify-center">
                                            <div className="w-12 h-12 bg-primary-foreground/20 rounded-full"></div>
                                            <div className="w-12 h-12 bg-accent rounded-full"></div>
                                        </div>
                                    </div>
                                </div> */}
                    {/* </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
