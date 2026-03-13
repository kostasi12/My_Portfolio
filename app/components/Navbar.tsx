interface NavbarProps { // Καλό είναι να το ονομάζεις NavbarProps
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 z-50">
      {/* Άλλαξα το px-8 σε px-4 για κινητά και md:px-8 για υπολογιστή */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        
        <div className="text-white font-bold text-lg tracking-tighter shrink-0">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        {/* Άλλαξα το gap-6 σε gap-3 για κινητά και md:gap-6 για υπολογιστή */}
        {/* Πρόσθεσα text-[10px] για πολύ μικρές οθόνες και sm:text-sm για κανονικές */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-[11px] sm:text-sm font-medium">
          
          <a href="#about" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 whitespace-nowrap"
          >
             {t.about}
          </a>
          <a href="#experience" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 whitespace-nowrap"
          >
             {t.exp}
          </a>
          <a href="#projects" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 whitespace-nowrap"
          >
             {t.proj}
          </a>
          <a href="#contact" 
             onClick={handleScroll} 
             className="text-gray-400 hover:text-white hover:scale-105 transition duration-300 whitespace-nowrap"
          >
             {t.cont}
          </a>
          
          {/* Μίκρυνα το margin στο κουμπί της γλώσσας για να χωράει */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="ml-1 sm:ml-4 px-2 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-[10px] sm:text-xs font-bold hover:bg-blue-600 hover:text-blue-100 transition-all duration-300 shrink-0"
          >
            {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}