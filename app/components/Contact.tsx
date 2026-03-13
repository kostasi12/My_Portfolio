import { RevealOnScroll } from "./RevealOnScroll";
import { FiMail } from "react-icons/fi"; 

export default function Contact({ t }: any) {
  return (
    /* py για κινητά, md:py για υπολογιστή. px-4 για ομοιομορφία */
    <section id="contact" className="py-16 md:py-26 px-4 md:px-6 bg-gray-900/40 text-center">
      <RevealOnScroll>
        {/* text-3xl για mobile */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-white">
          {t.title}
        </h2>
        
        <div className="flex justify-center">
          {/* text-base για mobile  */}
          <div className="flex items-center gap-3 text-gray-400 text-base md:text-lg group cursor-text">
            {/* Το εικονίδιο δίπλα στο mail */}
            <FiMail className="text-xl md:text-2xl text-gray-400" />
            <span className="leading-relaxed select-text break-all">
              kostassiam@gmail.com
            </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}