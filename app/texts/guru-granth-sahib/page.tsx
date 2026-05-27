import Link from 'next/link';

export default function GuruGranthSahibPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="px-8 py-6 border-b border-stone-200 flex items-center">
        <Link href="/" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mr-8">
          ← Back to Library
        </Link>
        <h1 className="text-xl font-semibold tracking-widest uppercase text-stone-800">
          Guru Granth Sahib
        </h1>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-serif mb-4 text-stone-800">Select an Anga</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6].map((angaNumber) => (
            <button key={angaNumber} className="py-4 px-2 border border-stone-200 rounded-lg hover:border-stone-400 hover:bg-white transition-all text-center font-serif text-lg text-stone-700 bg-stone-50">
              Anga {angaNumber}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}