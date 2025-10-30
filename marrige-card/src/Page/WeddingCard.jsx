import React, { useEffect, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { Calendar, Clock, MapPin, Heart } from 'lucide-react'

const WeddingCard = () => {
  const cardRef = useRef(null)
  const textRef = useRef(null)
  const flowerRef = useRef(null)

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

    // GSAP animations with guards to prevent invisible state
    const cardEl = cardRef.current
    const textEl = textRef.current
    const flowerEl = flowerRef.current
    if (!cardEl) return

    const tl = gsap.timeline()
    tl.from(cardEl, {
      scale: 0.94,
      duration: 0.8,
      ease: "power2.out"
    })

    if (textEl && textEl.children && textEl.children.length > 0) {
      tl.from(textEl.children, {
        y: 50,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=0.4")
    }

    if (flowerEl && flowerEl.children && flowerEl.children.length > 0) {
      tl.from(flowerEl.children, {
        rotation: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3")

      gsap.to(flowerEl.children, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      })
    }
  }, [])

  const themeColors = events[0].colors

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle floating accents */}
      <div ref={flowerRef} className="absolute inset-0 pointer-events-none opacity-30">
        {useMemo(() => {
          const accents = Array.from({ length: 8 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 120}px`,
            duration: 6 + Math.random() * 4,
          }))
          return accents.map((a, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
              style={{ left: a.left, top: a.top, width: a.width }}
              animate={{ opacity: [0, 0.5, 0], scaleX: [0.6, 1, 0.6] }}
              transition={{ duration: a.duration, repeat: Infinity }}
            />
          ))
        }, [])}
      </div>

      {/* Main Card */}
      <motion.div
        ref={cardRef}
        className="relative max-w-3xl w-full bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        {/* Top gradient accent */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]}, ${themeColors[2]})` }}></div>

        {/* Header */}
        <div ref={textRef} className="p-8 text-center relative mb-6 md:mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-36 h-36 mx-auto mb-4 relative z-10"
          >
            <img
              src={GANESH_URL}
              alt="Lord Ganesha"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>

          <motion.p
            className="text-base font-semibold text-yellow-400 mb-1"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ fontFamily: 'serif' }}
          >
            ॥ श्री गणेशाय नमः ॥
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            शुभ विवाह विवरण
          </motion.h1>

          <div
            className="h-1 mx-auto rounded-full mt-3"
            style={{ width: '120px', background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})` }}
          />
        </div>

        {/* Couple Names */}
        <div className="px-6 mb-6 md:px-10 text-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 md:mt-14"
            whileHover={{ scale: 1.04 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors" style={{ fontFamily: 'serif' }}>अजीत</h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-6 my-4"
          >
            <div className="h-px bg-linear-to-r from-transparent via-pink-400 to-transparent w-24"></div>
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-pink-400"
              >
                <Heart size={28} />
              </motion.div>
              <motion.span
                className="text-sm font-semibold text-pink-300 tracking-wide"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                संग
              </motion.span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="text-pink-400"
              >
                <Heart size={28} />
              </motion.div>
            </div>
            <div className="h-px bg-linear-to-r from-transparent via-pink-400 to-transparent w-24"></div>
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            whileHover={{ scale: 1.04 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors" style={{ fontFamily: 'serif' }}>वर्षा</h2>
          </motion.div>
        </div>

        {/* All Events - sequential listing */}
        <div className="mt-8 px-6 md:px-10 pb-8 space-y-6">
          {events.map((e) => (
            <motion.div
              key={`details-${e.key}`}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-6 border border-gray-600 backdrop-blur-sm"
              style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.04))' }}
              whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.35)' }}
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
            </motion.div>
          ))}

          {/* Venue (common) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-300">
              <MapPin className="text-pink-400" size={18} />
              <p className="text-lg">विवाह स्थल: कम्युनिटी सेंटर, सेक्टर-9, गुरुग्राम</p>
            </div>
            <p className="text-sm text-gray-400 mt-1">ग्राम खोहकला, पो० सालिमपुर, तह० महवा, जिला दौसा (राज०)</p>

            <div className="mt-5 flex items-center justify-center gap-3 flex-wrap">
              <motion.a
                href={MAPS_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})`, color: '#0b0b0b' }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              >
                Google Maps पर खोलें
              </motion.a>
              <motion.a
                href={PDF_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]})`, color: '#0b0b0b' }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
              >
                Marrige Card
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Dot indicators removed */}

        {/* Bottom accent */}
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${themeColors[0]}, ${themeColors[1]}, ${themeColors[2]})` }}></div>
      </motion.div>
    </div>
  )
}

export default WeddingCard
