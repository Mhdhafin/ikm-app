
// import Image from 'next/image';
import { Check } from 'lucide-react';


interface Props {
  src: string;
}
export function HalalHeader({ src }: Props) {
  const benefits = [
    {
      icon: '✓',
      title: 'Menjamin Produk Halal & Thayyib',
      description: 'Memastikan seluruh produk memenuhi standar kehalalan syariat Islam dari segi bahan, proses, hingga penyajian.',
    },
    {
      icon: '✓',
      title: 'Meningkatkan Kepercayaan Konsumen',
      description: 'Produk bersertifikat halal memiliki nilai kepercayaan yang lebih tinggi di mata pasar, terutama konsumen Muslim.',
    },
    {
      icon: '✓',
      title: 'Memperluas Akses Pasar',
      description: 'Membuka peluang pasar domestik dan internasional yang lebih luas, termasuk negara-negara dengan populasi Muslim mayoritas.',
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Badge and Content */}
            <div className="flex flex-col gap-6">
              <div className="flex justify-center md:justify-start">
                <div className="relative w-64 h-64">
                  <img
                    src={src}
                   alt="Logo Halal"
                    // fill 
                    className="object-contain w-full h-full md:ml-28"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  Sertifikasi Halal{' '}
                  <span className="text-foreground font-semibold">
                    untuk Usaha IKM
                  </span>
                </h1>
                <div className="h-1 w-20 bg-accent rounded-full mb-4" />
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Sertifikasi Halal adalah proses verifikasi dan pengakuan resmi bahwa produk usaha telah memenuhi standar kehalalan sesuai syariat Islam, sehingga dapat diterima dan dipercaya oleh konsumen lokal maupun global.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}