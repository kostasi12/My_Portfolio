interface Navbar {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: Navbar) {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-y-3">
        
        {/* Logo */}
        <div className="text-white font-bold text-lg tracking-tighter">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        {/* Links & Button */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-6 text-[10px] xs:text-xs sm:text-sm font-medium">
          <a href="#about" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300"
          >
             {t.about}
          </a>
          <a href="#experience" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300"
          >
             {t.exp}
          </a>
          <a href="#projects" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300"
          >
             {t.proj}
          </a>
          <a href="#contact" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300"
          >
             {t.cont}
          </a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="ml-1 px-2 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-[10px] font-bold hover:bg-blue-600 hover:text-blue-100 transition-all duration-300"
          >
            {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}