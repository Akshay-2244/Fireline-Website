import React from "react";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";
import NewsSection from "./sections/NewsSection";
import MainAsideLayout from "./sections/MainAsideLayout";
import ArticlePage from "./pages/ArticlePage";

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  if (path.startsWith("/article")) {
    return <ArticlePage />;
  }

  return (
    <>
      <Header />
      <TopBanner />
      <NewsSection />
      <MainAsideLayout />
      <Footer />
    </>
  );
}
