import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero({ t, handleScroll }: any) {
  return (
    /* pt-32 στο κινητό, pt-40 στον υπολογιστή για σωστό spacing από το navbar */
    <section className="pt-32 md:pt-40 pb-12 md:pb-16 text-center px-4 md:px-6">
      <RevealOnScroll>
        {/* text-4xl για να χωράει στις μικρές οθόνες */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-float leading-tight text-white">
          {t.title}
        </h1>
        
        {/* max-w-2xl για να μην απλώνεται πολύ το κείμενο */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
          {t.sub}
        </p>

        {/* Buttons: Χρησιμοποιούμε σταθερά πλάτη και ύψη για να εξαλείψουμε το τρεμούλιασμα */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="#projects" 
              onClick={handleScroll} 
              /* ΣΤΑΘΕΡΟΠΟΙΗΣΗ: 
                 1. inline-flex + w-[200px] + h-[52px] κλειδώνουν το μέγεθος.
                 2. overflow-hidden εμποδίζει το εσωτερικό scale να επηρεάσει το layout.
              */
              className="group relative inline-flex items-center justify-center w-[200px] h-[52px] bg-blue-600 text-white rounded-xl font-medium shadow-lg shadow-blue-900/20 overflow-hidden"
            >
              {/* Το κείμενο μεγαλώνει ομαλά μέσα στο σταθερό κουτί */}
              <span className="transition-transform duration-300 ease-out group-hover:scale-110 block pointer-events-none">
                {t.btnProjects}
              </span>
            </a>

            <a 
              href="#contact" 
              onClick={handleScroll} 
              /* ΣΤΑΘΕΡΟΠΟΙΗΣΗ: 
                 Το border-color αλλάζει ομαλά, αλλά το μέγεθος παραμένει ακλόνητο.
              */
              className="group relative inline-flex items-center justify-center w-[200px] h-[52px] border border-gray-700 text-white rounded-xl font-medium overflow-hidden transition-colors duration-300 hover:border-blue-500"
            >
              <span className="transition-transform duration-300 ease-out group-hover:scale-110 block pointer-events-none">
                {t.btnContact}
              </span>
            </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}