import { ClipboardList, CheckCircle, Search, Beaker, BookOpen, Award } from 'lucide-react';

export function HalalSteps() {
  const steps = [
    {
      number: 1,
      title: 'Pengajuan',
      description: 'Isi Formulir & Dokumen',
      details:
        'Persiapkan dokumen lengkap meliputi identitas perusahaan, daftar produk, dan bahan baku yang digunakan',
      icon: ClipboardList,
      color: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30',
      iconColor: 'text-blue-600',
    },
    {
      number: 2,
      title: 'Verifikasi',
      description: 'Pemeriksaan Administrasi',
      details:
        'Tim verifikasi memeriksa kelengkapan dokumen dan kesesuaian data yang telah diajukan',
      icon: CheckCircle,
      color: 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30',
      iconColor: 'text-green-600',
    },
    {
      number: 3,
      title: 'Audit',
      description: 'Inspeksi & Audit',
      details:
        'Melakukan audit di lapangan untuk memastikan proses produksi sesuai standar halal',
      icon: Search,
      color: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30',
      iconColor: 'text-purple-600',
    },
    {
      number: 4,
      title: 'Pengujian',
      description: 'Uji Laboratorium',
      details:
        'Pengujian produk di laboratorium untuk memastikan tidak mengandung bahan haram atau yang diragukan',
      icon: Beaker,
      color: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-900/30',
      iconColor: 'text-orange-600',
    },
    {
      number: 5,
      title: 'Fatwa Halal',
      description: 'Kajian & Sidang Fatwa',
      details:
        'Sidang fatwa bersama ulama untuk memberikan keputusan mengenai status kehalalan produk',
      icon: BookOpen,
      color: 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/30',
      iconColor: 'text-amber-600',
    },
    {
      number: 6,
      title: 'Sertifikasi',
      description: 'Penerbitan Sertifikat',
      details:
        'Penerbitan sertifikat halal yang sah dan dapat digunakan untuk pemasaran produk',
      icon: Award,
      color: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/30',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Tahapan Proses Sertifikasi Halal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Berikut adalah 6 tahapan utama dalam proses mendapatkan sertifikasi
            halal untuk produk IKM Anda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                {/* Step Number */}
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.number}
                  </div>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>

        {/* Timeline Info */}
        <div className="bg-card rounded-2xl border border-border p-8 text-center">
          <p className="text-muted-foreground mb-4">
            Estimasi waktu proses sertifikasi halal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-primary/10 rounded-lg">
              <p className="font-semibold text-primary">3-6 Bulan</p>
              <p className="text-xs text-muted-foreground">Waktu Standar</p>
            </div>
            <div className="px-6 py-3 bg-accent/10 rounded-lg">
              <p className="font-semibold text-accent">Rp 1-5 Juta</p>
              <p className="text-xs text-muted-foreground">Biaya Estimasi</p>
            </div>
            <div className="px-6 py-3 bg-green-100/50 dark:bg-green-900/20 rounded-lg">
              <p className="font-semibold text-green-600">3 Tahun</p>
              <p className="text-xs text-muted-foreground">Masa Berlaku</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}