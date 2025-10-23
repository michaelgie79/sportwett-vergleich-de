import { useState } from 'react'
import './App.css'
import { NewsSection } from './components/NewsSection'

function App() {
  const providers = [
    {
      id: 1,
      name: 'Bet365',
      rank: 1,
      rating: 4.8,
      ratingCount: 1247,
      logo: '🎰',
      bonus: '100% bis 100€',
      bonusType: 'Wett-Credits',
      bonusRating: 4.5,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit Ende 2020',
      licenseRating: 5.0,
      quotesRating: 4.7,
      quotesQuality: 'Quotenqualität',
      appRating: 4.8,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out'],
      serviceRating: 4.6,
      minDeposit: '5€',
      payout: '1-3 Tage',
      highlights: ['Live-Streams', 'Starke Quoten', 'Breites Angebot'],
      pros: ['Einer der größten Wettanbieter weltweit', 'Hervorragende Live-Streams', 'Sehr breites Wettangebot'],
      cons: ['Bonusbedingungen etwas komplex', 'Sehr umfangreiches Angebot kann überwältigend sein'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller'],
      badge: 'BESTE WAHL'
    },
    {
      id: 2,
      name: 'Betano',
      rank: 2,
      rating: 4.75,
      ratingCount: 892,
      logo: '🏆',
      bonus: '20€ Gratiswette + 100% Bonus',
      bonusType: 'Kombination',
      bonusRating: 4.9,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit 2021',
      licenseRating: 5.0,
      quotesRating: 4.8,
      quotesQuality: 'Quotenqualität',
      appRating: 4.8,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out'],
      serviceRating: 4.5,
      minDeposit: '10€',
      payout: '1-3 Tage',
      highlights: ['Bester Bonus', 'Top-App', 'Schnelle Auszahlung'],
      pros: ['Sehr attraktiver Willkommensbonus', 'Hervorragende mobile App', 'Schnelle Auszahlungen'],
      cons: ['Etwas kleineres Wettangebot als Bet365', 'Live-Streaming nur für ausgewählte Events'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Paysafecard'],
      badge: 'BESTER BONUS'
    },
    {
      id: 3,
      name: 'bwin',
      rank: 3,
      rating: 4.7,
      ratingCount: 1034,
      logo: '⭐',
      bonus: '100% bis 100€',
      bonusType: 'Einzahlungsbonus',
      bonusRating: 4.4,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit 2020',
      licenseRating: 5.0,
      quotesRating: 4.6,
      quotesQuality: 'Quotenqualität',
      appRating: 4.7,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out'],
      serviceRating: 4.6,
      minDeposit: '10€',
      payout: '1-3 Tage',
      highlights: ['Traditionsmarke', 'Große Auswahl', 'Zuverlässig'],
      pros: ['Etablierte Marke mit langer Tradition', 'Sehr breites Sportangebot', 'Zuverlässiger Kundenservice'],
      cons: ['Bonusbedingungen könnten fairer sein', 'Quoten manchmal nicht die besten'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller', 'Paysafecard'],
      badge: 'TRADITIONSMARKE'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Sportwett-Vergleich Logo" 
                className="w-36 h-36 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.7)] group-hover:brightness-110"
              />
              <h1 className="text-2xl font-bold">
                <span className="text-blue-600">Sportwetten</span>
                <span className="text-gray-900">Vergleich</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#vergleich" className="text-gray-700 hover:text-blue-600 transition font-medium">Vergleich</a>
              <a href="#anbieter" className="text-gray-700 hover:text-blue-600 transition font-medium">Anbieter</a>
              <a href="#ratgeber" className="text-gray-700 hover:text-blue-600 transition font-medium">Ratgeber</a>
            </nav>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
              Jetzt vergleichen
            </button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Die besten Sportwettenanbieter mit deutscher Lizenz
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Vergleichen Sie lizenzierte Wettanbieter und finden Sie den perfekten Partner für Ihre Sportwetten
          </p>
        </div>
      </section>

      <section id="vergleich" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sportwettenanbieter Vergleich</h2>
            <p className="text-xl text-gray-600">
              Vergleichen Sie alle lizenzierten Sportwettenanbieter in Deutschland.
            </p>
          </div>

          <div className="space-y-6">
            {providers.map((provider) => (
              <div key={provider.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-xl flex items-center justify-center text-3xl">
                      {provider.logo}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          #{provider.rank}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                        {provider.badge && (
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {provider.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-gray-600 font-semibold">({provider.rating}/5)</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-xl transition">
                    Jetzt wetten →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">💰</span>
                      <h4 className="font-semibold text-gray-700">Bonus</h4>
                    </div>
                    <p className="text-lg font-bold text-gray-900">{provider.bonus}</p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">🛡️</span>
                      <h4 className="font-semibold text-gray-700">Lizenz</h4>
                    </div>
                    <p className="text-lg font-bold text-green-700">{provider.license}</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">📊</span>
                      <h4 className="font-semibold text-gray-700">Quoten</h4>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(provider.quotesRating) ? 'text-yellow-400' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">✨</span>
                      <h4 className="font-semibold text-gray-700">Features</h4>
                    </div>
                    {provider.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-1">
                        <span className="text-green-500 text-sm">✓</span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✓ Vorteile</h4>
                    <ul className="space-y-1">
                      {provider.pros.map((pro, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 text-sm">✓</span>
                          <span className="text-sm text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">✗ Nachteile</h4>
                    <ul className="space-y-1">
                      {provider.cons.map((con, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-red-500 mr-2 text-sm">✗</span>
                          <span className="text-sm text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SportwettenVergleich</h3>
              <p className="text-gray-400 text-sm">
                Ihr vertrauensvoller Partner für den Vergleich lizenzierter Sportwettenanbieter in Deutschland.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Schnelllinks</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#vergleich" className="hover:text-blue-400 transition">⚖️ Vergleich</a></li>
                <li><a href="#anbieter" className="hover:text-blue-400 transition">🏆 Anbieter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Unser Netzwerk</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://nur-sportwetten.de" className="hover:text-blue-400 transition">📰 nur-sportwetten.de</a></li>
                <li><a href="https://wett-kompass.de" className="hover:text-blue-400 transition">🧭 Wett-Kompass.de</a></li>
                <li><a href="https://bad-bets.de" className="hover:text-blue-400 transition">🚫 Bad-Bets.de</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/impressum">Impressum</a></li>
                <li><a href="/datenschutz">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p className="mb-4">
              <span className="text-red-500 font-bold">18+</span> | Glücksspiel kann süchtig machen | 
              <a href="https://www.spielsuchthilfe.de" className="text-blue-400 hover:underline ml-1" target="_blank" rel="noopener">Spielsuchthilfe.de</a>
            </p>
            <p>© 2025 SportwettenVergleich • Alle Rechte vorbehalten</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
