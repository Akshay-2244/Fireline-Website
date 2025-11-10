import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import ARTICLES from "../data/articles";

function openArticle(article) {
  try {
    localStorage.setItem("selectedArticle", JSON.stringify(article));
  } catch (e) {
    console.warn(e);
  }
  window.location.href = `/article?id=${article.id}`;
}

export default function NewsSection() {
  const big = ARTICLES.bigCard;
  const mediumCards = [ARTICLES.medium1, ARTICLES.medium2];
  const smallCards = [ARTICLES.small1, ARTICLES.small2, ARTICLES.small3, ARTICLES.small4];

  return (
    <section aria-labelledby="news-section" className="py-8 px-4 md:px-8 lg:px-12">
      <h2 id="news-section" className="sr-only">Latest News</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <article className="lg:col-span-2 relative rounded overflow-hidden">
          <img src={big.smallImage} alt={big.heading} className="w-full h-[520px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded">நேரலை</span>
              <span className="px-3 py-1 text-xs font-medium text-white bg-black/60 rounded">சுற்றுச்சூழல்</span>
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">{big.heading}</h3>
            <p className="text-white text-sm md:text-base mb-4">{big.subtitle}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-white/90"><AiOutlineClockCircle /> <span>{big.time}</span></div>
              <a
                href={`/article?id=${big.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  openArticle(big);
                }}
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
              >
                மேலும் படிக்க
              </a>
            </div>
          </div>
        </article>

        <div className="flex flex-col h-[520px] gap-6">
          {mediumCards.map((card) => (
            <article key={card.id} className="relative flex-1 rounded overflow-hidden">
              <img src={card.mediumImage ?? card.smallImage} alt={card.heading} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
                <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">{card.specialtag}</span>
                  <span className="px-2 py-1 text-xs font-medium text-white bg-black/60 rounded">{card.tag}</span>
                </div>
                <a
                  href={`/article?id=${card.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    openArticle(card);
                  }}
                  className="text-white text-lg font-semibold leading-snug hover:underline block"
                >
                  {card.heading}
                </a>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                  <AiOutlineClockCircle /> <span>{card.time}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {smallCards.map((c) => (
          <article key={c.id} className="relative rounded overflow-hidden h-56">
            <img src={c.smallImage} alt={c.heading} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute left-3 top-3">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">{c.tag}</span>
              </div>

              <a
                href={`/article?id=${c.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  openArticle(c);
                }}
                className="text-white text-sm font-semibold leading-snug hover:underline block"
              >
                {c.heading}
              </a>

              <div className="mt-2 flex items-center gap-2 text-xs text-white/90"><AiOutlineClockCircle /> <span>{c.time}</span></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
