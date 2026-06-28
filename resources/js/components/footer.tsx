import { MessageSquare } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Branding */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-bold text-lg">
                            <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center text-primary">
                                <MessageSquare />
                            </div>
                            <span>Evolis</span>
                        </div>
                        <p className="text-sm opacity-80">
                            Menghubungkan IKM dengan Kampus untuk solusi bisnis
                            yang berkelanjutan.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Navigasi</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Forum Diskusi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Konsultasi
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Informasi</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Tentang Kami
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:opacity-100 transition-opacity"
                                >
                                    Syarat & Ketentuan
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Hubungi Kami</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>Email: info@forumikm.com</li>
                            <li>Phone: +62-123-4567</li>
                            <li>Alamat: Jakarta, Indonesia</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-primary-foreground/20 pt-8">
                    <p className="text-center text-sm opacity-80">
                        © 2026 Forum IKM - Kampus. Semua hak dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}
