import { motion, AnimatePresence } from 'framer-motion'
import { RiArrowUpLine } from 'react-icons/ri'
import { useScrolled } from '../hooks/useScrolled'

export default function ScrollToTop() {
  const visible = useScrolled(400)

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-11 h-11 border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-brown transition-all duration-300 shadow-gold"
          style={{ background: 'rgba(44,24,16,0.9)' }}
          aria-label="Scroll to top"
        >
          <RiArrowUpLine className="text-lg" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
