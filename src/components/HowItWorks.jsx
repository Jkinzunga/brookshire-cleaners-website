import Icon from './Icon';
import { steps } from '../data/steps';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-ivory" aria-labelledby="how-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <span className="font-body text-sage text-xs font-medium tracking-widest uppercase mb-3 block">The Process</span>
          <h2 id="how-heading" className="font-display text-4xl md:text-5xl text-ink">
            Simple drop-off.<br /><em>Exceptional results.</em>
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ n, icon, color, title, body }) => (
            <div key={n} className="scale-card relative bg-white rounded-2xl p-6 shadow-card overflow-hidden">
              <div className="step-num" aria-hidden>{n}</div>
              <div className="relative z-10">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon n={icon} size={20} cls="text-white" />
                </div>
                <h3 className="font-display text-lg text-ink mb-3">{title}</h3>
                <p className="font-body text-stone text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a href="tel:+17043930088"
             className="btn inline-flex items-center gap-3 bg-sage text-white font-body font-medium text-base px-10 py-4 rounded-full">
            <Icon n="phone" size={17} />Call (704) 393-0088
          </a>
          <p className="font-body text-stone/60 text-sm mt-3">
            Tue–Fri 7:00am–5:00pm · Sat 9:00am–3:00pm
          </p>
        </div>
      </div>
    </section>
  );
}
