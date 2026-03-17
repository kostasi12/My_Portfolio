interface NavbarProps {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/70 backdrop-blur-lg border-b border-gray-800 z-50">
      {/* Αλλαγή: px-3 στο mobile αντί για px-2 για να μην κολλάει το logo στις άκρες */}
      <div className="max-w-6xl mx-auto px-3 md:px-8 py-4 flex justify-between items-center">
        
        {/* Logo: shrink-0 για να μην μικραίνει ποτέ το λογότυπο */}
        <div className="text-white font-bold text-base md:text-lg tracking-tighter shrink-0">
          My<span className="text-blue-300">Portfolio</span>
        </div>

        {/* Navigation Links: 
            gap-1 στο mobile για να χωράνε, gap-6 στο desktop.
            text-[10px] στο πολύ μικρό κινητό, text-[14px] μετά. */}
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
              /* Αλλαγή px-1 στο mobile για να κερδίσουμε χώρο */
              className="group relative px-1 md:px-2 py-1 text-gray-300 hover:text-white transition-colors duration-300 shrink-0"
            >
              <span className="relative block transform-gpu transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform">
                {link.label}
              </span>

              <span className="absolute bottom-0 left-2 w-0 h-[1.5px] bg-blue-400 group-hover:w-[calc(100%-8px)] md:group-hover:w-[calc(100%-18px)] transition-all duration-500 ease-out"></span>
            </a>
          ))}
          
          {/* Button Γλώσσας: ml-1 στο mobile */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="ml-1 md:ml-2 px-2 md:px-3 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-[9px] md:text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shrink-0"
          >
             {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
}