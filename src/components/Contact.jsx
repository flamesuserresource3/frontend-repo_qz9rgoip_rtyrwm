import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Hubungi Kami</h2>
          <p className="mt-2 text-slate-600">Sampaikan kebutuhan Anda, kami siap membantu.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="rounded-xl border bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Pesan</label>
              <textarea rows={4} required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white font-medium hover:bg-slate-800">
              Kirim Pesan
            </button>
            {sent && (
              <p className="mt-3 text-green-700">Terima kasih! Pesan Anda sudah terkirim.</p>
            )}
          </form>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Informasi</h3>
            <p className="mt-2 text-slate-600">
              Kami berlokasi di Jakarta dan melayani klien di seluruh Indonesia.
            </p>
            <div className="mt-4 space-y-1 text-slate-700">
              <p>Email: hello@flames.company</p>
              <p>Telepon: +62 812-3456-7890</p>
              <p>Jam kerja: Senin - Jumat, 09.00 - 18.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
