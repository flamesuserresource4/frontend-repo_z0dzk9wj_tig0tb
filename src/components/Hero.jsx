import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-white/80 text-xs mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Made-to-measure software. Built in India.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            We craft custom apps that move your business forward
          </h1>
          <p className="mt-4 md:mt-6 text-white/80 text-lg md:text-xl">
            reverseBits is a product engineering partner for ambitious teams. From mobile and web to AI integration, we ship reliable software with velocity and care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:opacity-90 transition">Start a project</a>
            <a href="#work" className="inline-flex justify-center items-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">See our work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
