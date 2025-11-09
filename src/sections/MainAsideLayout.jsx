import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

import mainBig from "../assets/BigImage.png";
import s1 from "../assets/SmallImage(1).png";
import s2 from "../assets/SmallImage(2).png";
import s3 from "../assets/SmallImage(3).png";
import s4 from "../assets/SmallImage(4).png";
import s5 from "../assets/SmallImage(5).png";
import s6 from "../assets/SmallImage(6).png";
import ad1 from "../assets/AD(1).png";
import ad2 from "../assets/AD(2).png";

export default function MainAsideLayout() {
  const [availableHeight, setAvailableHeight] = useState(null);
  const containerRef = useRef(null);

  const recentNews = [
    {
      img: s1,
      title: "பாராளுமானத்தில் புதிய வரி சீர்திருத்த மசோதா",
      summary: "நடுத்தர வருமான குடும்பங்களுக்கு நிவாரணம் அளிக்கும் வகையில்",
      time: "1 மணி நேரம் முன்பு",
      cat: "அரசியல்",
    },
    {
      img: s2,
      title: "எதிர்க்கட்சி தலைவர்கள் வெளிநாட்டு கொள்கை",
      summary: "சமீபத்திய இராஜதந்திர முடிவுகள் குறித்து எதிர்க்கட்சி மற்றும்",
      time: "2 மணி நேரம் முன்பு",
      cat: "அரசியல்",
    },
    {
      img: s3,
      title: "இளைஞர் காலநிலை ஆர்வலர்கள் உடனடி",
      summary: "வலுவான காலநிலை சட்டம் மற்றும் கார்பன் உமிழ்வு குறைப்பதில்",
      time: "2 மணி நேரம் முன்பு",
      cat: "காலநிலை",
    },
    {
      img: s4,
      title: "உள்ளாட்சி தேர்தல்: முக்கிய மாநிலங்களில்",
      summary: "பல முக்கிய மாநிலங்களில் நகராட்சி தேர்தல்களுக்கான",
      time: "3 மணி நேரம் முன்பு",
      cat: "உள்ளாட்சி",
    },
    {
      img: s5,
      title: "புதிய டிஜிட்டல் தனியுரிமை சட்டங்கள்",
      summary: "தனிப்பட்ட தகவலைப் பாதுகாக்கவும், தொழில்நுட்ப",
      time: "4 மணி நேரம் முன்பு",
      cat: "தொழில்நுட்பம்",
    },
    {
      img: s6,
      title: "பெண்களின் பாதுகாப்பு மசோதா அமலுக்கு",
      summary: "பெண்களுக்கு எதிரான வன்முறையை தடுக்கும் புதிய",
      time: "5 மணி நேரம் முன்பு",
      cat: "சமூக",
    },
  ];

  const moreNews = [
    {
      img: s5,
      title: "சமூக தலைவர்கள் மலிவீட்டு தீர்வுகளுக்காக",
      summary: "நகர்ப்புற பகுதிகளில் குறைந்த வருமானம் கொண்ட",
      time: "6 மணி நேரம் முன்பு",
      cat: "சமூகம்",
    },
    {
      img: s4,
      title: "வேலைவாய்ப்பு உரிமைகள் சட்டத்தில்",
      summary: "தொழிலாளர் சங்கங்கள் வரவேற்கும் வகையில் புதிய",
      time: "7 மணி நேரம் முன்பு",
      cat: "தொழில்",
    },
    {
      img: s2,
      title: "மாநில அரசு புதிய விவசாயிகள் நல",
      summary: "விவசாயிகளின் வருமானத்தை இரட்டிப்பாக்கும் விரிவான நலத்",
      time: "9 மணி நேரம் முன்பு",
      cat: "விவசாயம்",
    },
    {
      img: s6,
      title: "மாணவர்கள் கல்வி சீர்திருத்தம் மற்றும் சம",
      summary: "பொது கல்விக்கு அதிக நிதி மற்றும் மாணவர் கடன் சுமைகளை",
      time: "8 மணி நேரம் முன்பு",
      cat: "கல்வி",
    },
    {
      img: s1,
      title: "மனித உரிமைகள் ஆணையம் புதிய",
      summary: "அனைத்து குடிமக்களின் அடிப்படை உரிமைகளை பாதுகாக்க புதிய",
      time: "10 மணி நேரம் முன்பு",
      cat: "மனித உரிமைகள்",
    },
    {
      img: s3,
      title: "பாராளுமன்றத்தில் பட்ஜெட் விவாதம்",
      summary: "புதிய நிதி ஆண்டுக்கான வரவு–செலவு திட்டம் குறித்த விவாதம்",
      time: "12 மணி நேரம் முன்பு",
      cat: "நாட்டுப்பணம்",
    },
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

  return (
    <div ref={containerRef} className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
      <style>{hideScrollbarCss}</style>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* MAIN COLUMN */}
        <main
          className="space-y-8 hide-scrollbar"
          style={{
            maxHeight: availableHeight ? `${availableHeight}px` : undefined,
            overflowY: availableHeight ? "auto" : "visible",
            scrollBehavior: "smooth",
            paddingRight: 4,
          }}
        >
          {/* Big hero image */}
          <article className="relative rounded overflow-hidden">
            <img src={mainBig} alt="Main big" className="w-full h-64 md:h-80 lg:h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <div className="absolute left-6 top-6">
                <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded">
                  சிறப்பு செய்தி
                </span>
              </div>

              <h1 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                "கேட்கப்படாதவர்களின் குரல்கள் புறக்கணிக்க முடியாததாக மாற வேண்டும்"
              </h1>
              <p className="text-white/90 mt-2">— சமூக தலைவர்</p>
            </div>
          </article>

          <hr className="border-t border-gray-200 my-6" />

          <section className="bg-white rounded shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-3">
              விசாரணை அறிக்கை: அமைப்புரீதியான சமத்துவமின்மை பற்றிய மௌனத்தை உடைக்கிறது.
            </h2>
            <p className="text-gray-700 mb-4">
              நாடு முழுவதும் சிறுபான்மை சமூகங்களை பாதிக்கும் வீட்டுவசதி கொள்கைகளில் தசாப்தங்களாக கவனிக்கப்படாத
              பாகுபாட்டை ஆழமான விசாரணை வெளிப்படுத்துகிறது.
            </p>
            <a
              href="/article"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded"
            >
              முழு விசாரணையைப் படிக்கவும்
            </a>
          </section>

          <hr className="border-t border-gray-200 my-6" />

          {/* சமீபத்திய செய்திகள் */}
          <section>
            <h3 className="text-xl font-semibold mb-4">சமீபத்திய செய்திகள்</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((item, idx) => (
                <article key={idx} className="bg-white rounded overflow-hidden shadow-sm">
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 flex flex-col justify-end">
                      <a
                        href="/article"
                        className="block text-white font-semibold leading-snug hover:underline underline-offset-2 decoration-white transition"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                      <p className="text-white/90 text-sm mt-1">{item.summary}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                        <AiOutlineClockCircle />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <a href="/article" className="absolute inset-0" aria-hidden tabIndex={-1} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <hr className="border-t border-gray-200 my-6" />

          {/* மேலும் செய்திகள் */}
          <section>
            <h3 className="text-xl font-semibold mb-4">மேலும் செய்திகள்</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreNews.map((item, idx) => (
                <article key={idx} className="bg-white rounded overflow-hidden shadow-sm">
                  <div className="relative">
                    <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 flex flex-col justify-end">
                      <a
                        href="/article"
                        className="block text-white font-semibold leading-snug hover:underline underline-offset-2 decoration-white transition"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                      <p className="text-white/90 text-sm mt-1">{item.summary}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                        <AiOutlineClockCircle />
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <a href="/article" className="absolute inset-0" aria-hidden tabIndex={-1} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        {/* ASIDE */}
        <aside
          className="space-y-6 hide-scrollbar"
          style={{
            maxHeight: availableHeight ? `${availableHeight}px` : undefined,
            overflowY: availableHeight ? "auto" : "visible",
            scrollBehavior: "smooth",
            paddingLeft: 4,
          }}
        >
          {/* AD 1 (top) */}
          <div className="rounded overflow-hidden">
            <img src={ad1} alt="Advertisement 1" className="w-full object-contain" />
          </div>
          
          <div className="bg-white rounded shadow-sm p-4">
            <h4 className="text-lg font-semibold mb-2">செய்தி சந்தா</h4>
            <p className="text-sm text-gray-600 mb-3">புதிய செய்திகளுக்கு மின்னஞ்சலில் சந்தா செய்யவும்.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = form.elements.email?.value;
                console.log("subscribe:", email);
                form.reset();
                alert("நீங்கள் வெற்றிகரமாக சந்தா செய்தீர்கள்!");
              }}
            >
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="உங்கள் மின்னஞ்சல்"
                className="w-full border border-gray-200 rounded px-3 py-2 mb-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              />
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-2 rounded">
                சந்தா செய்யவும்
              </button>
            </form>
          </div>

          {/* AD 2 (bottom) */}
          <div className="rounded overflow-hidden">
            <img src={ad2} alt="Advertisement 2" className="w-full object-contain" />
          </div>
        </aside>
      </div>
    </div>
  );
}
