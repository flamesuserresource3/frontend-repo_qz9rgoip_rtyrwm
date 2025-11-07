export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Tentang Kami</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Kami adalah tim kreatif yang berfokus pada pembuatan website company profile
              yang elegan dan mudah dikelola. Dengan pengalaman lintas industri,
              kami membantu bisnis dari berbagai skala tampil lebih profesional
              dan dipercaya oleh calon klien.
            </p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Desain responsif untuk semua perangkat</li>
              <li>• Performa cepat dan ramah SEO</li>
              <li>• Dukungan pasca peluncuran</li>
            </ul>
          </div>
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1470&auto=format&fit=crop"
              alt="Tim bekerja"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
