import { Rocket, Shield, Sparkles } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{desc}</p>
  </div>
);

export default function Services() {
  const services = [
    {
      icon: Rocket,
      title: 'Pembuatan Website',
      desc: 'Website company profile modern, cepat, dan SEO-friendly untuk tampil profesional.',
    },
    {
      icon: Shield,
      title: 'Keamanan & Hosting',
      desc: 'Integrasi domain, SSL, dan hosting andal agar situs Anda aman dan selalu online.',
    },
    {
      icon: Sparkles,
      title: 'Branding & Desain',
      desc: 'Desain visual yang konsisten dan menarik untuk meningkatkan kepercayaan pelanggan.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Layanan Kami</h2>
          <p className="mt-2 text-slate-600">
            Paket lengkap untuk membangun citra perusahaan Anda di internet.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
