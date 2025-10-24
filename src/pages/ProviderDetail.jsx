import { useParams, Link } from 'wouter'
import { getProvider, getAffiliateLink } from '../config/affiliate'

export default function ProviderDetail() {
  const params = useParams()
  const providerId = params.id
  
  // Hole Anbieter-Daten aus Config
  const provider = getProvider(providerId)
  
  if (!provider) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Anbieter nicht gefunden</h1>
          <Link href="/">
            <a className="text-blue-600 hover:text-blue-700 font-medium">← Zurück zur Startseite</a>
          </Link>
        </div>
      </div>
    )
  }
  
  // Generiere Affiliate-Link
  const affiliateLink = getAffiliateLink(providerId, {
    source: 'sportwett-vergleich',
    campaign: 'provider-detail',
    medium: 'cta-button'
  })
  
  const getBadgeColor = (color) => {
    const colors = {
      gold: 'from-amber-500 to-yellow-600',
      green: 'from-emerald-500 to-green-600',
      blue: 'from-blue-500 to-indigo-600',
      purple: 'from-purple-500 to-pink-600'
    }
    return colors[color] || colors.blue
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center space-x-3 group cursor-pointer">
                <img 
                  src="/logo.png" 
                  alt="Sportwett-Vergleich Logo" 
                  className="w-32 h-32 group-hover:scale-110 transition-all duration-300"
                />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    sportwett-vergleich<span className="text-blue-600">.de</span>
                  </h1>
                </div>
              </a>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/"><a className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Vergleich</a></Link>
              <Link href="/#anbieter"><a className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Anbieter</a></Link>
              <Link href="/ratgeber"><a className="text-gray-700 hover:text-blue-600 transition font-medium text-sm">Ratgeber</a></Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-6xl">{provider.logo}</div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                <span className="bg-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                  #{provider.rank}
                </span>
                {provider.badge && (
                  <span className="bg-white/30 text-white text-sm font-bold px-4 py-2 rounded-full">
                    {provider.badge}
                  </span>
                )}
              </div>
              <h1 className="text-5xl font-bold mb-4">{provider.name}</h1>
              <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < Math.floor(provider.rating) ? 'text-yellow-300' : 'text-white/30'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xl font-semibold">
                  {provider.rating}/5 <span className="text-white/70">({provider.ratingCount} Bewertungen)</span>
                </span>
              </div>
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Jetzt bei {provider.name} wetten →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Facts */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Auf einen Blick</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-100">
              <div className="text-sm text-gray-600 mb-2">Bonus</div>
              <div className="text-xl font-bold text-gray-900">{provider.bonus}</div>
              <div className="text-xs text-gray-500 mt-1">{provider.bonusType}</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
              <div className="text-sm text-gray-600 mb-2">Lizenz</div>
              <div className="text-xl font-bold text-emerald-700">{provider.license}</div>
              <div className="text-xs text-gray-500 mt-1">{provider.licenseSince}</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
              <div className="text-sm text-gray-600 mb-2">Min. Einzahlung</div>
              <div className="text-xl font-bold text-gray-900">{provider.minDeposit}</div>
              <div className="text-xs text-gray-500 mt-1">Auszahlung: {provider.payout}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <div className="text-sm text-gray-600 mb-2">Quoten-Rating</div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < Math.floor(provider.quotesRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-1">{provider.quotesRating}/5.0</div>
            </div>
          </div>
        </div>

        {/* Detailed Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Überblick */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Überblick</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>{provider.name}</strong> ist {provider.rank === 1 ? 'der beste' : `einer der Top ${provider.rank}`} Sportwettenanbieter mit deutscher Lizenz. 
                Mit einer Bewertung von <strong>{provider.rating}/5.0</strong> ({provider.ratingCount} Bewertungen) gehört {provider.name} zu den beliebtesten Anbietern in Deutschland.
              </p>
              <p className="text-gray-700 leading-relaxed">
                {provider.highlights.join(', ')} machen {provider.name} zu einer ausgezeichneten Wahl für Sportwetten-Fans.
              </p>
            </div>

            {/* Bonus & Aktionen */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bonus & Aktionen</h2>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border-2 border-amber-200 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Willkommensbonus</div>
                    <div className="text-3xl font-bold text-gray-900">{provider.bonus}</div>
                    <div className="text-sm text-gray-500 mt-1">{provider.bonusType}</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-2xl ${i < Math.floor(provider.bonusRating) ? 'text-amber-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full bg-gradient-to-r ${getBadgeColor(provider.badgeColor)} text-white text-center px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all`}
                >
                  Bonus sichern →
                </a>
              </div>
              <p className="text-gray-700 text-sm">
                ⚠️ <strong>Hinweis:</strong> Es gelten die AGB des Anbieters. Bitte informiere dich über die Bonusbedingungen, bevor du den Bonus in Anspruch nimmst.
              </p>
            </div>

            {/* Vor- und Nachteile */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Vor- und Nachteile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-emerald-700 mb-3 flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span> Vorteile
                  </h3>
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
                  <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                    <span className="text-red-500 mr-2">✗</span> Nachteile
                  </h3>
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
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features & Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {provider.features.map((feature, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-500 text-sm">✓</span>
                      <span className="text-sm font-medium text-gray-900">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zahlungsmethoden */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Zahlungsmethoden</h2>
              <div className="flex flex-wrap gap-3">
                {provider.paymentMethods.map((method, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className={`bg-gradient-to-br ${getBadgeColor(provider.badgeColor)} text-white rounded-2xl shadow-2xl p-6 sticky top-24`}>
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{provider.logo}</div>
                <h3 className="text-2xl font-bold mb-2">{provider.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(provider.rating) ? 'text-yellow-300' : 'text-white/30'}`}>
                      ★
                    </span>
                  ))}
                </div>
                <div className="bg-white/20 rounded-lg p-4 mb-4">
                  <div className="text-sm opacity-90 mb-1">Willkommensbonus</div>
                  <div className="text-2xl font-bold">{provider.bonus}</div>
                </div>
              </div>
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-gray-900 text-center px-6 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 mb-4"
              >
                Jetzt wetten →
              </a>
              <p className="text-xs text-white/80 text-center">
                18+ | Es gelten die AGB | Glücksspiel kann süchtig machen
              </p>
            </div>

            {/* Ratings Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Bewertungen</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Bonus</span>
                    <span className="text-sm font-semibold">{provider.bonusRating}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full" style={{width: `${(provider.bonusRating / 5) * 100}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Quoten</span>
                    <span className="text-sm font-semibold">{provider.quotesRating}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: `${(provider.quotesRating / 5) * 100}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">App</span>
                    <span className="text-sm font-semibold">{provider.appRating}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: `${(provider.appRating / 5) * 100}%`}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Service</span>
                    <span className="text-sm font-semibold">{provider.serviceRating}/5</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: `${(provider.serviceRating / 5) * 100}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ⚠️ Glücksspiel kann süchtig machen. Bitte spiele verantwortungsvoll. 18+
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 sportwett-vergleich.de - Alle Rechte vorbehalten
          </p>
        </div>
      </footer>
    </div>
  )
}

