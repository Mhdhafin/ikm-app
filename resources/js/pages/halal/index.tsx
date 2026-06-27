import { Navbar } from '../../components/navbar';
import { HalalHeader } from '../../components/halal-header';
import { HalalSteps } from '../../components/halal-steps';
import { HalalFAQ } from '../../components/halal-faq';
import { Footer } from '../../components/footer';
import { usePage } from '@inertiajs/react';

export const metadata = {
  title: 'Sertifikasi Halal untuk IKM - Forum IKM Kampus',
  description:
    'Panduan lengkap sertifikasi halal untuk usaha IKM dengan tahapan proses, persyaratan, dan biaya',
};

export default function Halal() {
     const { props } = usePage<{ logo: string }>();
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HalalHeader src={props.logo} />
      <HalalSteps />
      <HalalFAQ />
      <Footer />
    </main>
  );
}