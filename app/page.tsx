import { prisma } from '@/lib/prisma'

export default async function Home() {
  // 1. Fetch the data from your Neon cloud database
  const shabads = await prisma.shabad.findMany({
    include: {
      verses: {
        include: {
          commentaries: true
        }
      }
    }
  })

  // We only seeded one Shabad, so we will just grab the first one
  const shabad = shabads[0]

  // 2. Render the user interface
  return (
    <main className="min-h-screen bg-[#FDFBF7] p-8 md:p-24 text-slate-800 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="text-center border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-bold mb-2 text-slate-900">{shabad?.raag}</h1>
          <p className="text-xl text-slate-600">
            Author: <span className="font-medium text-slate-800">{shabad?.author}</span> | 
            Ang: <span className="font-medium text-slate-800">{shabad?.angNumber}</span>
          </p>
        </header>

        {/* Verses Section */}
        {shabad?.verses.map((verse) => (
          <section key={verse.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            
            {/* Native Scripts */}
            <div className="text-center space-y-4">
              <p className="text-3xl font-semibold text-orange-600 leading-relaxed">
                {verse.gurmukhiText}
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                {verse.devanagariText}
              </p>
            </div>
            
            {/* Translation */}
            <div className="pt-6 border-t border-slate-100 text-center">
              <p className="italic text-slate-700 text-lg leading-relaxed">
                "{verse.englishTranslation}"
              </p>
            </div>

            {/* Commentary (If it exists) */}
            {verse.commentaries.length > 0 && (
              <div className="mt-6 bg-orange-50/50 border border-orange-100 p-6 rounded-xl">
                <h3 className="font-semibold text-orange-800 text-xs uppercase tracking-widest mb-3">
                  {verse.commentaries[0].type}
                </h3>
                {/* whitespace-pre-wrap preserves your Braj text line breaks */}
                <p className="text-slate-700 text-sm leading-relaxed mb-3 whitespace-pre-wrap">
                  {verse.commentaries[0].content}
                </p>
                <p className="text-right text-xs text-orange-600 font-medium italic">
                  — {verse.commentaries[0].scholarSource}
                </p>
              </div>
            )}
          </section>
        ))}

      </div>
    </main>
  )
}
