interface NavbarProps {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: NavbarProps) {
  return (
    /* ΑΛΛΑΓΗ: bg-slate-900/80 αντί για gray-950 και border-slate-800 για ομοιομορφία */
    <nav className="fixed top-0 w-full bg-slate-950/40 backdrop-blur-2xl border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto px-3 md:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-white font-bold text-base md:text-lg tracking-tighter shrink-0">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-0 md:gap-6 text-[10px] xs:text-xs sm:text-[14px] font-semibold tracking-tight">
          {[
  { id: "#about", label: t.about },
  { id: "#experience", label: t.exp },
  { id: "#projects", label: t.proj },
  { id: "#contact", label: t.cont },
].map((link) => (
  <a 
    key={link.id}
    href={link.id} 
    onClick={handleScroll} 
    className="group relative px-1 md:px-2 py-1 text-slate-300 hover:text-white transition-colors duration-300 shrink-0"
  >
    <span className="relative block transform-gpu transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform">
      {link.label}
    </span>

    {/* ΔΙΟΡΘΩΣΗ: Χρήση left-0 και w-full για απόλυτη ευθυγράμμιση */}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-blue-500 group-hover:w-[60%] transition-all duration-500 ease-out"></span>
  </a>
))}
          
          {/* Button Γλώσσας */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            /* ΑΛΛΑΓΗ: border-blue-500/30 και text-blue-400 */
            className="ml-1 md:ml-2 px-2 md:px-3 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-[9px] md:text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shrink-0"
          >
             {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}