import { RevealOnScroll } from "./RevealOnScroll";
import { FiMail, FiCopy } from "react-icons/fi";

export default function Contact({ t }: any) {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-transparent text-center">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Τίτλος: Μεσαίο μέγεθος, καθαρός */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight text-white">
            {t.title}
          </h2>

          {/* Email Container: Χωρίς σκληρές γραμμές, με απαλό hover */}
          <div className="group relative">
            <a
              href="mailto:kostassiam@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 shadow-sm"
            >
              {/* Το εικονίδιο: Σταθερό μέγεθος, διακριτικό μπλε */}
              <FiMail className="text-blue-100 text-lg md:text-xl transition-transform group-hover:scale-110" />
              
              {/* Το Email: Κανονικό μέγεθος γραμματοσειράς */}
              <span className="text-base md:text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                kostassiam@gmail.com
              </span>
            </a>
          </div>

          {/* Μια πολύ διακριτική λεπτομέρεια από κάτω */}
          <p className="mt-8 text-gray-500 text-[11px] uppercase tracking-[0.3em] font-medium opacity-60">
            Thessaloniki, Greece
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}