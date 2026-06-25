import { useState, useRef, useEffect } from "react";
import { Menu, X, LogOut, User, Settings, MessageSquare } from "lucide-react";
import { Link, router, usePage } from "@inertiajs/react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const page: any = usePage();

    const { auth } = page.props as {
        auth: { user?: { name: string; email: string } };
    };

    // Mock user data
    // const user = {
    //     username: "Budi Santoso",
    //     email: "budi.santoso@example.com",
    //     avatar: "👨‍💼",
    // };

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)
            ) {
                setShowUserMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        router.post("/logout");
        setShowUserMenu(false);
    };

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-xl text-primary"
                    >
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <MessageSquare />
                        </div>
                        <span>Forum IKM</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Beranda
                        </Link>
                        <Link
                            href="#forum"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Forum Diskusi
                        </Link>
                        <Link
                            href="#konsultasi"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Konsultasi
                        </Link>
                        <Link
                            href="#artikel"
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            Artikel
                        </Link>
                    </div>

                    {/* User Profile or Login Button */}
                    <div
                        className="hidden md:flex items-center relative"
                        ref={userMenuRef}
                    >
                        {auth.user ? (
                            <div>
                                {/* User Profile Card */}
                                <button
                                    onClick={() =>
                                        setShowUserMenu(!showUserMenu)
                                    }
                                    className="flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-xl hover:border-accent/50 transition-all hover:shadow-md cursor-pointer"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                                        <User
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-card-foreground">
                                            {auth.user.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {auth.user.email}
                                        </p>
                                    </div>
                                </button>

                                {/* Dropdown Menu */}
                                {showUserMenu && (
                                    <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden">
                                        {/* User Info Card */}
                                        <div className="p-4 border-b border-border bg-muted/30">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                                                    <User
                                                        size={18}
                                                        className="text-primary"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-semibold text-card-foreground">
                                                        {auth.user?.name}
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {auth.user?.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        {/* <div className="py-2"> */}
                                        {/* <button className="w-full px-4 py-2 flex items-center gap-3 text-foreground hover:bg-muted transition-colors text-left">
                                                <User
                                                    size={18}
                                                    className="text-primary"
                                                />
                                                <span>Profil Saya</span>
                                            </button>
                                            <button className="w-full px-4 py-2 flex items-center gap-3 text-foreground hover:bg-muted transition-colors text-left">
                                                <Settings
                                                    size={18}
                                                    className="text-primary"
                                                />
                                                <span>Pengaturan</span>
                                            </button> */}
                                        {/* </div> */}

                                        {/* Logout Button */}
                                        <div className="border-t border-border p-2">
                                            <button
                                                onClick={handleLogout}
                                                className="w-full cursor-pointer     px-4 py-2 flex items-center gap-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-lg text-left"
                                            >
                                                <LogOut size={18} />
                                                <span className="font-medium">
                                                    Logout
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                                    <Link href="/login">Login / Register</Link>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-foreground"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden pb-4 space-y-2">
                        <Link
                            href="/"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Beranda
                        </Link>
                        <Link
                            href="#forum"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Forum Diskusi
                        </Link>
                        <Link
                            href="#konsultasi"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Konsultasi
                        </Link>
                        <Link
                            href="#artikel"
                            className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                            Artikel
                        </Link>
                        {auth.user ? (
                            <div className="space-y-2 border-t border-border pt-4">
                                <div className="px-4 py-3 bg-muted rounded-lg">
                                    <p className="text-sm font-semibold text-card-foreground">
                                        {auth.user?.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {auth.user?.email}
                                    </p>
                                </div>
                                {/* <button className="w-full px-4 py-2 flex items-center gap-2 text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                                    <User size={16} className="text-primary" />
                                    <span>Profil Saya</span>
                                </button>
                                <button className="w-full px-4 py-2 flex items-center gap-2 text-foreground hover:bg-muted rounded-lg transition-colors text-left">
                                    <Settings
                                        size={16}
                                        className="text-primary"
                                    />
                                    <span>Pengaturan</span>
                                </button> */}
                                <button
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 flex items-center gap-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-left font-medium"
                                >
                                    <LogOut size={16} />
                                    <span>Logout</span>
                                </button>
                            </div>
                        ) : (
                            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors mt-2">
                                <Link href="/login">Login / Register</Link>
                            </button>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
