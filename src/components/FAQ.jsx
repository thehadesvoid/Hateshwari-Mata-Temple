import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiAddLine, RiSubtractLine } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'
import { FAQS } from '../data'

function AccordionItem({ item, isOpen, onToggle, index }) {
  return (
    <div className={`border-b border-gold/20 transition-colors duration-300 ${isOpen ? 'bg-cream' : ''}`}>
      <button
        className="w-full flex items-center justify-between py-6 px-0 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
        id={`faq-btn-${index}`}
      >
        <span
          className={`font-cinzel text-sm md:text-base tracking-wide transition-colors duration-200 pr-4 ${
            isOpen ? 'text-gold' : 'text-brown group-hover:text-gold'
          }`}
        >
          {item.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 border flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'border-gold bg-gold text-brown' : 'border-gold/40 text-gold'
          }`}
          aria-hidden="true"
        >
          {isOpen ? <RiSubtractLine className="text-sm" /> : <RiAddLine className="text-sm" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-${index}`}
            role="region"
            aria-labelledby={`faq-btn-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pb-6 pr-10">
              <p className="text-brown-mid leading-relaxed text-sm font-poppins">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [ref, inView] = useInView()
  const [openIdx, setOpenIdx] = useState(0)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className="section-pad bg-parchment" aria-label="Frequently asked questions" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Frequently <span className="gold-text">Asked</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          {FAQS.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
