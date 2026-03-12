export default function Footer() {
  return (
    <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-800">
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}