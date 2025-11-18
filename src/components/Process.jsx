function Process() {
  const steps = [
    {
      k: '01',
      title: 'Discover',
      desc: 'We define goals, scope, and success metrics with your team.'
    },
    {
      k: '02',
      title: 'Design',
      desc: 'Product flows and interfaces that balance speed and craft.'
    },
    {
      k: '03',
      title: 'Build',
      desc: 'Agile development with clear milestones and weekly demos.'
    },
    {
      k: '04',
      title: 'Launch & Grow',
      desc: 'Ship to prod, monitor, and iterate with data‑driven insights.'
    }
  ]

  return (
    <section id="process" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How we work</h2>
          <p className="mt-3 text-white/70">A simple, transparent process from idea to impact</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="text-white/60 text-sm">{s.k}</div>
              <h3 className="mt-2 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
