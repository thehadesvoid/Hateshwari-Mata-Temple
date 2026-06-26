import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiStarFill } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'
import { TESTIMONIALS } from '../data'

export default function Testimonials() {
  const [ref, inView] = useInView()
  const [current, setCurrent] = useState(0)
  const timer = useRef(null)

  const startTimer = () => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer.current)
  }, [])

  const goTo = (i) => { setCurrent(i); startTimer() }

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2C1810 0%, #4A2C1A 50%, #2C1810 100%)' }}
      aria-label="Testimonials"
      ref={ref}
    >
      {/* OM watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[40rem] text-white/[0.02] font-cinzel select-none pointer-events-none"
        aria-hidden="true"
      >
        ॐ
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-cinzel text-xs tracking-[0.4em] text-gold/70 uppercase mb-3"
          >
            Devotee Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl md:text-5xl text-cream tracking-wider"
          >
            What Devotees <span className="gold-text">Say</span>
          </motion.h2>
        </div>

        {/* Card */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full glass p-10 md:p-14 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6" aria-label={`${TESTIMONIALS[current].rating} stars`}>
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <RiStarFill key={i} className="text-gold text-sm" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-cream/85 text-base md:text-lg leading-relaxed font-poppins font-light max-w-2xl mx-auto mb-8">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-px mb-3"
                  style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                />
                <span className="font-cinzel text-gold text-sm tracking-widest">
                  {TESTIMONIALS[current].name}
                </span>
                <span className="font-poppins text-cream/40 text-xs tracking-widest uppercase">
                  {TESTIMONIALS[current].city}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-1 bg-gold'
                  : 'w-2 h-1 bg-gold/30 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
