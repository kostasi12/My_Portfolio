'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  t: any;
  lang: 'en' | 'el';
  setLang: (lang: 'en' | 'el') => void;
  handleScroll: (e: any) => void;
}

export default function Navbar({ t, lang, setLang, handleScroll }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
          if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setIsVisible(false);
            setIsMenuOpen(false); 
          } else {
            setIsVisible(true);
          }
        }
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { id: "#about", label: t.about },
    { id: "#experience", label: t.exp },
    { id: "#projects", label: t.proj },
    { id: "#contact", label: t.cont },
  ];

  const handleMobileClick = (e: any) => {
    setIsMenuOpen(false);
    handleScroll(e);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full bg-slate-950/40 backdrop-blur-2xl border-b border-slate-800 z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-base md:text-lg tracking-tighter shrink-0 pl-1">
            My<span className="text-blue-300">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-[14px] font-semibold tracking-tight">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.id} 
                onClick={handleScroll} 
                className="group relative px-2 py-1 text-slate-300 hover:text-white transition-colors duration-300 shrink-0"
              >
                <span className="relative block transform-gpu transition-transform duration-300 ease-out group-hover:scale-105 will-change-transform">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-blue-500 group-hover:w-[60%] transition-all duration-500 ease-out"></span>
              </a>
            ))}
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
              className="ml-2 px-3 py-1 border border-blue-500/80 rounded-lg text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 shrink-0"
            >
               {lang === 'en' ? 'ΕΛ' : 'EN'}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3 pr-1">
            <button 
              onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
              className="px-2 py-1 border border-blue-500/80 rounded-lg text-blue-300 text-[11px] font-bold shrink-0"
            >
               {lang === 'en' ? 'ΕΛ' : 'EN'}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-1 transition-colors z-[60]"
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800 z-[65] transition-transform duration-300 ease-in-out transform md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Κουμπί κλεισίματος (X) - Προσθήκη padding για να μην "κολλάει" πάνω δεξιά */}
        <div className="flex justify-end p-6 pt-8">
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-900"
          >
            <X size={28} />
          </button>
        </div>

        {/* Links - Αύξηση px (αριστερά/δεξιά) και gap για καλύτερη αίσθηση */}
        <div className="flex flex-col pt-6 px-10 gap-10 text-left">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={link.id} 
              onClick={handleMobileClick}
              className="text-xl font-medium text-slate-200 hover:text-blue-400 transition-colors border-b border-slate-800/80 pb-3"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}