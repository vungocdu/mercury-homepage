const words = ['ERP', 'AI AGENT', 'RAG', 'COMPUTER VISION', 'META API', 'MOBILE', 'WEB PLATFORM', 'DIGITAL TRANSFORMATION', 'DRONE SHOW', 'AUTOMATION']

/** Slim mono ticker: capability keywords scrolling under the hero. */
export default function TechTicker() {
  const loop = [...words, ...words]
  return (
    <div className="relative overflow-hidden border-b border-mercury-200 bg-white py-4" aria-hidden>
      <ul className="marquee-track items-center">
        {loop.map((w, i) => (
          <li key={i} className="eyebrow mx-6 flex shrink-0 items-center gap-12 text-mercury-500">
            {w}
            <span className="h-1 w-1 rounded-full bg-mercury-blue-500" />
          </li>
        ))}
      </ul>
    </div>
  )
}
