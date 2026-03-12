'use client';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const translations = {
  en: {
    nav: { about: "About", exp: "Experience", proj: "Projects", cont: "Contact" },
    hero: {
      title: "Konstantinos Siampanis",
      sub: "Electrical & Computer Engineer",
      btnProjects: "View Projects",
      btnContact: "Contact"
    },
    about: {
      title: "About Me",
      text: "I am an undergraduate Electrical & Computer Engineering student at AUTH, focusing on software development, backend systems, and machine learning, while also maintaining an interest in frontend development, UI/UX design and mobile application development.",
      skillsTitle: "Skills",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        ml: "Machine Learning",
        tools: "Tools"
      }
    },
    experience: {
      title: "Experience",
      job1: {
        title: "Backend Developer Intern – RealMINT",
        desc: "Designed and implemented backend architecture using Python and Django. Developed RESTful APIs, integrated PostgreSQL databases, and contributed to iOS development using Swift."
      },
      job2: {
        title: "Diploma Thesis",
        desc: "Evaluation and technical upgrade of Lightning Protection software. Designed and developed a modern UI/UX to enhance usability and user experience."
      }
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Coffee Shop App",
          desc: "Developed a web application for coffee shop management using Django and PostgreSQL. Designed and tested RESTful APIs utilizing Postman."
        },
        {
          title: "Crypto App",
          desc: "Cryptocurrency application development, featuring a custom frontend for data visualization."
        },
        {
          title: "Deep Learning (CNN & ViT)",
          desc: "Developed and trained Computer Vision models in PyTorch for medical image classification using CNNs and Vision Transformers."
        },
        {
          title: "AAC Audio Coder/Decoder",
          desc: "Implementation of an AAC audio coding system in Python. Applied compression algorithms and evaluated performance using SNR and Bitrate metrics."
        },
        {
          title: "Portfolio",
          desc: "Design and development of a website using Next.js, React, and Tailwind CSS."
        }
      ]
    },
    contact: { title: "Contact" }
  },
  el: {
    nav: { about: "Σχετικά", exp: "Εμπειρία", proj: "Projects", cont: "Επικοινωνία" },
    hero: {
      title: "Κωνσταντίνος Σιαμπάνης",
      sub: "Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών",
      btnProjects: "Δείτε τα Projects",
      btnContact: "Επικοινωνία"
    },
    about: {
      title: "Σχετικά με εμένα",
      text: "Είμαι προπτυχιακός φοιτητής Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών στο ΑΠΘ με εστίαση στην ανάπτυξη λογισμικού, σε συστήματα backend και machine learning, διαθέτοντας παράλληλα ενδιαφέρον για το frontend development, τον σχεδιασμό UI/UX και ανάπτυξη mobile εφαρμογών.",
      skillsTitle: "Δεξιότητες",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        ml: "Machine Learning",
        tools: "Tools"
      }
    },
    experience: {
      title: "Επαγγελματική Εμπειρία",
      job1: {
        title: "Backend Developer Intern – RealMINT",
        desc: "Σχεδιασμός και υλοποίηση backend αρχιτεκτονικής με Python και Django. Ανάπτυξη RESTful APIs, διαχείριση βάσεων PostgreSQL και συμμετοχή στο development iOS εφαρμογής με Swift."
      },
      job2: {
        title: "Διπλωματική Εργασία",
        desc: "Αξιολόγηση και τεχνική αναβάθμιση λογισμικού Αντικεραυνικής Προστασίας. Σχεδιασμός και ανάπτυξη UI/UX για τη βελτίωση της εμπειρίας του χρήστη."
      }
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Coffee Shop App",
          desc: "Ανάπτυξη web εφαρμογής για τη διαχείριση καφετέριας με χρήση Django και PostgreSQL. Σχεδιασμός και δοκιμή RESTful APIs με χρήση Postman."
        },
        {
          title: "Crypto App",
          desc: "Υλοποίηση εφαρμογής κρυπτονομισμάτων, με σχεδιασμό και ανάπτυξη του frontend για την οπτικοποίηση των δεδομένων."
        },
        {
          title: "Deep Learning (CNN & ViT)",
          desc: "Ανάπτυξη και εκπαίδευση μοντέλων Computer Vision σε PyTorch για την ταξινόμηση ιατρικών εικόνων με χρήση CNN και Vision Transformers."
        },
        {
          title: "AAC Audio Coder/Decoder",
          desc: "Υλοποίηση συστήματος κωδικοποίησης ήχου κατά το πρότυπο AAC. Εφαρμογή αλγορίθμων συμπίεσης και αξιολόγηση μέσω μετρήσεων (SNR, Bitrate)."
        },
        {
          title: "Portfolio",
          desc: "Σχεδιασμός και ανάπτυξη ιστοσελίδας με Next.js , React και Tailwind CSS."
        }
      ]
    },
    contact: { title: "Επικοινωνία" }
  }
};

export default function Home() {
  /* Ξεκινάμε πάντα με μια σταθερή τιμή για να συμφωνούν server και client */
  const [lang, setLang] = useState<'en' | 'el'>('en');
  const [mounted, setMounted] = useState(false);

  /* Μόλις φορτώσει η σελίδα (mounted), διαβάζουμε το localStorage */
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "el") {
      setLang(saved);
    }
    setMounted(true);
  }, []);

  /* Κάθε φορά που αλλάζει το lang, το αποθηκεύουμε */
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
    }
  }, [lang, mounted]);

  const t = translations[lang];

  /* Αν δεν έχει γίνει ακόμα το mount, μπορούμε να επιστρέψουμε ένα απλό div */
  if (!mounted) {
    return <div className="min-h-screen bg-gray-950"></div>; 
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.replace(/.*#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 leading-relaxed scroll-smooth">

      <Navbar
        t={t.nav}
        lang={lang}
        setLang={setLang}
        handleScroll={handleScroll}
      />

      <Hero t={t.hero} handleScroll={handleScroll} />

      {/* Διαχωριστικό 1 */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1000px] px-6">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-pulse"></div>
        </div>
      </div>

      <About t={t.about} />

      {/* Διαχωριστικό 2 */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1000px] px-6">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-pulse"></div>
        </div>
      </div>
     
      {/* Section Experience με ελαφρύ background block */}
      <div className="bg-blue-100/0">
        <Experience t={t.experience} />
      </div>
      
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/10 to-transparent h-20"></div>
        
        {/* Εφέ που σβήνει το background του Experience */}
        <div className="flex justify-center">
          <div className="w-full max-w-[1000px] px-6"> 
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      <Projects t={t.projects} />
       
       {/* Διαχωριστικό 4 */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1000px] px-6">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-300/40 to-transparent animate-pulse"></div>
        </div>
      </div>

      <Contact t={t.contact} />

      <Footer />

    </main>
  );
}