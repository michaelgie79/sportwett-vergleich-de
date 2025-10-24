import { useState } from 'react'
import './App.css'
import { NewsSection } from './components/NewsSection'

function App() {
  const [activeFilter, setActiveFilter] = useState({
    sport: 'Alle',
    bonus: 'Alle',
    license: 'Alle'
  })
  const [viewMode, setViewMode] = useState('cards') // 'cards' or 'table'

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
      bonusValue: 100,
      bonusRating: 4.5,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit Ende 2020',
      licenseRating: 5.0,
      quotesRating: 4.7,
      quotesQuality: 'Quotenqualität',
      appRating: 4.8,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out', 'Live-Wetten', 'Statistiken'],
      serviceRating: 4.6,
      minDeposit: '5€',
      payout: '1-3 Tage',
      highlights: ['Live-Streams', 'Starke Quoten', 'Breites Angebot'],
      pros: ['Einer der größten Wettanbieter weltweit', 'Hervorragende Live-Streams', 'Sehr breites Wettangebot'],
      cons: ['Bonusbedingungen etwas komplex', 'Sehr umfangreiches Angebot kann überwältigend sein'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller'],
      badge: 'BESTE WAHL',
      badgeColor: 'gold',
      sports: ['Fußball', 'Tennis', 'Basketball', 'Eishockey']
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
      bonusValue: 120,
      bonusRating: 4.9,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit 2021',
      licenseRating: 5.0,
      quotesRating: 4.8,
      quotesQuality: 'Quotenqualität',
      appRating: 4.8,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out', 'Kombi-Boost', 'Schnelle Auszahlung'],
      serviceRating: 4.5,
      minDeposit: '10€',
      payout: '1-3 Tage',
      highlights: ['Bester Bonus', 'Top-App', 'Schnelle Auszahlung'],
      pros: ['Sehr attraktiver Willkommensbonus', 'Hervorragende mobile App', 'Schnelle Auszahlungen'],
      cons: ['Etwas kleineres Wettangebot als Bet365', 'Live-Streaming nur für ausgewählte Events'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Paysafecard'],
      badge: 'BESTER BONUS',
      badgeColor: 'green',
      sports: ['Fußball', 'Tennis', 'Basketball']
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
      bonusValue: 100,
      bonusRating: 4.4,
      license: 'Deutsche Lizenz',
      licenseSince: 'Seit 2020',
      licenseRating: 5.0,
      quotesRating: 4.6,
      quotesQuality: 'Quotenqualität',
      appRating: 4.7,
      appFeatures: 'App & Website',
      features: ['Live-Streaming', 'Cash Out', 'Statistiken', 'Live-Ticker'],
      serviceRating: 4.6,
      minDeposit: '10€',
      payout: '1-3 Tage',
      highlights: ['Traditionsmarke', 'Große Auswahl', 'Zuverlässig'],
      pros: ['Etablierte Marke mit langer Tradition', 'Sehr breites Sportangebot', 'Zuverlässiger Kundenservice'],
      cons: ['Bonusbedingungen könnten fairer sein', 'Quoten manchmal nicht die besten'],
      paymentMethods: ['PayPal', 'Kreditkarte', 'Banküberweisung', 'Skrill', 'Neteller', 'Paysafecard'],
      badge: 'TRADITIONSMARKE',
      badgeColor: 'blue',
      sports: ['Fußball', 'Tennis', 'Basketball', 'Handball']
    }
  ]

  const getBadgeColor = (color) => {
    const colors = {
      gold: 'from-amber-500 to-yellow-600',
      green: 'from-emerald-500 to-green-600',
      blue: 'from-blue-500 to-indigo-600',
      purple: 'from-purple-500 to-pink-600'
    }
    return colors[color] || colors.blue
  }

  const getCardAccent = (color) => {
    const colors = {
      gold: 'border-amber-200 hover:border-amber-300',
      green: 'border-emerald-200 hover:border-emerald-300',
      blue: 'border-blue-200 hover:border-blue-300',
      purple: 'border-purple-200 hover:border-purple-300'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Sportwett-Vergleich Logo" 
                className="w-32 h-32 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.7)] group-hover:brightness-110"
              />
              <div>
                <h1 className="text-3xl font-bold flex items-center">
                  <span className="inline-flex">
                    {"sportwett-vergleich".split('').map((char, i) => (
                      <span
                        key={i}
                        className="inline-block transition-all duration-100 hover:scale-125 hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        style={{ transitionDelay: `${i * 5}ms` }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                  <span className="text-blue-600 ml-1">.de</span>
                </h1>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Dein Wett-Vergleich</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#vergleich" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Vergleich</a>
              <a href="#anbieter" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Anbieter</a>
              <a href="#ratgeber" className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Ratgeber</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-12 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              Finde den besten Wettanbieter
            </h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              für deine Bedürfnisse
            </p>
          </div>

          {/* Sticky Filter Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 md:p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                <select 
                  className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-300 cursor-pointer"
                  value={activeFilter.sport}
                  onChange={(e) => setActiveFilter({...activeFilter, sport: e.target.value})}
                >
                  <option>Alle Sportarten</option>
                  <option>Fußball</option>
                  <option>Tennis</option>
                  <option>Basketball</option>
                  <option>Eishockey</option>
                </select>
                
                <select 
                  className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-300 cursor-pointer"
                  value={activeFilter.bonus}
                  onChange={(e) => setActiveFilter({...activeFilter, bonus: e.target.value})}
                >
                  <option>Alle Boni</option>
                  <option>Bis 100€</option>
                  <option>Über 100€</option>
                  <option>Gratiswette</option>
                </select>
                
                <select 
                  className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-300 cursor-pointer"
                  value={activeFilter.license}
                  onChange={(e) => setActiveFilter({...activeFilter, license: e.target.value})}
                >
                  <option>Alle Lizenzen</option>
                  <option>Deutsche Lizenz</option>
                  <option>EU-Lizenz</option>
                </select>
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
                <span className="text-sm text-gray-600 font-medium">
                  {providers.length} Anbieter gefunden
                </span>
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setViewMode('cards')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === 'cards' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Cards
                  </button>
                  <button 
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${viewMode === 'table' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Tabelle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="vergleich" className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {viewMode === 'cards' ? (
            /* Modern Cards View */
            <div className="space-y-6">
              {providers.map((provider) => (
                <div 
                  key={provider.id} 
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border-2 ${getCardAccent(provider.badgeColor)} hover:scale-[1.01] cursor-pointer`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-br ${getBadgeColor(provider.badgeColor)} w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform`}>
                        {provider.logo}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2 flex-wrap">
                          <span className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white text-sm font-bold px-3 py-1 rounded-full shadow-md`}>
                            #{provider.rank}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{provider.name}</h3>
                          {provider.badge && (
                            <span className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-pulse`}>
                              {provider.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-lg ${i < Math.floor(provider.rating) ? 'text-amber-400' : 'text-gray-300'}`}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-600 font-semibold text-sm">
                            {provider.rating}/5 <span className="text-gray-400">({provider.ratingCount})</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-0.5 whitespace-nowrap w-full md:w-auto`}>
                      Jetzt wetten →
                    </button>
                  </div>

                  {/* Key Features Grid - New Color System */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    {/* Bonus - Gold */}
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-100 hover:border-amber-200 transition-all hover:shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">💰</span>
                        <h4 className="font-semibold text-gray-700 text-sm">Bonus</h4>
                      </div>
                      <p className="text-base font-bold text-gray-900 leading-tight">{provider.bonus}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(provider.bonusRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* License - Green */}
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 rounded-xl border border-emerald-100 hover:border-emerald-200 transition-all hover:shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">🛡️</span>
                        <h4 className="font-semibold text-gray-700 text-sm">Lizenz</h4>
                      </div>
                      <p className="text-base font-bold text-emerald-700 leading-tight">{provider.license}</p>
                      <p className="text-xs text-gray-500 mt-1">{provider.licenseSince}</p>
                    </div>

                    {/* Quotes - Blue */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">📊</span>
                        <h4 className="font-semibold text-gray-700 text-sm">Quoten</h4>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-base ${i < Math.floor(provider.quotesRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{provider.quotesQuality}</p>
                    </div>

                    {/* Features - Purple */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">✨</span>
                        <h4 className="font-semibold text-gray-700 text-sm">Features</h4>
                      </div>
                      <div className="space-y-1">
                        {provider.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-1">
                            <span className="text-emerald-500 text-xs">✓</span>
                            <span className="text-xs text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div>
                      <h4 className="font-semibold text-emerald-700 mb-3 flex items-center">
                        <span className="text-emerald-500 mr-2">✓</span> Vorteile
                      </h4>
                      <ul className="space-y-2">
                        {provider.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-500 mr-2 text-sm mt-0.5">✓</span>
                            <span className="text-sm text-gray-700">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                        <span className="text-red-500 mr-2">✗</span> Nachteile
                      </h4>
                      <ul className="space-y-2">
                        {provider.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-red-500 mr-2 text-sm mt-0.5">✗</span>
                            <span className="text-sm text-gray-700">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Min. Einzahlung</p>
                        <p className="font-bold text-gray-900">{provider.minDeposit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Auszahlung</p>
                        <p className="font-bold text-gray-900">{provider.payout}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Service</p>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(provider.serviceRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">App</p>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(provider.appRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Zahlungsmethoden:</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.paymentMethods.map((method, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Table View */
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold">Rang</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Anbieter</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Bonus</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Bewertung</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Quoten</th>
                      <th className="px-6 py-4 text-left text-sm font-bold">Features</th>
                      <th className="px-6 py-4 text-center text-sm font-bold">Aktion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {providers.map((provider, index) => (
                      <tr key={provider.id} className={`hover:bg-blue-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-6 py-4">
                          <span className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                            #{provider.rank}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className={`bg-gradient-to-br ${getBadgeColor(provider.badgeColor)} w-10 h-10 rounded-lg flex items-center justify-center text-xl`}>
                              {provider.logo}
                            </div>
                            <div>
                              <p className="font-bold text-gray-900">{provider.name}</p>
                              {provider.badge && (
                                <span className="text-xs text-gray-500">{provider.badge}</span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-gray-900">{provider.bonus}</p>
                          <p className="text-xs text-gray-500">{provider.bonusType}</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(provider.rating) ? 'text-amber-400' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{provider.rating}/5</p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={i < Math.floor(provider.quotesRating) ? 'text-amber-400' : 'text-gray-300'}>
                                ★
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            {provider.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-1">
                                <span className="text-emerald-500 text-xs">✓</span>
                                <span className="text-xs text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all transform hover:scale-105 text-sm`}>
                            Wetten →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">sportwett-vergleich.de</h3>
              <p className="text-gray-400 text-sm">
                Dein unabhängiger Vergleich für Sportwettenanbieter mit deutscher Lizenz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Anbieter</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Alle Anbieter</a></li>
                <li><a href="#" className="hover:text-white transition">Top 10</a></li>
                <li><a href="#" className="hover:text-white transition">Neue Anbieter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ratgeber</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Wett-Tipps</a></li>
                <li><a href="#" className="hover:text-white transition">Strategien</a></li>
                <li><a href="#" className="hover:text-white transition">Bonus-Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p className="mb-2">
              ⚠️ Glücksspiel kann süchtig machen. Bitte spiele verantwortungsvoll. 18+
            </p>
            <p>
              © 2024 sportwett-vergleich.de - Alle Rechte vorbehalten
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

