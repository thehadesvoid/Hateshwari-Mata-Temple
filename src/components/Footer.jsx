import { RiFacebookCircleLine, RiInstagramLine, RiYoutubeLine, RiWhatsappLine } from 'react-icons/ri'
import { NAV_LINKS } from '../data'

const SOCIAL = [
  { Icon: RiFacebookCircleLine, label: 'Facebook', href: '#' },
  { Icon: RiInstagramLine, label: 'Instagram', href: '#' },
  { Icon: RiYoutubeLine, label: 'YouTube', href: '#' },
  { Icon: RiWhatsappLine, label: 'WhatsApp', href: '#' },
]

const TIMINGS_FOOTER = [
  ['Morning Aarti', '6:00 AM – 8:00 AM'],
  ['Darshan', '8:00 AM – 12:00 PM'],
  ['Evening Aarti', '4:00 PM – 8:00 PM'],
]

export default function Footer() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-brown text-cream" role="contentinfo">
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-gold text-3xl" aria-hidden="true">🕉</span>
              <div>
                <p className="font-cinzel text-cream text-sm tracking-widest leading-tight">Mata Hateshwari</p>
                <p className="font-cinzel text-gold/70 text-xs tracking-[0.3em] uppercase">Hatkoti Mandir</p>
              </div>
            </div>
            <p className="text-cream/50 text-sm font-poppins leading-relaxed mb-2">
              Ancient Shakti Peetha on the banks of River Pabbar, Hatkoti, Jubbal, Himachal Pradesh.
            </p>
            <p className="text-gold/50 text-xs font-cinzel tracking-widest mb-6">Est. 6th–9th Century CE</p>
            <div className="flex gap-4">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a key={label} href={href} className="text-cream/40 hover:text-gold transition-colors duration-200 text-xl" aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-cream/50 text-sm font-poppins hover:text-gold transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase mb-5">Darshan Timings</h3>
            <ul className="space-y-3">
              {TIMINGS_FOOTER.map(([period, time]) => (
                <li key={period} className="flex justify-between gap-4">
                  <span className="text-cream/50 text-xs font-poppins">{period}</span>
                  <span className="text-cream/80 text-xs font-poppins">{time}</span>
                </li>
              ))}
              <li className="pt-2 border-t border-gold/15">
                <p className="text-gold/60 text-xs font-poppins">Navratri: 5:00 AM – 10:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-cinzel text-xs tracking-[0.3em] text-gold uppercase mb-5">Location</h3>
            <address className="not-italic space-y-3">
              <p className="text-cream/50 text-sm font-poppins">
                Hatkoti Village, Jubbal Tehsil,<br />
                Shimla District, H.P. – 171 207
              </p>
              <p className="text-cream/50 text-xs font-poppins">~104 km from Shimla · 14 km from Rohru</p>
              <p>
                <a href="tel:+911234567890" className="text-cream/50 text-sm font-poppins hover:text-gold transition-colors">
                  +91 XXXXX XXXXX
                </a>
              </p>
              <p>
                <a href="mailto:info@hateshwarimandir.org" className="text-cream/50 text-sm font-poppins hover:text-gold transition-colors">
                  info@hateshwarimandir.org
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 text-xs font-poppins">
            © {new Date().getFullYear()} Hateshwari Mata Mandir Trust, Hatkoti. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs font-poppins">Jai Mata Di 🙏</p>
        </div>
      </div>
    </footer>
  )
}
