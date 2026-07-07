export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/10 py-8">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-display text-cream text-lg tracking-wide">
          De Militaire <span className="text-gold">à Monsieur</span>
        </p>
        <p className="text-cream/50 text-xs text-center sm:text-right">
          © {new Date().getFullYear()} De Militaire à Monsieur. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
