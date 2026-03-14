import { RevealOnScroll } from "./RevealOnScroll";
import { FiMail } from "react-icons/fi";

export default function Contact({ t }: any) {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-gray-900/40 text-center">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 tracking-tight text-white">
            {t.title}
          </h2>

          <div className="flex justify-center">
            <a
              href="mailto:kostassiam@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl border border-gray-800 bg-gray-950/50 text-gray-300 text-sm md:text-base hover:border-blue-400/40 hover:text-white transition-all duration-300"
            >
              <FiMail className="text-lg md:text-xl" />
              <span className="break-all">kostassiam@gmail.com</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}