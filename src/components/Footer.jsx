import { RiTwitterXFill, RiFacebookCircleFill, RiInstagramFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-gray-200/40 dark:border-gray-800/40"
      role="contentinfo"
    >
      <div
        className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3
        text-sm text-gray-700 dark:text-gray-300"
      >
        <p className="text-center text-gray-500 md:text-left select-none">
          © 2025 செய்திகள் மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-2 rounded hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
          >
            <RiTwitterXFill size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
          >
            <RiFacebookCircleFill size={22} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded hover:text-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500 transition-colors"
          >
            <RiInstagramFill size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
