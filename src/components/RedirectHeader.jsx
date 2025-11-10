import { useState, useEffect } from "react";
import {
  RiGlobalLine,
  RiSearchLine,
  RiAccountCircleLine,
  RiMenu3Line,
  RiCloseLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import logoSrc from "../assets/HeaderLogo.png";

export default function RedirectHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("tamil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => setLanguage((prev) => (prev === "tamil" ? "english" : "tamil"));
  const languageLabel = language === "tamil" ? "தமிழ்" : "English";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${scrolled ? "bg-white/60 backdrop-blur-md border-b border-gray-200/40 shadow-md" : "bg-transparent"}`} role="banner">
        <div className="w-full flex items-center justify-between px-6 py-3 md:px-10">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 text-gray-800 font-medium hover:underline">
              <RiArrowLeftLine size={20} />
              <span>முகப்பு</span>
            </a>

            <a href="/" className="inline-flex items-center" aria-label="Fireline Home">
              <img src={logoSrc} alt="Fireline தமிழ்" className={`object-contain transition-all duration-200 ${scrolled ? "h-10" : "h-12"}`} style={{ width: "auto" }} />
            </a>
          </div>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
            {["அரசியல்","மனித உரிமைகள்","விளையாட்டு","கலை","திரைப்படம்"].map((item) => (
              <a key={item} href="/article" className="text-sm font-medium text-gray-800 hover:underline rounded">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <button onClick={toggleLanguage} className="flex items-center gap-1 p-2 rounded focus:outline-none">
                <RiGlobalLine size={20} />
                <span className="text-sm font-medium text-gray-700 select-none">{languageLabel}</span>
              </button>

              <button aria-label="Search" className="p-2 rounded focus:outline-none"><RiSearchLine size={20} /></button>
              <button aria-label="Profile" className="p-2 rounded focus:outline-none"><RiAccountCircleLine size={22} /></button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileOpen((s) => !s)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"} className="p-2 rounded focus:outline-none">
                {mobileOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-200 overflow-hidden ${mobileOpen ? "max-h-screen bg-white/70 backdrop-blur-md border-t border-gray-200/40" : "max-h-0"}`}>
          <div className="px-6 pb-6 pt-4 space-y-3">
            {["அரசியல்","மனித உரிமைகள்","விளையாட்டு","கலை","திரைப்படம்"].map((item) => (
              <a key={item} href="/article" onClick={() => setMobileOpen(false)} className="block text-base font-medium text-gray-800 py-2 hover:underline">{item}</a>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-gray-200/40 mt-2">
              <button onClick={toggleLanguage} aria-label="Toggle language" className="flex items-center gap-1 p-2 rounded focus:outline-none"><RiGlobalLine size={18} /><span className="text-sm font-medium text-gray-700 select-none">{languageLabel}</span></button>
              <button aria-label="Search" className="p-2 rounded focus:outline-none"><RiSearchLine size={18} /></button>
              <button aria-label="Profile" className="p-2 rounded focus:outline-none"><RiAccountCircleLine size={20} /></button>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-16 md:h-20" />
    </>
  );
}
