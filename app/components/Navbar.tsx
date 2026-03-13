interface Navbar {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: Navbar) {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 z-50">
      {/* Προσθέσαμε flex-wrap και justify-center για τα κινητά */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-center sm:justify-between items-center gap-y-4">
        
        <div className="text-white font-bold text-lg tracking-tighter">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        {/* Προσθέσαμε flex-wrap και gap-x-4 για να χωράνε τα links σε μικρές οθόνες */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6 text-xs sm:text-sm font-medium">
          <a href="#about" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 inline-block"
          >
             {t.about}
          </a>
          <a href="#experience" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 inline-block"
          >
             {t.exp}
          </a>
          <a href="#projects" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 inline-block"
          >
             {t.proj}
          </a>
          <a href="#contact" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 inline-block"
          >
             {t.cont}
          </a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="px-3 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 transition-all duration-300"
          >
            {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}