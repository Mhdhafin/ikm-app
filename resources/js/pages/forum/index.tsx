import { Features } from "../../components/features";
import { Footer } from "../../components/footer";
import { Forum } from "../../components/forum";

import { Hero } from "../../components/hero";
import { Konsultasi } from "../../components/konsultasi";
import { Navbar } from "../../components/navbar";
import { Showcase } from "../../components/showcase";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Forum />
            <Konsultasi />
            <Showcase />
            <Footer />
        </main>
    );
}
