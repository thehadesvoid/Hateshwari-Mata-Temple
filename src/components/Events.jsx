import { motion } from 'framer-motion'
import { RiCalendarLine, RiMapPin2Line, RiArrowRightLine } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'
import { EVENTS } from '../data'

export default function Events() {
  const [ref, inView] = useInView()

  return (
    <section id="events" className="section-pad bg-beige" aria-label="Upcoming events">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle"
          >
            Mark Your Calendar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Upcoming <span className="gold-text">Events</span>
          </motion.h2>
        </div>

        {/* Event cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {EVENTS.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex gap-0 overflow-hidden border border-gold/20 bg-cream hover:shadow-gold transition-all duration-400"
            >
              {/* Image */}
              <div className="relative w-36 shrink-0 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Date overlay */}
                <div className="absolute inset-0 bg-brown/70 flex flex-col items-center justify-center">
                  <span className="font-cinzel text-3xl text-gold font-bold leading-none">
                    {event.day}
                  </span>
                  <span className="font-cinzel text-xs tracking-widest text-gold/80 uppercase mt-1">
                    {event.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="font-cinzel text-xs tracking-widest text-gold uppercase">
                    {event.category}
                  </span>
                  <h3 className="font-cinzel text-lg text-brown mt-1 mb-3 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-brown-mid text-sm leading-relaxed font-poppins">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold/15">
                  <div className="flex items-center gap-2 text-xs text-brown-mid font-poppins">
                    <RiCalendarLine className="text-gold" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1 text-gold text-xs font-cinzel tracking-widest uppercase group-hover:gap-2 transition-all duration-200">
                    Details <RiArrowRightLine />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
