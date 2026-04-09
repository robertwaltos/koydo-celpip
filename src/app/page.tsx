export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight">
          Ace the <span style={{ color: "var(--accent)" }}>CELPIP</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Free CELPIP practice for Listening, Reading, Writing, and Speaking with AI analytics.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/learn" className="rounded-lg px-6 py-3 font-semibold text-white" style={{ backgroundColor: "var(--accent)" }}>Start Studying Free</a>
          <a href="/pricing" className="rounded-lg border px-6 py-3 font-semibold">View Plans</a>
        </div>
      </section>
      <footer className="mt-20 text-center text-xs text-gray-500 max-w-2xl">
        <p>CELPIP® is a registered trademark of Paragon Testing Enterprises, which was not involved in the production of, and does not endorse, this product. All product names, logos, and brands are the property of their respective owners.</p>
      </footer>
    </main>
  );
}
