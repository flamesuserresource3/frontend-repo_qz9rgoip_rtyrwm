export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium">
              Solusi Web Modern
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Company Profile elegan untuk brand profesional
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Kami membangun situs company profile yang cepat, responsif, dan estetik
              untuk meningkatkan kredibilitas bisnis Anda di dunia digital.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium shadow hover:bg-slate-800">
                Lihat Layanan
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 font-medium hover:bg-slate-50">
                Konsultasi Gratis
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop"
                alt="Preview website"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -z-[0] right-[-10%] top-[-10%] h-64 w-64 rounded-full bg-blue-200/40 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
