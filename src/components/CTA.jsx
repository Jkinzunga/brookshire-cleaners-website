import Icon from './Icon';
import Logo from './Logo';

export default function CTA() {
  return (
    <section id="contact" className="py-28 bg-ink relative overflow-hidden">
      <div className="orb w-80 h-80 bg-sage opacity-[0.12] top-0 left-1/3 -translate-y-1/2" />
      <div className="orb w-56 h-56 bg-sage opacity-[0.08] bottom-0 right-1/4 translate-y-1/3" />
      <div className="noise" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <div className="flex justify-center mb-8">
            <Logo height={70} variant="white" />
          </div>

          <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-[1.05]">
            Your clothes deserve<br />
            <span className="text-sage italic">better than a chain.</span>
          </h2>

          <p className="font-body text-stone text-lg leading-[1.8] mb-10 max-w-lg mx-auto">
            Come see why Charlotte neighbors have been trusting Brookshire's with their best garments for over 17 years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:+17043930088"
               className="btn inline-flex items-center justify-center gap-3 bg-sage text-white font-body font-semibold text-lg px-12 py-5 rounded-full">
              <Icon n="phone" size={20} />Call (704) 393-0088
            </a>
            <a href="mailto:BrookshireCleanersCLT@gmail.com"
               className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/80 font-body font-medium text-base px-10 py-5 rounded-full hover:border-sage hover:text-sage transition-colors duration-200">
              <Icon n="mail" size={17} />Email Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Expert dry cleaning', 'Alterations in-house', 'Sneaker cleaning', 'Trusted since 2009'].map((t) => (
              <div key={t} className="flex items-center gap-2 font-body text-sm text-stone/70">
                <Icon n="check" size={13} cls="text-sage" />{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
