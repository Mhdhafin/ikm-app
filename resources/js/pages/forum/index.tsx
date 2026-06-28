import { usePage } from "@inertiajs/react";
import { Features } from "../../components/features";
import { Footer } from "../../components/footer";
import { Forum } from "../../components/forum";
import { HalalCard } from "../../components/halal-card";
import { Hero } from "../../components/hero";
import { Konsultasi } from "../../components/konsultasi";
import { Navbar } from "../../components/navbar";
import { NIBCard } from "../../components/nib-card";

export default function Home() {
    const { props } = usePage<{
        logoHalal: string;
        logoNib: string;
        logoIkm: string;
    }>();
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero src={props.logoIkm} />
            <Features />
            <Forum />
            <Konsultasi />
            <HalalCard src={props.logoHalal} />
            <NIBCard src={props.logoNib} />
            <Footer />
        </main>
    );
}
