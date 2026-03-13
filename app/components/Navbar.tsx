interface Navbar {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: Navbar) {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg tracking-tighter">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          {/* hover:scale για να μεγαλώνουν και transition για να είναι ομαλό */}
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
            className="ml-4 px-3 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-blue-100 hover:scale-105 transition-all duration-300"
          >
            {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}