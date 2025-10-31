import React, { useEffect, useRef, useMemo } from 'react'
import { Calendar, Clock, MapPin, Heart } from 'lucide-react'

const WeddingCard = () => {
  const cardRef = useRef(null)
  const textRef = useRef(null)

  // Map configuration: paste the exact Google Maps EMBED url below for precise rendering
  const MAPS_APP_URL = 'https://maps.app.goo.gl/W3mSnY7zcXGDyCTV9'
  // Embedded map removed per request; keep only external link button

  // External PDF link (Google Drive)
  const PDF_URL = 'https://drive.google.com/file/d/10R93L5G-SQSKAApwYZDjePHE1TAB3V0I/view?usp=sharing'
  // Ganesha image URL (Google Drive)
  const GANESH_URL = 'https://res.cloudinary.com/dyjxnbfpx/image/upload/v1761816488/2e969bef-0614-473c-b83b-530aa71f4c69.png'

  const events = useMemo(() => ([
    {
      key: 'lagan',
      dateLabel: 'रविवार, 23 नवम्बर 2025',
      title: 'लगन / भात / मांड',
      time: 'सायं 5:00 बजे',
      colors: ['#f59e0b', '#f97316', '#b45309'], // warm saffron
      accent: '🪔',
      desc: 'शुभ लग्न लेख और पारिवारिक कार्यक्रम।'
    },
    {
      key: 'haldi',
      dateLabel: 'बृहस्पतिवार, 27 नवम्बर 2025',
      title: 'हल्दी / मेंहदी / तेल',
      time: 'सायं 6:00 बजे',
      colors: ['#fde047', '#facc15', '#84cc16'], // haldi-yellow to mehendi-green
      accent: '🌼',
      desc: 'हल्दी की महक और मेंहदी की रौनक के साथ रस्में।'
    },
    {
      key: 'chak',
      dateLabel: 'शुक्रवार, 28 नवम्बर 2025',
      title: 'चाक',
      time: 'सायं 4:00 बजे',
      colors: ['#60a5fa', '#a78bfa', '#22d3ee'], // cool festive
      accent: '🎶',
      desc: 'बैंड-बाजा, गीत-संगीत और पारंपरिक रीति।'
    },
    {
      key: 'barat',
      dateLabel: 'शनिवार, 29 नवम्बर 2025',
      title: 'बारात प्रस्थान / शुभ विवाह',
      time: '1:00 बजे / रात्रि शुभमुहूर्त',
      colors: ['#ef4444', '#ec4899', '#a855f7'], // barat red to wedding pink-purple
      accent: '💍',
      desc: 'बारात रवाना, जयमाल एवं शुभ-विवाह संस्कार।'
    },
    {
      key: 'vidai',
      dateLabel: 'रविवार, 30 नवम्बर 2025',
      title: 'वधू आगमन',
      time: 'सुबह 5:00 बजे',
      colors: ['#38bdf8', '#22d3ee', '#34d399'], // serene dawn
      accent: '🕊️',
      desc: 'नए जीवन की सुंदर शुरुआत के साथ वधू आगमन।'
    }
  ]), [])

  // Auto-rotate removed: showing all events sequentially

  useEffect(() => {
    // Ensure page starts at top when this component mounts
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [])

  const themeColors = events[0].colors

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex items-start justify-center p-6 pt-12 relative overflow-hidden">
      {/* Main Card */}
      <div
        ref={cardRef}
        className="relative max-w-3xl w-full bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
      >
        {/* Top gradient accent */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]}, ${themeColors[2]})` }}></div>

        {/* Header */}
        <div ref={textRef} className="p-6 text-center relative mb-4 md:mb-6">
          <div className="w-36 h-36 mx-auto mb-4 relative z-10">
            <img
              src={GANESH_URL}
              alt="Lord Ganesha"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>

          <p
            className="text-base font-semibold text-yellow-400 mb-1"
            style={{ fontFamily: 'serif' }}
          >
            ॥ श्री गणेशाय नमः ॥
          </p>

          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-0"
          >
            शुभ विवाह विवरण
          </h1>

          <div
            className="h-1 mx-auto rounded-full mt-3"
            style={{ width: '120px', background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})` }}
          />
        </div>

        {/* Couple Names */}
        <div className="px-6 mb-6 md:px-10 text-center">
          <div className="mt-6 md:mt-10">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400" style={{ fontFamily: 'serif' }}>अजीत</h2>
          </div>

          <div className="flex items-center justify-center gap-6 my-4">
            <div className="h-px bg-linear-to-r from-transparent via-pink-400 to-transparent w-24"></div>
            <div className="flex items-center gap-3">
              <div className="text-pink-400">
                <Heart size={28} />
              </div>
              <span className="text-sm font-semibold text-pink-300 tracking-wide">संग</span>
              <div className="text-pink-400">
                <Heart size={28} />
              </div>
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-pink-400 to-transparent w-24"></div>
          </div>

          <div className="mt-2">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400" style={{ fontFamily: 'serif' }}>वर्षा</h2>
          </div>
        </div>

        {/* All Events - sequential listing */}
        <div className="mt-8 px-6 md:px-10 pb-8 space-y-6">
          {events.map((e) => (
            <div
              key={`details-${e.key}`}
              className="rounded-xl p-6 border border-gray-600 backdrop-blur-sm"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))' }}
            >
              <div className="text-center mb-2">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'serif' }}>
                  {e.accent} {e.title}
                </h3>
                <div className="h-1 mx-auto rounded-full mt-2" style={{ maxWidth: 160, background: `linear-gradient(90deg, ${e.colors[0]}, ${e.colors[1]})` }} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="text-yellow-400" size={18} />
                  <span className="font-semibold">{e.dateLabel}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="text-pink-400" size={16} />
                  <span>{e.time}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-4 text-center">{e.desc}</p>
            </div>
          ))}

          {/* Venue (common) */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-gray-300">
              <MapPin className="text-pink-400" size={18} />
              <p className="text-lg">विवाह स्थल: कम्युनिटी सेंटर, सेक्टर-9, गुरुग्राम</p>
            </div>
            <p className="text-sm text-gray-400 mt-1">ग्राम खोहकला, पो० सालिमपुर, तह० महवा, जिला दौसा (राज०)</p>

            <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
              <a
                href={MAPS_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})`, color: '#0b0b0b' }}
              >
                Google Maps पर खोलें
              </a>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})`, color: '#0b0b0b' }}
              >
                Marrige Card
              </a>
            </div>
          </div>
        </div>

        {/* Dot indicators removed */}

        {/* Bottom accent */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]}, ${themeColors[2]})` }}></div>
      </div>
    </div>
  )
}

export default WeddingCard
