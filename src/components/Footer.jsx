import Icon from './Icon';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="md:col-span-2">
            <Logo height={54} variant="white" />
            <p className="font-body text-stone text-sm leading-[1.8] max-w-xs mt-5 mb-5">
              Charlotte's trusted neighborhood dry cleaner. Locally owned, expertly run since 2009. Dry cleaning, wash & fold, alterations, sneaker cleaning.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-px">{[...Array(5)].map((_, i) => <Icon key={i} n="star" size={13} cls="star" />)}</div>
              <span className="font-body text-stone/50 text-xs ml-1">4.6 · Yelp</span>
            </div>
          </div>

          <div>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {['Dry Cleaning', 'Wash & Fold', 'Alterations', 'Sneaker Cleaning', 'Wedding Gowns'].map((s) => (
                <li key={s}>
                  <a href="#services" className="ulink font-body text-stone text-sm hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-medium text-white text-xs uppercase tracking-widest mb-5">Hours & Contact</h4>
            <div className="space-y-4">
              <a href="tel:+17043930088"
                 className="flex items-center gap-2 font-body text-stone text-sm hover:text-white transition-colors">
                <Icon n="phone" size={13} />(704) 393-0088
              </a>
              <a href="mailto:BrookshireCleanersCLT@gmail.com"
                 className="flex items-start gap-2 font-body text-stone text-xs hover:text-white transition-colors break-all">
                <Icon n="mail" size={13} cls="flex-shrink-0 mt-0.5" />BrookshireCleanersCLT@gmail.com
              </a>
              <div className="flex items-start gap-2 font-body text-stone text-sm">
                <Icon n="map" size={13} cls="flex-shrink-0 mt-0.5" />
                <span>3900 Brookshire Blvd<br />Charlotte, NC 28216</span>
              </div>
              <div className="flex items-start gap-2 font-body text-stone text-sm">
                <Icon n="clock" size={13} cls="flex-shrink-0 mt-0.5" />
                <span>Tue–Fri 7am–5pm<br />Sat 9am–3pm<br />
                  <span className="text-stone/40 text-xs">Closed Sun & Mon</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-stone/40 text-xs">
            © {new Date().getFullYear()} Brookshire's Cleaners · 3900 Brookshire Blvd, Charlotte NC 28216
          </p>
          <div className="flex gap-5">
            <a href="/privacy.html" className="font-body text-stone/35 text-xs hover:text-stone/60 transition-colors">Privacy</a>
            <a href="/terms.html"   className="font-body text-stone/35 text-xs hover:text-stone/60 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
