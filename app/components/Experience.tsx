import { RevealOnScroll } from "./RevealOnScroll";

export default function Experience({ t }: any) {
  return (
    <section id="experience" className="py-32 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-12 tracking-tight">{t.title}</h2>
        <div className="space-y-8 text-left">
          <RevealOnScroll>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold">{t.job1.title}</h3>
              <p className="text-gray-400 mt-3">{t.job1.desc}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold">{t.job2.title}</h3>
              <p className="text-gray-400 mt-3">{t.job2.desc}</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}