import { motion } from 'framer-motion'
import { RiArrowDownLine, RiMapPin2Line } from 'react-icons/ri'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
      {/* Background — Himalayan valley feel */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=1920&q=90')" }}
        role="img"
        aria-label="Pabbar Valley, Hatkoti, Himachal Pradesh"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brown/75 via-brown/60 to-brown/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/40 via-transparent to-brown/40" />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="text-gold text-5xl mb-6" aria-hidden="true">
          ॐ
        </motion.p>

        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible" className="font-cinzel text-xs tracking-[0.4em] text-gold/80 uppercase mb-4">
          Shakti Peetha of the Pabbar Valley
        </motion.p>

        <motion.h1 custom={2} variants={fadeUp} initial="hidden" animate="visible" className="font-cinzel text-5xl md:text-7xl lg:text-8xl text-cream leading-tight text-shadow tracking-wider mb-4">
          Mata Hateshwari
          <span className="block mt-2 text-transparent bg-clip-text text-4xl md:text-5xl lg:text-6xl" style={{ backgroundImage: 'linear-gradient(135deg, #C9A84C, #E8C96A, #A07830)' }}>
            Hatkoti Mandir
          </span>
        </motion.h1>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="divider-gold max-w-xs mx-auto">
          <span className="text-gold text-xs tracking-widest">✦</span>
        </motion.div>

        <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="text-cream/75 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-4 font-poppins">
          An ancient Shakti Peetha nestled on the banks of the River Pabbar, Jubbal, Himachal Pradesh. 
          Believed to be established between the 6th–9th century CE — home of the divine Mahishasurmardini.
        </motion.p>

        {/* Location pill */}
        <motion.div custom={4.5} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center justify-center gap-2 text-gold/60 text-xs font-poppins mb-8">
          <RiMapPin2Line className="text-sm" />
          <span>Hatkoti, Jubbal, Shimla District · ~104 km from Shimla</span>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary" aria-label="Donate to Hateshwari Mata Temple">
            Offer Seva
          </button>
          <button onClick={scrollToAbout} className="btn-outline" aria-label="Learn about the temple">
            Explore Temple
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <span className="font-cinzel text-xs tracking-widest uppercase">Jai Mata Di</span>
        <RiArrowDownLine className="text-xl" />
      </motion.button>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </section>
  )
}
