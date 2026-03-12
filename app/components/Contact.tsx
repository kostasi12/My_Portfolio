import { RevealOnScroll } from "./RevealOnScroll";
import { FiMail } from "react-icons/fi"; 

export default function Contact({ t }: any) {
  return (
    <section id="contact" className="py-32 px-6 bg-gray-900/40 text-center">
      <RevealOnScroll>
        <h2 className="text-4xl font-semibold mb-8 tracking-tight">{t.title}</h2>
        
        <div className="flex justify-center">
          <div className="flex items-center gap-3 text-gray-400 text-lg group cursor-text">
            {/* Το εικονίδιο δίπλα στο mail */}
            <FiMail className="text-2xl text-white-500" />
            <span className="leading-relaxed select-text">kostassiam@gmail.com</span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}