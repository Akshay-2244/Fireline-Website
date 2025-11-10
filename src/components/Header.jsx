import { useState, useEffect } from "react";
import {
  RiGlobalLine,
  RiSearchLine,
  RiAccountCircleLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";
import logoSrc from "../assets/HeaderLogo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("tamil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "tamil" ? "english" : "tamil"));
  const languageLabel = language === "tamil" ? "தமிழ்" : "English";

  const textColor = scrolled ? "text-white" : "text-black";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
        ${scrolled
          ? "bg-black/60 backdrop-blur-md shadow-md border-b border-gray-800"
          : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="w-full flex items-center justify-between px-6 py-3 md:px-10">
          <a href="/" className="inline-flex items-center" aria-label="Fireline Home">
            <img
              src={logoSrc}
              alt="Fireline தமிழ்"
              className={`object-contain transition-all duration-200 ${
                scrolled ? "h-10" : "h-12"
              }`}
              style={{ width: "auto" }}
            />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-8"
          >
            {[
              { href: "#politics", label: "அரசியல்" },
              { href: "#human-rights", label: "மனித உரிமைகள்" },
              { href: "#sports", label: "விளையாட்டு" },
              { href: "#arts", label: "கலை" },
              { href: "#movies", label: "திரைப்படம்" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium ${textColor} hover:underline transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className={`hidden md:flex items-center gap-4 ${textColor}`}>
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className={`flex items-center gap-1 p-2 rounded transition-colors ${textColor}`}
              >
                <RiGlobalLine size={20} />
                <span className="text-sm font-medium select-none">
                  {languageLabel}
                </span>
              </button>

              <button
                type="button"
                aria-label="Search"
                className={`p-2 rounded transition-colors ${textColor}`}
              >
                <RiSearchLine size={20} />
              </button>

              <button
                type="button"
                aria-label="Profile"
                className={`p-2 rounded transition-colors ${textColor}`}
              >
                <RiAccountCircleLine size={22} />
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className={`p-2 rounded transition-colors ${textColor}`}
              >
                {mobileOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-200 overflow-hidden ${
            mobileOpen
              ? "max-h-screen bg-black/80 backdrop-blur-md"
              : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 pt-4 space-y-3 text-white">
            {[
              { href: "#politics", label: "அரசியல்" },
              { href: "#human-rights", label: "மனித உரிமைகள்" },
              { href: "#sports", label: "விளையாட்டு" },
              { href: "#arts", label: "கலை" },
              { href: "#movies", label: "திரைப்படம்" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium py-2 hover:underline"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-gray-700 mt-2 text-white">
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1 p-2 rounded"
              >
                <RiGlobalLine size={18} />
                <span className="text-sm font-medium select-none">
                  {languageLabel}
                </span>
              </button>
              <button aria-label="Search" className="p-2 rounded">
                <RiSearchLine size={18} />
              </button>
              <button aria-label="Profile" className="p-2 rounded">
                <RiAccountCircleLine size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden className="h-16 md:h-20" />
    </>
  );
}
