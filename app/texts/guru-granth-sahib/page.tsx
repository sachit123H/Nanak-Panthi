import Link from 'next/link';

export default function GuruGranthSahibPage() {
  // We are creating an array of numbers 1 through 12 to generate our buttons automatically
  const angaNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      <header className="px-8 py-6 border-b border-stone-200 flex items-center bg-white sticky top-0">
        <Link href="/" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mr-8">
          ← Back to Library
        </Link>
        <h1 className="text-xl font-semibold tracking-widest uppercase text-stone-800">
          Guru Granth Sahib
        </h1>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-serif mb-4 text-stone-800">Index of Angas</h2>
        <p className="text-stone-600 mb-10">
          Select an Anga to view the original verses and associated historical commentary.
        </p>

        {/* Dynamic Grid of Links */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {angaNumbers.map((num) => (
            <Link 
              key={num} 
              href={`/texts/guru-granth-sahib/${num}`}
              className="py-6 px-2 border border-stone-200 rounded-lg hover:border-stone-400 hover:shadow-md transition-all text-center font-serif text-lg text-stone-700 bg-white group block"
            >
              <span className="block text-sm text-stone-400 mb-1 uppercase tracking-widest group-hover:text-stone-500 transition-colors">Anga</span>
              {num}
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}