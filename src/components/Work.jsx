function Work() {
  const projects = [
    {
      title: 'LogiFlow',
      desc: 'Logistics ops dashboard for real‑time fleet planning.',
      stat: '↗ 32% faster dispatch'
    },
    {
      title: 'FinLite',
      desc: 'Consumer finance app with AI insights and nudges.',
      stat: '1M+ monthly users'
    },
    {
      title: 'CareBridge',
      desc: 'Tele‑health platform with HIPAA compliant video.',
      stat: '99.95% uptime'
    }
  ]

  return (
    <section id="work" className="relative py-20 md:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-white/70">A peek at products we help teams ship</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md p-6">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 border border-white/10" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
              <p className="mt-3 text-emerald-300 text-sm font-medium">{p.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
