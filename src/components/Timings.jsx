import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { TIMINGS } from '../data'

export default function Timings() {
  const [ref, inView] = useInView()

  return (
    <section id="timings" className="section-pad bg-brown relative overflow-hidden" aria-label="Temple timings">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-cinzel text-xs tracking-[0.4em] text-gold/70 uppercase mb-3"
          >
            Plan Your Visit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cinzel text-4xl md:text-5xl text-cream tracking-wider"
          >
            Darshan <span className="gold-text">Timings</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px max-w-xs mx-auto mt-6"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TIMINGS.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative border border-gold/20 bg-white/5 backdrop-blur-sm p-8 hover:border-gold/60 hover:bg-white/10 transition-all duration-400"
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, rgba(201,168,76,0.3) 50%)',
                }}
                aria-hidden="true"
              />

              <div className="text-4xl mb-6" aria-hidden="true">
                {item.icon}
              </div>

              <div className="font-cinzel text-xs tracking-[0.3em] text-gold/70 uppercase mb-2">
                {item.period}
              </div>

              <div className="font-cinzel text-xl text-cream mb-4 group-hover:text-gold transition-colors duration-300">
                {item.time}
              </div>

              <p className="text-cream/50 text-sm leading-relaxed font-poppins">
                {item.description}
              </p>

              {/* Highlight badge */}
              <div className="mt-6 inline-block">
                <span className="font-cinzel text-xs tracking-widest text-gold border border-gold/30 px-3 py-1">
                  {item.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center text-cream/40 text-xs mt-10 font-poppins tracking-wide"
        >
          * Timings may vary during festivals and special occasions. Please call ahead to confirm.
        </motion.p>
      </div>
    </section>
  )
}
