import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { STATS } from '../data'

function StatCard({ stat, index }) {
  const [ref, inView] = useInView()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 border border-gold/20 bg-cream/60 backdrop-blur-sm"
    >
      <div className="font-cinzel text-4xl md:text-5xl gold-text font-bold">
        {stat.value}<span className="text-2xl">{stat.suffix}</span>
      </div>
      <div className="font-poppins text-xs tracking-widest text-brown-mid uppercase mt-2">{stat.label}</div>
    </motion.div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section-pad bg-parchment" aria-label="About Hateshwari Mata Temple">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545126913-d3e665e15f06?w=900&q=85"
                alt="Hateshwari Mata Temple Hatkoti — Shikhara architecture"
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/30 m-4 pointer-events-none" aria-hidden="true" />
            </div>
            {/* Era badge */}
            <div className="absolute -bottom-6 -right-6 bg-brown p-6 text-center shadow-2xl" aria-label="6th century CE">
              <div className="font-cinzel text-gold text-2xl font-bold leading-tight">6th–9th</div>
              <div className="font-poppins text-cream/70 text-xs tracking-widest uppercase mt-1">Century CE</div>
            </div>
          </motion.div>

          {/* Text */}
          <div className="space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="section-subtitle">Shakti Peetha of Pabbar Valley</p>
              <h2 className="section-title">
                A Living <span className="gold-text">Ancient Shrine</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-brown-mid leading-relaxed"
            >
              Situated on the right bank of the River Pabbar in Hatkoti village, Jubbal, this ancient 
              Shakti Peetha is believed to have been established between the 6th and 9th centuries CE during 
              the Gupta era — and later revived under Adi Shankaracharya's spiritual mission. The temple 
              complex spans 5 sq. km of Shikhara-style stone temples, and holds deep ties to the Mahabharata 
              era — the five Pandava Deols stand as testament to that connection.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-brown-mid leading-relaxed text-sm"
            >
              The presiding deity — a 1.2-metre Ashtadhatu idol of <em>Mahishasurmardini</em> — is revered 
              for her changing expressions. The Bhagavat Gita's fifth skandha refers to Hatkoti as one of 
              the principal residences of Shiva and Shakti. The chained "Charu" copper vessel and the five 
              Pandava stone shrines make this one of the most historically layered temples in all of 
              North India.
            </motion.p>

            {/* Mission/Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: 'Our Mission',
                  text: 'To preserve the ancient Gupta-era architecture, Vedic rituals, and the folk traditions of the Pabbar Valley for generations of devotees.',
                },
                {
                  title: 'Our Vision',
                  text: 'To serve as a living Shakti Peetha that connects pilgrims to the divine energy of Mata Hateshwari — protector, nurturer, and slayer of Mahishasur.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.1 }}
                  className="border-l-2 border-gold pl-4"
                >
                  <h3 className="font-cinzel text-sm tracking-widest text-gold uppercase mb-2">{item.title}</h3>
                  <p className="text-brown-mid text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
