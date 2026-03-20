'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Αν δεν έχεις τη βιβλιοθήκη, πες μου να σου δώσω εναλλακτική με SVG

interface NavbarProps {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "#about", label: t.about },
    { id: "#experience", label: t.exp },
    { id: "#projects", label: t.proj },
    { id: "#contact", label: t.cont },
  ];

  // Κλείνει το μενού όταν πατάς ένα link
  const handleMobileClick = (e: any) => {
    setIsMenuOpen(false);
    handleScroll(e);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-950/60 backdrop-blur-2xl border-b border-slate-800/50 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-white font-bold text-lg tracking-tighter shrink-0">
          My<span className="text-blue-400">Portfolio</span>
        </div>

        {/* Desktop Navigation - Φαίνεται μόνο από md και πάνω */}
        <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold tracking-tight">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.id} 
              onClick={handleScroll} 
              className="group relative px-2 py-1 text-slate-300 hover:text-white transition-colors duration-300"
            >
              <span className="relative block transform-gpu transition-transform duration-300 ease-out group-hover:scale-105">
                {link.label}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="ml-2 px-3 py-1 border border-blue-500/50 rounded-lg text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
             {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
        </div>

        {/* Mobile Actions - Φαίνεται μόνο σε κινητά */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
            className="px-2 py-1 border border-blue-500/40 rounded-md text-blue-300 text-[10px] font-bold"
          >
             {lang === 'en' ? 'ΕΛ' : 'EN'}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-white transition-colors p-1"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Slide Down Animation */}
      <div className={`absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-3xl border-b border-slate-800 transition-all duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-5 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center py-10 gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.id} 
              onClick={handleMobileClick}
              className="text-lg font-medium text-slate-200 hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}