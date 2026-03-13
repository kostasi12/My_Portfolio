import { RevealOnScroll } from "./RevealOnScroll";

export default function Projects({ t }: any) {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto text-center">
      {/* Εδώ χρησιμοποιούμε το t.title από το αντικείμενο translations */}
      <h2 className="text-4xl font-semibold mb-12 tracking-tight">
        {t.title}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {t.items.map((project: any, index: number) => (
          <RevealOnScroll key={index}>
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition flex flex-col justify-between h-full min-h-[200px]">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}