import Icon from './Icon';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
          <span className="font-body text-sage text-xs font-medium tracking-widest uppercase mb-3 block">What We Do</span>
          <h2 id="services-heading" className="font-display text-4xl md:text-5xl text-ink">
            Every garment.<br />Every occasion.
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="scale-card bg-ink text-white rounded-2xl p-8 md:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center mb-6">
                <Icon n="hanger" size={22} cls="text-white" />
              </div>
              <h3 className="font-display text-2xl mb-3">Dry Cleaning</h3>
              <p className="font-body text-stone text-sm leading-relaxed">
                Professional cleaning for suits, gowns, formalwear, comforters, curtains, and table cloths. Every garment individually inspected.
              </p>
              <ul className="mt-5 space-y-2">
                {['Suits & dress shirts', 'Wedding gowns', 'Comforters & drapes', 'Curtains & table cloths', 'Leather & specialty'].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-xs text-stone/75">
                    <div className="w-1 h-1 rounded-full bg-sage flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-5 border-t border-white/10">
              <div className="font-body text-xs text-stone/50 uppercase tracking-widest mb-1">Starting at</div>
              <div className="font-display text-2xl text-white">$6 <span className="font-body font-normal text-sm text-stone/50">/ garment</span></div>
            </div>
          </div>

          <div className="scale-card bg-white rounded-2xl p-6 shadow-card">
            <div className="w-12 h-12 bg-mist rounded-xl flex items-center justify-center mb-5">
              <Icon n="wash" size={20} cls="text-sage" />
            </div>
            <h3 className="font-display text-xl text-ink mb-3">Wash & Fold</h3>
            <p className="font-body text-stone text-sm leading-relaxed">
              Bring in your everyday laundry. Pick it up clean, fresh, and neatly folded — sorted and ready to put away.
            </p>
            <div className="mt-4 font-body text-xs text-sage font-medium">Ready in 24 hours.</div>
          </div>

          <div className="scale-card bg-sage text-white rounded-2xl p-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Icon n="scissors" size={20} cls="text-white" />
            </div>
            <h3 className="font-display text-xl mb-3">Alterations</h3>
            <p className="font-body text-white/80 text-sm leading-relaxed">
              Hems, tapers, letting out or taking in — our in-house tailor fits clothes to your body, not the other way around.
            </p>
            <div className="mt-4 font-body text-xs text-white/60 font-medium">Same-week turnaround available.</div>
          </div>

          <div className="scale-card bg-white rounded-2xl p-6 shadow-card md:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              <div className="w-12 h-12 bg-sage/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon n="shoe" size={20} cls="text-sage" />
              </div>
              <div>
                <h3 className="font-display text-xl text-ink mb-3">Sneaker Cleaning & Specialty Items</h3>
                <p className="font-body text-stone text-sm leading-relaxed">
                  Just started our new sneaker cleaning service — plus baseball caps, stuffed animals, and specialty items that need an expert's touch. If you're not sure we can clean it, just ask.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Sneakers', 'Baseball caps', 'Stuffed animals', 'Table cloths', 'Wholesale & retail'].map((tag) => (
                    <span key={tag} className="font-body text-xs text-sage bg-sage/10 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
