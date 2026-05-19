import Icon from './Icon';
import Logo from './Logo';

export default function VisitUs() {
  return (
    <section id="visit-us" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal bg-white rounded-[22px] shadow-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center"
                 style={{ background: 'linear-gradient(145deg,#4A7C6F 0%,#1C1C1E 100%)' }}>
              <div className="noise" />
              <div className="relative z-10 text-center p-10">
                <Logo height={100} variant="white" />
                <p className="font-body text-white/30 text-xs tracking-widest uppercase mt-6">
                  Charlotte's neighborhood cleaners since 2009
                </p>
              </div>
            </div>

            <div className="p-10 flex flex-col justify-center">
              <span className="font-body text-sage text-xs font-medium tracking-widest uppercase mb-4 block">Find Us</span>
              <h2 className="font-display text-3xl text-ink mb-4">
                Come see us in<br />West Charlotte.
              </h2>
              <p className="font-body text-stone text-sm leading-[1.8] mb-6">
                We're right on Brookshire Blvd — easy to find, easy to park. Drop off your garments, tell us what you need, and we'll handle the rest.
              </p>

              <div className="space-y-3 mb-6">
                <a href="https://maps.google.com/?q=3900+Brookshire+Blvd+Charlotte+NC+28216"
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-start gap-3 font-body text-sm text-stone hover:text-sage transition-colors">
                  <Icon n="map" size={15} cls="text-sage flex-shrink-0 mt-0.5" />
                  3900 Brookshire Blvd, Charlotte, NC 28216
                </a>
                <div className="flex items-start gap-3 font-body text-sm text-stone">
                  <Icon n="clock" size={15} cls="text-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <div>Tue–Fri: 7:00am – 5:00pm</div>
                    <div>Saturday: 9:00am – 3:00pm</div>
                    <div className="text-stone/50 text-xs mt-0.5">Closed Sunday & Monday</div>
                  </div>
                </div>
                <a href="tel:+17043930088"
                   className="flex items-center gap-3 font-body text-sm text-sage hover:text-ink transition-colors">
                  <Icon n="phone" size={15} cls="flex-shrink-0" />
                  (704) 393-0088
                </a>
                <a href="mailto:BrookshireCleanersCLT@gmail.com"
                   className="flex items-center gap-3 font-body text-sm text-sage hover:text-ink transition-colors break-all">
                  <Icon n="mail" size={15} cls="flex-shrink-0" />
                  BrookshireCleanersCLT@gmail.com
                </a>
              </div>

              <a href="tel:+17043930088"
                 className="btn inline-flex items-center justify-center gap-2.5 bg-sage text-white font-body font-medium text-sm px-7 py-3.5 rounded-full self-start">
                <Icon n="phone" size={15} />Call to Schedule
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
