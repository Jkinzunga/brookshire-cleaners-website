import Icon from './Icon';

const features = [
  { icon: 'shield',  title: 'Quality You Can See',    body: "If it doesn't look right, tell us. We'll make it right — every time, no questions asked." },
  { icon: 'leaf',    title: 'Trusted Since 2009',     body: 'Cindy and the team have been part of this community for over 17 years. Faces you recognize, service you can count on.' },
  { icon: 'clock',   title: '48-Hour Turnaround',     body: 'Standard turnaround is 2 business days. Ask about rush service for last-minute needs.' },
  { icon: 'sparkle', title: 'New: Sneaker Cleaning',  body: "Fresh kicks, back to life. Our new sneaker cleaning service handles what regular laundry can't." },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-ink text-white relative overflow-hidden" aria-labelledby="why-heading">
      <div className="orb w-[480px] h-[480px] bg-sage opacity-[0.08] -top-24 -right-24" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="reveal-l">
            <span className="font-body text-sage text-xs font-medium tracking-widest uppercase mb-4 block">Why Brookshire</span>
            <h2 id="why-heading" className="font-display text-4xl md:text-5xl text-white mb-6">
              We treat your wardrobe<br /><span className="text-sage italic">like an investment.</span>
            </h2>
            <p className="font-body text-stone text-base leading-[1.8] mb-8 max-w-sm">
              Charlotte has no shortage of dry cleaners. What sets us apart is consistency — every garment receives the same care whether it's a $40 shirt or a $2,000 suit. Our customers notice. That's why they stay for 20 years.
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                'Locally owned and operated since 2009 — not a franchise',
                'Every garment individually inspected before and after cleaning',
                'Expert alterations done in-house by our own tailor',
                'New sneaker cleaning service — one of the few in Charlotte',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-sage rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon n="check" size={11} cls="text-white" />
                  </div>
                  <span className="font-body text-sm text-white/80 leading-relaxed">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-r grid grid-cols-2 gap-4">
            {features.map(({ icon, title, body }) => (
              <div key={title} className="scale-card hover-lift bg-white/[0.05] border border-white/[0.08] rounded-[20px] p-6">
                <div className="w-10 h-10 bg-sage/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon n={icon} size={18} cls="text-sage" />
                </div>
                <h3 className="font-display text-[0.95rem] text-white mb-1.5">{title}</h3>
                <p className="font-body text-stone text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
