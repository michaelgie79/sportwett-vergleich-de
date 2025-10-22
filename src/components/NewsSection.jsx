import { useState } from 'react'

export function NewsSection() {
  const [activeCategory, setActiveCategory] = useState('alle')

  const newsArticles = [
    {
      id: 1,
      category: 'champions-league',
      title: 'Bayern vs Brügge: Quoten-Vergleich der Top-Anbieter',
      excerpt: 'Wir haben die Quoten für Bayern München vs Club Brügge bei allen großen Wettanbietern verglichen. Der Unterschied kann bis zu 15% ausmachen! Oddset bietet 1.20 für Bayern-Sieg, während Winamax mit einem 1000%-Boost auf 14.00 kommt.',
      date: '22. Oktober 2025',
      author: 'Quoten-Experte Team',
      readTime: '3 Min.',
      image: '🏆',
      quotenVergleich: [
        { anbieter: 'Oddset', quote: '1.20', highlight: false },
        { anbieter: 'Winamax', quote: '14.00', highlight: true, boost: '1000% Boost!' },
        { anbieter: 'Tipico', quote: '1.18', highlight: false }
      ]
    },
    {
      id: 2,
      category: 'champions-league',
      title: 'Champions League heute: Quoten-Check für alle deutschen Teams',
      excerpt: 'Vier deutsche Teams spielen heute in der Champions League. Wir haben die Quoten aller Anbieter verglichen: Bayern (1.20), Leverkusen vs PSG (Über 2.5 Tore: 1.75), Frankfurt vs Liverpool (2.30), Dortmund (1.70). Beste Kombiwette: Gesamtquote 3.57!',
      date: '22. Oktober 2025',
      author: 'Quoten-Experte Team',
      readTime: '5 Min.',
      image: '🏆'
    },
    {
      id: 3,
      category: 'tipps',
      title: 'Arsenal 4:0 - Diese Anbieter hatten die besten Quoten',
      excerpt: 'Arsenal besiegte Atlético Madrid gestern 4:0. Wir zeigen, bei welchen Anbietern die Quoten am besten waren: Korrektes Ergebnis 4:0 bei Bet365 (18.0), Arsenal-Sieg bei Betano (1.85), Über 3.5 Tore bei bwin (3.20). Quotenvergleich hätte hier bis zu 20% mehr Gewinn gebracht!',
      date: '22. Oktober 2025',
      author: 'Quoten-Experte Team',
      readTime: '3 Min.',
      image: '📊'
    }
  ]

  const categories = [
    { id: 'alle', label: 'Alle', icon: '📰' },
    { id: 'champions-league', label: 'Champions League', icon: '🏆' },
    { id: 'tipps', label: 'Quoten-Tipps', icon: '💡' }
  ]

  const filteredArticles = activeCategory === 'alle' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory)

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            📰 Aktuelle Quoten-News
          </h2>
          <p className="text-xl text-gray-600">
            Die besten Quoten im Vergleich – Täglich aktualisiert
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{article.image}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Quoten-Vergleich Preview */}
                {article.quotenVergleich && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-xs font-semibold text-blue-700 mb-2">QUOTEN-VERGLEICH:</div>
                    {article.quotenVergleich.map((q, idx) => (
                      <div key={idx} className={`flex justify-between items-center text-sm ${q.highlight ? 'font-bold text-blue-600' : 'text-gray-700'}`}>
                        <span>{q.anbieter}</span>
                        <span>{q.quote} {q.boost && <span className="text-xs bg-yellow-400 px-1 rounded">{q.boost}</span>}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>👤 {article.author}</span>
                  <span>📅 {article.date}</span>
                  <span>⏱️ {article.readTime}</span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all group-hover:scale-105">
                  Artikel lesen →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">💡 Mehr Gewinn durch Quoten-Vergleich!</h3>
          <p className="text-lg mb-6">
            Bis zu 20% höhere Gewinne durch den richtigen Anbieter. Vergleiche jetzt die Quoten!
          </p>
          <a 
            href="https://nur-sportwetten.de" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zu den Wett-Tipps →
          </a>
        </div>
      </div>
    </section>
  )
}

