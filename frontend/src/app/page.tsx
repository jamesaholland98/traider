export default function HomePage() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight">
        Welcome to <span className="text-blue-600">Traider</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-md mx-auto">
        Your AI-powered investment companion. Analyse markets, test strategies, and learn smarter trading — all in one place.
      </p>
      <a
        href="/dashboard"
        className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </a>
    </section>
  )
}