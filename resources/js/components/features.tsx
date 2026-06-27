import { Link } from '@inertiajs/react';
import { FileText, MessageCircle, UserCheck, BarChart3 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Sertifikasi Halal',
      description: 'Informasi dan panduan lengkap untuk sertifikasi halal produk Anda.',
      buttonText: 'Selengkapnya',
      buttonLink: '/halal',
      color: 'bg-blue-50 text-blue-600',
      external: false,
    },
    {
      icon: MessageCircle,
      title: 'Forum Diskusi',
      description: 'Diskusi dan kolaborasi antara IKM dan mahasiswa untuk berbagi wawasan.',
      buttonText: 'Masuk Forum',
      buttonLink: '#forum',
      color: 'bg-green-50 text-green-600',
      external: false,
    },
    {
      icon: UserCheck,
      title: 'Nomor Induk Berusaha (NIB)',
      description: 'Panduan dan cara mendapatkan NIB dengan mudah dan cepat.',
      buttonText: 'Daftar NIB',
      buttonLink: '#',
      color: 'bg-purple-50 text-purple-600',
      external: false,
    },
    {
      icon: BarChart3,
      title: 'Repo & Analisis Industri',
      description: 'Laporan dan riset terkini untuk pengembangan usaha IKM Anda.',
      buttonText: 'Lihat Analisis',
      buttonLink: 'http://repository.stmi.ac.id',
      color: 'bg-orange-50 text-orange-600',
      external: true, // tandai sebagai link eksternal
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary transition-all hover:shadow-lg duration-300 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4 flex-shrink-0`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-card-foreground mb-3">
                  {feature.title}
                </h3>

                <div className="w-12 h-1 bg-primary rounded-full mb-3" />

                <p className="text-sm text-muted-foreground mb-6 flex-grow">
                  {feature.description}
                </p>

                {feature.external ? (
                  <a
                    href={feature.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cursor-pointer px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                  >
                    {feature.buttonText}
                  </a>
                ) : (
                  <Link href={feature.buttonLink}>
                    <button className="w-full cursor-pointer px-4 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                      {feature.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
