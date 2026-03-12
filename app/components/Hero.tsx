import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero({ t, handleScroll }: any) {
  return (
    <section className="pt-40 pb-32 text-center px-6">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight animate-float">
        {t.title}
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">{t.sub}</p>
      <div className="mt-12 flex justify-center gap-6">
          <a href="#projects" onClick={handleScroll} className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-medium transform transition-all duration-300 hover:scale-105">
            {t.btnProjects}
          </a>
          <a href="#contact" onClick={handleScroll} className="px-8 py-3 border border-gray-700 hover:border-blue-500 rounded-xl transform transition-all duration-300 hover:scale-105">
            {t.btnContact}
          </a>
      </div>
    </section>
  );
}