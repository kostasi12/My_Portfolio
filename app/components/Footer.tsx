export default function Footer() {
  return (
    /* py-6 για κινητά και px-4 για ασφάλεια */
    <footer className="text-center py-6 md:py-8 text-gray-500 text-sm border-t border-gray-800 px-4">
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}