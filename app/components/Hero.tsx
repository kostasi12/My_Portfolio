import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero({ t, handleScroll }: any) {
  return (
    /* λιγότερο padding pt-32 στο κινητό, pt-40 στον υπολογιστή */
    <section className="pt-32 md:pt-40 pb-16 md:pb-22 text-center px-4 md:px-6">
      <RevealOnScroll>
        {/* text-4xl για κινητά ώστε να μην "σπάει" το όνομα σε 3 σειρές */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-float leading-tight">
          {t.title}
        </h1>
        
        {/* text-lg στο κινητό για καλύτερη αναγνωσιμότητα */}
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
          {t.sub}
        </p>

        {/* flex-col στο κινητό, flex-row στον υπολογιστή */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="#projects" 
              onClick={handleScroll} 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all text-sm md:text-base text-center"
            >
              {t.btnProjects}
            </a>
            <a 
              href="#contact" 
              onClick={handleScroll} 
              className="w-full sm:w-auto border border-gray-700 hover:border-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all text-sm md:text-base text-center"
            >
              {t.btnContact}
            </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}