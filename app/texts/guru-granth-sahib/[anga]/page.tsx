"use client"; // 1. This tells Next.js we need browser interactivity for our buttons

import Link from 'next/link';
import { useState, use } from 'react'; // 2. We import 'useState' to give the page short-term memory

export default function AngaPage({ params }: { params: Promise<{ anga: string }> }) {
  // 3. We unwrap the URL parameter
  const resolvedParams = use(params);
  const anga = resolvedParams.anga;

  // 4. This is our React State! It remembers the 'activeScript'. It starts as 'gurmukhi'.
  const [activeScript, setActiveScript] = useState('gurmukhi');

  // 5. Our expanded mock database now includes Devanagari and Latin transliterations
  const mockDatabase: Record<string, Record<string, string[]>> = {
    "1": {
      gurmukhi: [
        "ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥",
        "॥ ਜਪੁ ॥",
        "ਆਦਿ ਸਚੁ ਜੁਗਾਦਿ ਸਚੁ ॥ ਹੈ ਭੀ ਸਚੁ ਨਾਨਕ ਹੋਸੀ ਭੀ ਸਚੁ ॥੧॥"
      ],
      devanagari: [
        "ੴ सति नामु करता पुरखु निरभउ निरवैरु अकाल मूरति अजूनी सैभं गुर प्रसादि ॥",
        "॥ जपु ॥",
        "आदि सचु जुगादि सचु ॥ है भी सचु नानक होसी भी सचु ॥१॥"
      ],
      latin: [
        "ikk ōaṅkār sat nām karatā purakh nirabha'u niravair akāl mūrat ajūnī saibhaṅ gur prasād .",
        ". jap .",
        "ād sach jugād sach . hai bhī sach nānak hōsī bhī sach .1."
      ]
    },
    "2": {
      gurmukhi: [
        "ਸੁਣਿਐ ਸਿਧ ਪੀਰ ਸੁਰਿ ਨਾਥ ॥",
        "ਸੁਣਿਐ ਧਰਤਿ ਧਵਲ ਆਕਾਸ ॥",
        "ਸੁਣਿਐ ਦੀਪ ਲੋਅ ਪਾਤਾਲ ॥"
      ],
      devanagari: [
        "सुणिऐ सिध पीर सुरि नाथ ॥",
        "सुणिऐ धरति धवल आकास ॥",
        "सुणिऐ दीप लोअ पाताल ॥"
      ],
      latin: [
        "suṇiai sidh pīr suri nāth .",
        "suṇiai dharat dhaval ākās .",
        "suṇiai dīp lōa pātāl ."
      ]
    }
  };

  // Find the right data based on both the Anga number AND the active script
  const angaData = mockDatabase[anga];
  const verses = angaData ? angaData[activeScript] : ["The historical verses for this Anga are currently being digitized and reviewed."];

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      
      <header className="px-8 py-6 border-b border-stone-200 bg-white flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center">
          <Link href="/texts/guru-granth-sahib" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors mr-8">
            ← Back to Index
          </Link>
          <h1 className="text-xl font-semibold tracking-widest uppercase text-stone-800">
            Guru Granth Sahib
          </h1>
        </div>
        <div className="text-lg font-serif text-stone-600">
          Anga {anga}
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-12">
        
        {/* The Aksharmala Script Switcher UI */}
        <div className="flex justify-center mb-8 space-x-4">
          <button 
            onClick={() => setActiveScript('gurmukhi')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeScript === 'gurmukhi' ? 'bg-stone-800 text-white shadow-md' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'}`}
          >
            Gurmukhi
          </button>
          <button 
            onClick={() => setActiveScript('devanagari')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeScript === 'devanagari' ? 'bg-stone-800 text-white shadow-md' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'}`}
          >
            Devanagari
          </button>
          <button 
            onClick={() => setActiveScript('latin')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeScript === 'latin' ? 'bg-stone-800 text-white shadow-md' : 'bg-stone-200 text-stone-600 hover:bg-stone-300'}`}
          >
            Latin
          </button>
        </div>

        <div className="bg-white p-12 rounded-2xl shadow-sm border border-stone-200 min-h-[400px]">
          <h2 className="text-3xl font-serif mb-12 text-center text-stone-800 border-b border-stone-100 pb-6 capitalize">
            {activeScript} Script
          </h2>

          <div className="space-y-8 text-center">
            {verses.map((verse, index) => (
              <p key={index} className="text-2xl font-serif text-stone-700 leading-loose">
                {verse}
              </p>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}