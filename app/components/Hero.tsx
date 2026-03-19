import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero({ t, handleScroll }: any) {
  return (
    /* pt-32 στο κινητό, pt-40 στον υπολογιστή για σωστό spacing από το navbar */
    /* ΑΛΛΑΓΗ: bg-slate-900 αντί για bg-black. Είναι το βαθύ μπλε που ζήτησες, 
       πιο ανοιχτό από το μαύρο αλλά χωρίς transparency για να μην κάνει "νερά" */
    <section className="pt-32 md:pt-38 pb-12 md:py-14 text-center px-4 md:px-6 bg-slate-950/40 relative overflow-hidden">
      <RevealOnScroll>
        {/* Επικεφαλίδα με antialiased για καθαρά γράμματα */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-float leading-tight text-white antialiased">
          {t.title}
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2 antialiased">
          {t.sub}
        </p>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            
            {/* ΚΟΥΜΠΙ PROJECTS */}
            <a 
              href="#projects" 
              onClick={handleScroll} 
              /* Frame h-[50px] για το ύψος της καρτέλας του Projects */
              className="group relative inline-flex items-center justify-center w-[200px] h-[50px] bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-900/20 overflow-hidden transition-colors duration-300"
            >
              <span className="relative z-10 block pointer-events-none 
                               transition-transform duration-300 ease-in-out 
                               group-hover:scale-105 
                               transform-gpu translate-z-0 backface-hidden will-change-transform">
                {t.btnProjects}
              </span>
            </a>

            {/* ΚΟΥΜΠΙ CONTACT */}
            <a 
              href="#contact" 
              onClick={handleScroll} 
              /* Frame h-[50px] για το ύψος της καρτέλας του Contact */
              /* ΑΛΛΑΓΗ: border-slate-700 για να φαίνεται ομοιόμορφο με το bg-slate-900 */
              className="group relative inline-flex items-center justify-center w-[200px] h-[50px] border border-slate-700 hover:border-blue-500 text-white rounded-xl font-medium overflow-hidden transition-colors duration-300"
            >
              <span className="relative z-10 block pointer-events-none 
                               transition-transform duration-300 ease-in-out 
                               group-hover:scale-105 
                               transform-gpu translate-z-0 backface-hidden will-change-transform">
                {t.btnContact}
              </span>
            </a>

        </div>
      </RevealOnScroll>
    </section>
  );
}