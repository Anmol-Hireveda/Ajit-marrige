import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown, Gem, Calendar, MapPin, Phone } from 'lucide-react'
 
const GANESH_URL = 'https://res.cloudinary.com/dyjxnbfpx/image/upload/v1761816488/2e969bef-0614-473c-b83b-530aa71f4c69.png'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Ensure the page starts scrolled to top when this route mounts
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden'>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Particles - positions/durations memoized to avoid changing on re-render/hydration */}
        {useMemo(() => {
          const particles = Array.from({ length: 50 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 4 + Math.random() * 3,
            scale: 0.5 + Math.random(),
          }))
          return particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white opacity-20 rounded-full"
              style={{ left: p.left, top: p.top }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.8, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))
        }, [])}

        {/* Elegant Lines - memoized */}
        {useMemo(() => {
          const lines = Array.from({ length: 8 }).map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            duration: 6 + Math.random() * 4,
          }))
          return lines.map((l, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
              style={{ left: l.left, top: l.top, width: l.width }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: l.duration,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))
        }, [])}
      </div>

      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-4xl"
        >

          {/* Modern Dark Card */}
          <div className="bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-gray-700">

            {/* Top Elegant Border */}
            <div className="h-1 bg-linear-to-r from-yellow-400 via-pink-500 to-purple-500"></div>

            {/* Header Section */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="p-8 text-center relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-8 h-8 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-10 h-10 border border-white/20 rounded-full"></div>
              </div>

              {/* Ganesha Image */}
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg font-semibold text-yellow-400 mb-2 relative z-10"
                style={{ fontFamily: 'serif' }}
              >
                ॥ श्री गणेशाय नमः ॥
              </motion.p>

              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-4xl font-bold text-white mb-2 relative z-10"
              >
                शुभ विवाह
              </motion.h1>

              <div
                className="h-1 bg-linear-to-r from-yellow-400 to-pink-400 mx-auto rounded-full relative z-10 mt-3"
                style={{ width: '80px' }}
              ></div>
            </motion.div>

            {/* Main Content */}
            <div>

              {/* Parents Names */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center mb-8"
              >

              </motion.div>

              {/* Couple Names */}
              <div className="text-center mb-8">

                {/* Groom Name */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="mb-4"
                >
                  <h2 className="text-5xl font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                    अजीत
                  </h2>
                </motion.div>

                {/* Elegant Separator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex items-center justify-center gap-6 my-6"
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
                    <span className="text-sm font-semibold text-pink-300 tracking-wide">संग</span>
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

                {/* Bride Name */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="mb-4"
                >

                  <h2 className="text-5xl font-bold text-yellow-400 mb-2" style={{ fontFamily: 'serif' }}>
                    वर्षा
                  </h2>

                </motion.div>
              </div>

              {/* Wedding Details Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9 }}
                className="bg-linear-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-6 mb-6 border border-gray-600 backdrop-blur-sm"
              >
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="text-yellow-400" size={20} />
                    <p className="text-xl font-bold text-yellow-400">
                      शनिवार, दिनांक 29 नवम्बर, 2025
                    </p>
                  </div>
                  <p className="text-lg text-gray-300">समय: शाम 6 बजे</p>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="text-pink-400" size={18} />
                    <p className="text-lg text-gray-300">स्थान: ग्राम खोहकला, पो० सालिमपुर, तह० महवा</p>
                  </div>

                  <p className="text-lg text-gray-300">जिला दौसा (राज०) 321608</p>
                </div>
              </motion.div>



              {/* Contact Information */}
              {/* <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.3 }}
                className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-6 mb-6 border border-gray-600 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-gray-200 mb-4 text-center">संपर्क सूचना</h3>
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="text-blue-400" size={18} />
                    <p className="text-base font-semibold text-gray-300">मोबाइल नंबर:</p>
                  </div>
                  <p className="text-sm text-gray-400">9315376384, 8107494908</p>
                  <p className="text-sm text-gray-400">8800959511, 6375503128</p>
                </div>
              </motion.div> */}


            </div>

            {/* Bottom Elegant Border */}
            <div className="h-1 bg-linear-to-r from-purple-500 via-pink-500 to-yellow-400"></div>
          </div>

          {/* Modern Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => navigate('/card')}
              className="relative z-10 bg-linear-to-r from-purple-600 via-pink-600 to-yellow-500 text-white px-12 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
                background: "linear-gradient(to right, #9333ea, #ec4899, #f59e0b)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles size={24} />
                </motion.div>
                View Complete Details
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={24} />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home