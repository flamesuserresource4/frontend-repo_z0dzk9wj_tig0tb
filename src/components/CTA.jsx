function CTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl p-8 md:p-12 border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Have a project in mind?</h3>
              <p className="mt-3 text-white/70">Tell us about your goals and timelines. We’ll come back with a clear plan within 24 hours.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:hello@reversebits.in" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">hello@reversebits.in</a>
                <a href="https://cal.com/" target="_blank" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Book a 15‑min call</a>
              </div>
            </div>
            <form className="space-y-3">
              <input className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Your name"/>
              <input className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email"/>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Tell us about your project"/>
              <button type="submit" className="w-full px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">Send</button>
              <p className="text-xs text-white/50">By submitting, you agree to our privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
