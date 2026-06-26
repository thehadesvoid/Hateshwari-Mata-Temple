import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneLine, RiBusLine } from 'react-icons/ri'
import { useInView } from '../hooks/useInView'

const INFO = [
  { icon: RiMapPin2Line, label: 'Address', value: 'Hatkoti Village, Jubbal Tehsil\nShimla District, H.P. – 171 207' },
  { icon: RiPhoneLine, label: 'Phone', value: '+91 XXXXX XXXXX\nTemple Trust Office' },
  { icon: RiMailLine, label: 'Email', value: 'info@hateshwarimandir.org' },
  { icon: RiBusLine, label: 'How to Reach', value: '~104 km from Shimla\n14 km from Rohru on Shimla–Rohru road' },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="section-pad bg-cream" aria-label="Contact information">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-subtitle">
            Plan Your Yatra
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Visit & <span className="gold-text">Contact</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {INFO.map((item) => (
                <div key={item.label} className="flex gap-4 p-5 border border-gold/20 bg-parchment">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="text-gold text-lg" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-cinzel text-xs tracking-widest text-gold uppercase mb-1">{item.label}</p>
                    {item.value.split('\n').map((line, i) => (
                      <p key={i} className="text-brown-mid text-sm font-poppins">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-64 border border-gold/20 overflow-hidden bg-beige" aria-label="Hatkoti temple location map">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brown-mid">
                <RiMapPin2Line className="text-4xl text-gold/40" aria-hidden="true" />
                <p className="font-cinzel text-xs tracking-widest uppercase text-brown-mid/60">Hatkoti, Jubbal</p>
                <p className="font-poppins text-xs text-brown-mid/40">Shimla District, Himachal Pradesh</p>
                <p className="font-poppins text-xs text-gold/40">Google Maps embed · River Pabbar Valley</p>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="#C9A84C" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`v${i}`} x1={`${(i + 1) * 8.33}%`} y1="0" x2={`${(i + 1) * 8.33}%`} y2="100%" stroke="#C9A84C" strokeWidth="0.5" />
                ))}
              </svg>
            </div>

            {/* Travel note */}
            <div className="border-l-2 border-gold pl-4 text-sm text-brown-mid font-poppins leading-relaxed">
              <strong className="font-cinzel text-gold text-xs tracking-widest uppercase block mb-1">Getting Here</strong>
              HRTC buses run from Shimla to Rohru. From Rohru, take a local taxi or bus (14 km) to Hatkoti. 
              The temple is on the Shimla–Rohru highway, ~11 km before Rohru. Dharamshala accommodation is 
              available at the temple premises.
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h3 className="font-cinzel text-xl text-brown tracking-wide mb-6">Send a Message</h3>
              {[
                { name: 'name', label: 'Full Name', type: 'text', required: true },
                { name: 'email', label: 'Email Address', type: 'email', required: true },
                { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block font-cinzel text-xs tracking-widest text-brown-mid uppercase mb-2">
                    {field.label}{field.required && <span className="text-gold ml-1">*</span>}
                  </label>
                  <input id={field.name} name={field.name} type={field.type} required={field.required} value={form[field.name]} onChange={handleChange}
                    className="w-full border border-gold/30 bg-parchment px-4 py-3 text-brown font-poppins text-sm outline-none focus:border-gold transition-colors duration-200" />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block font-cinzel text-xs tracking-widest text-brown-mid uppercase mb-2">
                  Message <span className="text-gold">*</span>
                </label>
                <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                  className="w-full border border-gold/30 bg-parchment px-4 py-3 text-brown font-poppins text-sm outline-none focus:border-gold transition-colors duration-200 resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center" aria-label="Send your message">
                <RiSendPlaneLine />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
              {submitted && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className="text-gold text-center text-sm font-poppins">
                  Thank you! Jai Mata Di 🙏 We will respond within 24 hours.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
