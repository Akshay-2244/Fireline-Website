import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import ARTICLES from "../data/articles";

export default function MainAsideLayout() {
  const [availableHeight, setAvailableHeight] = useState(null);
  const containerRef = useRef(null);

  const recentNews = [
    ARTICLES.recent1,
    ARTICLES.recent2,
    ARTICLES.recent3,
    ARTICLES.recent4,
    ARTICLES.recent5,
    ARTICLES.recent6,
  ];
  const moreNews = [
    ARTICLES.more1,
    ARTICLES.more2,
    ARTICLES.more3,
    ARTICLES.more4,
    ARTICLES.more5,
    ARTICLES.more6,
  ];

  useEffect(() => {
    function computeHeights() {
      const headerEl = document.querySelector("header");
      const bannerEl = document.querySelector('[aria-label="Breaking news banner"]');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const bannerHeight = bannerEl ? bannerEl.getBoundingClientRect().height : 0;
      const offset = Math.round(headerHeight + bannerHeight);
      const avail = Math.max(window.innerHeight - offset - 24, 300);
      setAvailableHeight(avail);
    }

    computeHeights();
    window.addEventListener("resize", computeHeights);
    const t = setTimeout(computeHeights, 120);
    return () => {
      window.removeEventListener("resize", computeHeights);
      clearTimeout(t);
    };
  }, []);

  const hideScrollbarCss = `
    .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
    .hide-scrollbar::-webkit-scrollbar { width: 0; height: 0; display: none; }
  `;

  function openArticle(article) {
    try {
      localStorage.setItem("selectedArticle", JSON.stringify(article));
    } catch (e) {
      console.warn(e);
    }
    window.location.href = `/article?id=${article.id}`;
  }

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
      <style>{hideScrollbarCss}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        <main
          className="space-y-8 hide-scrollbar"
          style={{
            maxHeight: availableHeight ? `${availableHeight}px` : undefined,
            overflowY: availableHeight ? "auto" : "visible",
            scrollBehavior: "smooth",
            paddingRight: 4,
          }}
        >
          <section>
            <div className="relative rounded overflow-hidden">
              <img
                src={ARTICLES.mainHero.smallImage}
                alt={ARTICLES.mainHero.heading}
                className="w-full h-64 md:h-80 lg:h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <div className="absolute left-6 top-6">
                  <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded">
                    சிறப்பு செய்தி
                  </span>
                </div>

                <div>
                  <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                    {ARTICLES.mainHero.heading}
                  </h1>
                  <p className="text-white/90 mt-2">{ARTICLES.mainHero.subtitle}</p>
                </div>

                <a
                  href={`/article?id=${ARTICLES.mainHero.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openArticle(ARTICLES.mainHero);
                  }}
                  className="absolute bottom-1 right-4 bg-orange-400 hover:bg-orange-500 text-white font-medium px-4 py-2 rounded"
                  aria-label={ARTICLES.mainHero.heading}
                >
                  மேலும் படிக்க...
                </a>
              </div>
            </div>

            <hr className="border-t border-gray-200 my-6" />
          </section>

          <hr className="border-t border-gray-200 my-6" />

          <section>
            <h3 className="text-xl font-semibold mb-4">சமீபத்திய செய்திகள்</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {recentNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded overflow-hidden shadow-sm flex items-center p-4 h-[200px]"
                >
                  <img
                    src={item.smallImage}
                    alt={item.heading}
                    className="w-[128px] h-[128px] object-cover rounded"
                  />
                  <div className="ml-4 flex-1 flex flex-col justify-between overflow-hidden">
                    <div>
                      <a
                        href={`/article?id=${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          openArticle(item);
                        }}
                        className="block text-black font-semibold leading-snug hover:underline underline-offset-2 decoration-black transition"
                      >
                        {item.heading}
                      </a>
                      <p className="text-gray-700 text-sm mt-2">{item.subtitle}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                      <AiOutlineClockCircle /> <span>{item.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <hr className="border-t border-gray-200 my-6" />

          <section>
            <h3 className="text-xl font-semibold mb-4">மேலும் செய்திகள்</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {moreNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded overflow-hidden shadow-sm flex items-center p-4 h-[200px]"
                >
                  <img
                    src={item.smallImage}
                    alt={item.heading}
                    className="w-[128px] h-[128px] object-cover rounded"
                  />
                  <div className="ml-4 flex-1 flex flex-col justify-between overflow-hidden">
                    <div>
                      <a
                        href={`/article?id=${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          openArticle(item);
                        }}
                        className="block text-black font-semibold leading-snug hover:underline underline-offset-2 decoration-black transition"
                      >
                        {item.heading}
                      </a>
                      <p className="text-gray-700 text-sm mt-2">{item.subtitle}</p>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                      <AiOutlineClockCircle /> <span>{item.time}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside
          className="space-y-6 hide-scrollbar"
          style={{
            maxHeight: availableHeight ? `${availableHeight}px` : undefined,
            overflowY: availableHeight ? "auto" : "visible",
            scrollBehavior: "smooth",
            paddingLeft: 4,
          }}
        >
          <div className="rounded overflow-hidden">
            <img src={ARTICLES._AD_1} alt="Advertisement 1" className="w-full object-contain" />
          </div>

          <div className="bg-white rounded shadow-sm p-4">
            <h4 className="text-lg font-semibold mb-2">செய்திமடல்</h4>
            <p className="text-sm text-gray-600 mb-3">தினசரி முக்கிய செய்திகளைப் பெற சந்தா செலுத்துங்கள்</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.currentTarget.elements.email?.value;
                e.currentTarget.reset();
                alert("நீங்கள் வெற்றிகரமாக சந்தா செய்தீர்கள்!");
              }}
            >
              <label className="sr-only" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="உங்கள் மின்னஞ்சல்" className="w-full border border-gray-200 rounded px-3 py-2 mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" />
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-2 rounded">சந்தா செலுத்த</button>
            </form>
          </div>

          <div className="rounded overflow-hidden">
            <img src={ARTICLES._AD_2} alt="Advertisement 2" className="w-full object-contain" />
          </div>
        </aside>
      </div>
    </div>
  );
}
