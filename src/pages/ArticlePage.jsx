import React, { useEffect, useState } from "react";
import RedirectHeader from "../components/RedirectHeader";
import Footer from "../components/Footer";
import ARTICLES from "../data/articles";
import { AiOutlineClockCircle, AiOutlineLoading3Quarters } from "react-icons/ai";

export default function ArticlePage() {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let saved = null;
    try {
      const raw = localStorage.getItem("selectedArticle");
      if (raw) saved = JSON.parse(raw);
    } catch (e) {
      console.warn("localStorage read failed", e);
    }

    const params = new URLSearchParams(window.location.search);
    const idParam = params.get("id");

    if (saved && saved.id) {
      const mapped = ARTICLES[saved.id];
      const bigImage = mapped ? mapped.bigImage ?? null : saved.bigImage ?? null;
      setArticle({ ...saved, bigImage });
      return;
    }

    if (idParam && ARTICLES[idParam]) {
      setArticle(ARTICLES[idParam]);
      return;
    }

    setArticle(ARTICLES.mainHero);
  }, []);

  if (!article) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500" />
      </div>
    );
  }

  const big = article.bigImage ?? null;

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <RedirectHeader />

      <main className="flex-1 container mx-auto px-4 md:px-8 lg:px-12 py-8">
        <article>
          <div className="mb-3">
            <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded">{article.tag}</span>
          </div>

          <div className="rounded overflow-hidden mb-6 bg-gray-100" style={{ minHeight: 320 }}>
            {big ? (
              <img src={big} alt={article.heading} className="w-full object-cover" />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 p-8">
                <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-500" aria-hidden />
                <p className="text-gray-600">படம் கிடைக்கவில்லை — விரைவில் சேர்க்கப்படும்.</p>
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-3">{article.heading}</h1>
          <p className="text-gray-700 mb-4">{article.subtitle}</p>

          <div className="flex flex-col items-start gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <AiOutlineClockCircle />
              <span>{article.time}</span>
            </div>

            <div className="hidden md:flex justify-center items-center w-full">
              <img
                src={ARTICLES._AD_3}
                alt="Ad"
                className="object-contain"
                style={{ height: "auto", width: "auto", maxHeight: "90px" }}
              />
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            {article.body && article.body.length ? (
              article.body.map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <p>மேலும் விரிவான செய்தி விரைவில் சேர்க்கப்படும்.</p>
            )}
          </div>

          <hr className="border-t border-gray-200 my-6" />

          <section>
            <h2 className="text-xl font-semibold mb-4">மேலும் தொடர்புடைய செய்திகள்</h2>
            {article.related && article.related.length ? (
              <ul className="space-y-3">
                {article.related.map((r, i) => (
                  <li key={i}>
                    <a
                      href={`/article?id=${r.id}`}
                      onClick={(e) => {
                        try {
                          localStorage.setItem("selectedArticle", JSON.stringify(ARTICLES[r.id]));
                        } catch (_) {}
                      }}
                      className="text-indigo-600 hover:underline font-medium"
                    >
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">இங்கு தொடர்புடைய செய்திகள் இல்லை.</p>
            )}
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}
