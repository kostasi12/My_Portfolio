export default function Footer() {
  return (
    /* ΑΛΛΑΓΗ: bg-slate-900 για να είναι ομοιόμορφο με το Contact section.
       ΑΛΛΑΓΗ: border-slate-800/50 και text-slate-500 για πιο "δεμένο" αποτέλεσμα */
    <footer className="text-center py-6 md:py-8 text-slate-500 text-[10px] md:text-xs tracking-wider border-t border-slate-800/50 px-4 bg-slate-950/40 antialiased">
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}