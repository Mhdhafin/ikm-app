import { PropsWithChildren } from "react";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { toast, Toaster } from "sonner";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";

export default function AppLayout({ children }: PropsWithChildren) {
    const { flash } = usePage<{ flash: { success?: string; error?: string } }>()
        .props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);
    return (
        <html lang="en" className="bg-background">
            <body className="font-sans antialiased">
                {children}
                {/* {process.env.NODE_ENV === "production" && <Analytics />} */}
                <Toaster richColors position="top-right" />
            </body>
        </html>
    );
}
