import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

import bigCardImg from "../assets/BigCard.png";
import med1Img from "../assets/MediumCard(1).png";
import med2Img from "../assets/MediumCard(2).png";
import s1 from "../assets/SmallCard(1).png";
import s2 from "../assets/SmallCard(2).png";
import s3 from "../assets/SmallCard(3).png";
import s4 from "../assets/SmallCard(4).png";

export default function NewsSection() {
  return (
    <section aria-labelledby="news-section" className="py-8 px-4 md:px-8 lg:px-12">
      <h2 id="news-section" className="sr-only">
        Latest News
      </h2>

      {/* Top layout: Big Card + Two Medium Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <article className="lg:col-span-2 relative rounded overflow-hidden">
          <img
            src={bigCardImg}
            alt="Big card image"
            className="w-full h-[520px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                நேரலை
              </span>
              <span className="px-3 py-1 text-xs font-medium text-white bg-black/60 rounded">
                சுற்றுச்சூழல்
              </span>
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
              சுற்றுச்சூழல் நீதிக்காக ஆயிரக்கணக்கான மக்கள் உலகளாவிய போராட்டங்களில் ஈடுபட்டுள்ளனர்.
            </h3>
            <p className="text-white text-sm md:text-base mb-4">
              இளைஞர் ஆர்வலர்கள் சுற்றுச்சூழல் கொள்கைகளில் உடனடி நடவடிக்கை எடுக்க கோருகின்றனர்.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <AiOutlineClockCircle />
                <span>2 மணி நேரம் முன்பு</span>
              </div>
              <a
                href="/article"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded transition"
              >
                மேலும் படிக்க
              </a>
            </div>
          </div>
        </article>

        <div className="flex flex-col h-[520px] gap-6">
          {/* Medium Card 1 */}
          <article className="relative flex-1 rounded overflow-hidden">
            <img src={med1Img} alt="Medium card 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                  அவசர செய்தி
                </span>
                <span className="px-2 py-1 text-xs font-medium text-white bg-black/60 rounded">
                  அரசியல்
                </span>
              </div>
              <a
                href="/article"
                className="text-white text-lg font-semibold leading-snug hover:underline"
              >
                வரலாற்று வாக்குரிமை மசோதா மைல்கல் முடிவில் நிறைவேற்றப்பட்டது.
              </a>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                <AiOutlineClockCircle />
                <span>4 மணி நேரம் முன்பு</span>
              </div>
            </div>
          </article>

          {/* Medium Card 2 */}
          <article className="relative flex-1 rounded overflow-hidden">
            <img src={med2Img} alt="Medium card 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                  நேரலை
                </span>
                <span className="px-2 py-1 text-xs font-medium text-white bg-black/60 rounded">
                  கலாச்சாரம்
                </span>
              </div>
              <a
                href="/article"
                className="text-white text-lg font-semibold leading-snug hover:underline"
              >
                கலாச்சார திருவிழா பன்முகத்தன்மையும் ஒற்றுமையையும் கொண்டாடுகிறது.
              </a>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/90">
                <AiOutlineClockCircle />
                <span>6 மணி நேரம் முன்பு</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Bottom 4 Small Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            img: s1,
            cat: "தொழில்நுட்பம்",
            title: "புதிய டிஜிட்டல் சட்டங்கள் பயனர் தரவை பாதுகாக்கின்றன.",
            time: "7 மணி நேரம் முன்பு",
          },
          {
            img: s2,
            cat: "சமூகம்",
            title: "சமூக தலைவர்கள் மலிவு வீட்டு தீர்வுகளுக்காக",
            time: "8 மணி நேரம் முன்பு",
          },
          {
            img: s3,
            cat: "கல்வி",
            title: "மாணவர்கள் கல்வி சீர்திருத்தத்திற்காக",
            time: "10 மணி நேரம் முன்பு",
          },
          {
            img: s4,
            cat: "விசாரணை",
            title: "பெருநிறுவன முறைகேடுகளை அம்பலப்படுத்தும் ஆழமான",
            time: "1 நாள் முன்பு",
          },
        ].map((c, i) => (
          <article key={i} className="relative rounded overflow-hidden h-56">
            <img src={c.img} alt={c.cat} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 flex flex-col justify-end">
              <div className="absolute left-3 top-3">
                <span className="px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded">
                  {c.cat}
                </span>
              </div>
              <a
                href="/article"
                className="text-white text-sm font-semibold leading-snug hover:underline"
              >
                {c.title}
              </a>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/90">
                <AiOutlineClockCircle />
                <span>{c.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
