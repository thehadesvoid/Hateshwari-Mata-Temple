import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiHeartLine, RiQrCodeLine, RiBankCardLine } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'
import { DONATION_AMOUNTS } from '../data'

export default function Donation() {
  const [ref, inView] = useInView()
  const [selected, setSelected] = useState(501)
  const [custom, setCustom] = useState('')

  const finalAmount = custom || selected

  return (
    <section
      id="donate"
      className="section-pad bg-parchment relative overflow-hidden"
      aria-label="Donation section"
    >
      {/* Decorative OM in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] text-brown/[0.03] font-cinzel select-none pointer-events-none"
        aria-hidden="true"
      >
        ॐ
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle"
          >
            Seva & Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Make a <span className="gold-text">Donation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brown-mid mt-4 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Your generous contribution sustains our daily rituals, temple
            maintenance, and charitable activities. All donations are eligible
            for tax benefit under Section 80G.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Amount selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-cinzel text-sm tracking-widest text-brown-mid uppercase mb-4">
                Select Amount
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {DONATION_AMOUNTS.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setSelected(amt); setCustom('') }}
                    className={`font-cinzel text-sm py-3 px-2 border transition-all duration-200 ${
                      selected === amt && !custom
                        ? 'border-gold bg-brown text-gold'
                        : 'border-gold/30 text-brown hover:border-gold/60'
                    }`}
                    aria-pressed={selected === amt && !custom}
                  >
                    ₹ {amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="custom-amount"
                className="font-cinzel text-sm tracking-widest text-brown-mid uppercase block mb-2"
              >
                Or Enter Custom Amount
              </label>
              <div className="flex border border-gold/30 focus-within:border-gold transition-colors">
                <span className="font-cinzel text-brown px-4 flex items-center border-r border-gold/30 bg-beige">
                  ₹
                </span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                  className="flex-1 px-4 py-3 font-poppins text-brown bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            {/* Summary */}
            {finalAmount > 0 && (
              <div className="border border-gold/30 p-4 bg-cream/50">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm text-brown-mid">Donation Amount</span>
                  <span className="font-cinzel text-lg text-brown">
                    ₹ {Number(finalAmount).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-poppins text-xs text-brown-mid">Tax Benefit (80G)</span>
                  <span className="font-poppins text-xs text-gold">Applicable</span>
                </div>
              </div>
            )}

            {/* CTA - Coming Soon */}
            <button
              className="w-full py-4 font-cinzel tracking-widest text-sm border-2 border-gold/40 text-brown-mid cursor-not-allowed relative overflow-hidden group"
              disabled
              aria-disabled="true"
              aria-label="Online payment coming soon"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <RiHeartLine className="text-lg" />
                <span>Online Payment — Coming Soon</span>
              </span>
            </button>

            <p className="text-xs text-brown-mid/60 text-center font-poppins">
              Payment gateway integration coming soon. Use QR or UPI options.
            </p>
          </motion.div>

          {/* Right: QR + UPI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* QR */}
            <div className="border border-gold/30 bg-cream p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <RiQrCodeLine className="text-gold text-lg" />
                <span className="font-cinzel text-xs tracking-widest text-brown-mid uppercase">
                  Scan & Pay
                </span>
              </div>
              <div className="w-48 h-48 mx-auto border-2 border-dashed border-gold/40 flex items-center justify-center bg-white/50 mb-4">
                <div className="text-center">
                  <RiQrCodeLine className="text-gold/40 text-6xl mx-auto mb-2" />
                  <p className="text-xs text-brown/40 font-poppins">QR Code</p>
                  <p className="text-xs text-brown/40 font-poppins">Coming Soon</p>
                </div>
              </div>
              <p className="font-cinzel text-xs tracking-widest text-gold/70 uppercase">
                Shri Mahalakshmi Temple Trust
              </p>
            </div>

            {/* UPI */}
            <div className="border border-gold/30 bg-cream p-6">
              <div className="flex items-center gap-2 mb-4">
                <RiBankCardLine className="text-gold" />
                <span className="font-cinzel text-xs tracking-widest text-brown-mid uppercase">
                  UPI Payment
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-beige border border-gold/20">
                <span className="font-poppins text-brown text-sm flex-1">
                  mahalakshmi@ybl
                </span>
                <button
                  onClick={() => navigator.clipboard?.writeText('mahalakshmi@ybl')}
                  className="text-xs font-cinzel text-gold tracking-widest uppercase hover:underline"
                  aria-label="Copy UPI ID"
                >
                  Copy
                </button>
              </div>
              <p className="text-xs text-brown-mid/60 mt-3 font-poppins leading-relaxed">
                Open any UPI app (GPay, PhonePe, Paytm) and send to the above UPI ID.
              </p>
            </div>

            {/* Bank details */}
            <div className="border border-gold/20 p-5 bg-beige/50 space-y-2">
              <p className="font-cinzel text-xs tracking-widest text-gold uppercase mb-3">
                Bank Transfer
              </p>
              {[
                ['Account Name', 'Shri Mahalakshmi Temple Trust'],
                ['Account No.', 'XXXX XXXX 1234'],
                ['IFSC', 'SBIN0001234'],
                ['Bank', 'State Bank of India'],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between text-xs font-poppins">
                  <span className="text-brown-mid">{label}</span>
                  <span className="text-brown font-medium">{val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
