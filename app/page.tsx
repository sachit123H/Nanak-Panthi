import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100 text-stone-900 font-sans selection:bg-stone-200 flex flex-col">
      
      {/* Enhanced Sticky Top Navigation Bar */}
      <header className="px-8 py-6 border-b border-stone-200/60 bg-stone-50/70 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-widest uppercase text-stone-800">
          NanakPanth
        </h1>
        <nav>
          <button className="text-sm font-medium hover:text-stone-500 transition-colors duration-200">
            Aksharmala Setup
          </button>
        </nav>
      </header>

      {/* Main Content Wrapper */}
      <div className="flex-grow">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 pt-16 pb-24 text-center max-w-5xl mx-auto">
          
          {/* Manuscript Image & Museum Caption Container */}
          <div className="w-full max-w-3xl mb-16 relative">
            {/* The Image */}
            <div className="rounded-t-2xl overflow-hidden shadow-xl border-4 border-b-0 border-white">
              <Image 
                src="/image_77d227.png" 
                alt="The cosmic lotus Mahakala and the Ten Sikh Gurus" 
                width={1200} 
                height={600} 
                className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                priority
              />
            </div>
            
            {/* The Condensed Information Box */}
            <div className="bg-white border-4 border-t-0 border-white rounded-b-2xl shadow-xl p-6 md:p-8 text-left relative z-0">
              <h3 className="font-serif text-xl text-stone-800 mb-3 font-semibold">
                The Cosmic Lotus Mahakala and the Ten Sikh Gurus
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm md:text-base mb-4 text-justify">
                This striking visual representation from a Sri Guru Granth Sahib manuscript depicts the universe as a twelve-petaled lotus, corresponding to the zodiac divisions. While ten petals illustrate the Ten Gurus, the central circle reveals the intertwined spiritual traditions of the era: it depicts the manuscript's patron, Sodhi Bhan Singh, actively worshipping the Hindu deities Mahakala and Mahakali.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-4 mt-2 leading-relaxed">
                <span>Date: ca. 1839–1843</span>
                <span>•</span>
                <span>Scribe: Misar Prakash (Kashmir)</span>
                <span>•</span>
                <span>Artist: Miha Singh</span>
                <span>•</span>
                <span>Patron: Bhan Singh Sodhi</span>
              </div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-stone-800 leading-tight">
            The Pre-Colonial Tradition
          </h2>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-stone-300 mb-8 rounded-full"></div> 
          
          <p className="text-lg md:text-xl text-stone-600 mb-16 leading-relaxed max-w-3xl">
            A textual and philological exploration of the Nanakpanthi manuscripts, restoring the historical context of the Sindhi Hindu tradition.
          </p>

          {/* Text Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            
            <Link href="/texts/guru-granth-sahib" className="p-10 border border-stone-200 rounded-2xl hover:shadow-xl hover:border-stone-300 transition-all duration-300 bg-white/80 backdrop-blur-sm text-left group block">
              <h3 className="text-2xl font-serif mb-3 text-stone-800 group-hover:text-stone-600 transition-colors">
                Guru Granth Sahib
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                Examine the foundational verses and their interpretations within the continuous Hindu framework.
              </p>
            </Link>

            <Link href="/texts/dasam-granth" className="p-10 border border-stone-200 rounded-2xl hover:shadow-xl hover:border-stone-300 transition-all duration-300 bg-white/80 backdrop-blur-sm text-left group block">
              <h3 className="text-2xl font-serif mb-3 text-stone-800 group-hover:text-stone-600 transition-colors">
                Dasam Granth 
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                Explore the philosophical ballads and martial narratives rooted in ancient traditions.
              </p>
            </Link>

          </div>
        </section>

        {/* Thesis & Historical Context Section */}
        <section className="bg-stone-800 text-stone-50 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-8 text-stone-100">Restoring Historical Continuity</h2>
            <div className="text-stone-300 leading-relaxed max-w-3xl mx-auto text-lg space-y-6 text-justify">
              <p>
                This platform is dedicated to challenging colonial-era demarcations that artificially severed fluid spiritual traditions. Prior to British codification, the rigid boundaries separating what is now known as Sikhism from the wider tapestry of Hinduism did not exist.
              </p>
              <p>
                Through comparative analysis of primary texts and historical manuscripts, this project asserts that the Nanakpanthi tradition is a continuous, native expression of Sindhi Hindu philosophy. We aim to present these sacred texts not as appropriated artifacts, but as the unbroken heritage of the Sindhi Hindu community.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* The Footer */}
      <footer className="py-8 border-t border-stone-200 text-center bg-stone-50">
        <p className="text-stone-400 text-sm font-medium tracking-wide">
          © {new Date().getFullYear()} NanakPanth Interpretation Project.
        </p>
      </footer>
      
    </main>
  );
}