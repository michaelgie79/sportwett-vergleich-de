// Cross-Linking Component for Sportwett-Vergleich.de
export const FooterLinks = () => {
  return (
    <div className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Sportwett-Vergleich.de</h4>
            <p className="text-gray-600 text-sm">
              Dein unabhängiges Vergleichsportal für Sportwettanbieter
            </p>
          </div>
          <div>
            <h4 className="text-blue-600 font-bold mb-4">Partner-Portale</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://nur-sportwetten.de" className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                  <span className="mr-2">📰</span>nur-sportwetten.de
                </a>
                <p className="text-gray-500 text-xs ml-6">News & Tipps</p>
              </li>
              <li>
                <a href="https://bad-bets.de" className="text-gray-700 hover:text-blue-600 text-sm flex items-center">
                  <span className="mr-2">⚠️</span>Bad-Bets.de
                </a>
                <p className="text-gray-500 text-xs ml-6">Fehler vermeiden</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Schnellzugriff</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#vergleich" className="text-gray-700 hover:text-blue-600">Vergleich</a></li>
              <li><a href="#bonus" className="text-gray-700 hover:text-blue-600">Bonus</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">© 2025 Sportwett-Vergleich.de</p>
        </div>
      </div>
    </div>
  );
};
