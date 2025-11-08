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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out
          ${
            scrolled
              ? "bg-white/60 backdrop-blur-md border-b border-gray-200/40 shadow-md dark:bg-gray-900/60 dark:border-gray-800/40"
              : "bg-transparent"
          }`}
        role="banner"
      >
        <div className="w-full flex items-center justify-between px-6 py-3 md:px-10">
          {/* Left: Logo */}
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
                className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-4">
              {/* Language toggle */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiGlobalLine size={20} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
                  {languageLabel}
                </span>
              </button>

              {/* Search */}
              <button
                type="button"
                aria-label="Search"
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiSearchLine size={20} />
              </button>

              {/* Profile */}
              <button
                type="button"
                aria-label="Profile"
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiAccountCircleLine size={22} />
              </button>
            </div>

            {/* Mobile: Menu toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                {mobileOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (full width) */}
        <div
          className={`md:hidden transition-all duration-200 overflow-hidden ${
            mobileOpen
              ? "max-h-screen bg-white/70 backdrop-blur-md border-t border-gray-200/40"
              : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 pt-4 space-y-3">
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
                className="block text-base font-medium text-gray-800 dark:text-gray-100 py-2"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-gray-200/40 mt-2">
              {/* Language toggle */}
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiGlobalLine size={18} />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
                  {languageLabel}
                </span>
              </button>

              <button
                aria-label="Search"
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiSearchLine size={18} />
              </button>

              <button
                aria-label="Profile"
                className="p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                <RiAccountCircleLine size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header height */}
      <div aria-hidden className="h-16 md:h-20" />
    </>
  );
}
