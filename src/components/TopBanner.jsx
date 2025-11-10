import { useEffect, useRef, useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export default function TopBanner() {
  const [closed, setClosed] = useState(false);
  const bannerRef = useRef(null);
  const [bannerHeight, setBannerHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    function compute() {
      const headerEl = document.querySelector("header");
      const hHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
      setHeaderHeight(Math.round(hHeight));

      const bEl = bannerRef.current;
      const bHeight = bEl ? bEl.getBoundingClientRect().height : 0;
      setBannerHeight(Math.round(bHeight));
    }

    const t = setTimeout(compute, 0);

    window.addEventListener("resize", compute);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", compute);
    };
  }, []);

  if (closed) return null;

  const outerStyle = {
    position: "fixed",
    left: 0,
    right: 0,
    top: `${headerHeight}px`,
    zIndex: 40,
    backgroundColor: "#F4BF2F",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 16px",
  };

  return (
    <>
      <div
        ref={bannerRef}
        style={outerStyle}
        role="region"
        aria-label="Breaking news banner"
      >
        <div style={{ maxWidth: 1200, width: "100%", display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ flexShrink: 0 }}>
            <span
              style={{
                backgroundColor: "#D92B2B",
                color: "#fff",
                padding: "6px 10px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              Live
            </span>
          </div>

          <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: "#000", textAlign: "center" }}>
            <span style={{ display: "block", whiteSpace: "normal" }}>
              உடனடி: மைல்கல் சிவில் உரிமைகள் வழக்கில் நீதிமன்ற தீர்ப்பு
            </span>
          </div>

          <div style={{ flexShrink: 0 }}>
            <button
              onClick={() => setClosed(true)}
              aria-label="Close breaking news banner"
              title="Close"
              style={{
                background: "transparent",
                border: "none",
                padding: 6,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RiCloseLine size={20} />
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden style={{ height: bannerHeight }} />
    </>
  );
}
