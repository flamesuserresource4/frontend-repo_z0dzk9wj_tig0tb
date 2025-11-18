import { Smartphone, Globe, Brain, Boxes } from 'lucide-react'

function Services() {
  const items = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      desc: 'Native and cross‑platform apps with delightful UX and robust architecture.',
      tags: ['iOS', 'Android', 'React Native', 'Flutter']
    },
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Modern web apps and sites optimized for speed, accessibility, and SEO.',
      tags: ['React', 'Next.js', 'Node']
    },
    {
      icon: Brain,
      title: 'AI Integration & Development',
      desc: 'Integrate AI into your product or build custom ML solutions end‑to‑end.',
      tags: ['LLMs', 'RAG', 'Vision', 'NLP']
    },
    {
      icon: Boxes,
      title: 'Custom Software',
      desc: 'From internal tools to SaaS — we design, build, and maintain systems.',
      tags: ['Design → Build → Ship', 'APIs', 'Cloud']
    }
  ]

  return (
    <section id="services" className="relative py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">End‑to‑end product engineering for modern teams</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, tags }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/30">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-white/70">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
