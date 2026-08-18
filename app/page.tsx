export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">GEZINSLIM</h1>
          <a href="/login" className="text-blue-900 font-medium">
            Inloggen
          </a>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Live smarter. Keep more.
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Je digitale familie assistent
        </p>
        <a
          href="/signup"
          className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800"
        >
          Gratis starten
        </a>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>&copy; 2024 GEZINSLIM</p>
      </footer>
    </div>
  )
}
