import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine, RiArrowLeftLine, RiArrowRightLine, RiZoomInLine } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'
import { GALLERY_IMAGES } from '../data'

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="lightbox-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10 transition-colors"
          aria-label="Close lightbox"
        >
          <RiCloseLine />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-6 text-white/70 hover:text-gold text-3xl z-10 transition-colors"
          aria-label="Previous image"
        >
          <RiArrowLeftLine />
        </button>

        {/* Image */}
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={images[index].src.replace('w=800', 'w=1200')}
          alt={images[index].alt}
          className="max-w-[90vw] max-h-[85vh] object-contain shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-6 text-white/70 hover:text-gold text-3xl z-10 transition-colors"
          aria-label="Next image"
        >
          <RiArrowRightLine />
        </button>

        {/* Caption */}
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-cinzel text-xs tracking-widest text-white/60 uppercase">
          {images[index].alt}
        </p>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [ref, inView] = useInView()
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const openLightbox = (i) => setLightboxIdx(i)
  const closeLightbox = () => setLightboxIdx(null)
  const prevImage = () => setLightboxIdx((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
  const nextImage = () => setLightboxIdx((i) => (i + 1) % GALLERY_IMAGES.length)

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (lightboxIdx === null) return
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <section
      id="gallery"
      className="section-pad bg-cream"
      aria-label="Temple gallery"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle"
          >
            Sacred Moments
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Temple <span className="gold-text">Gallery</span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(i)}
              role="button"
              aria-label={`View: ${img.alt}`}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/50 transition-all duration-300 flex items-center justify-center">
                <RiZoomInLine className="text-gold text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          index={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
