import { Menu, Phone } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full relative z-20">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-fuchsia-500/30" />
          <div>
            <p className="text-white font-semibold leading-tight">reverseBits</p>
            <p className="text-xs text-white/60">Custom Software Studio • India</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#process" className="hover:text-white transition">Process</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90 transition">
            <Phone size={16} />
            Talk to us
          </a>
          <button className="md:hidden p-2 rounded-lg border border-white/15 text-white/80 hover:text-white">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
