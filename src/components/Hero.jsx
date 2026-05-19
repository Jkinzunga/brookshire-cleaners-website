import { useState } from 'react';
import Icon from './Icon';
import Logo from './Logo';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="main-content" className="relative min-h-screen flex items-center overflow-hidden bg-ivory pt-20"
             aria-labelledby="hero-heading">
      <div className="orb w-[420px] h-[420px] bg-mist opacity-35 -top-16 -right-16" />
      <div className="orb w-56 h-56 bg-sage opacity-[0.07] bottom-20 -left-10" />
      <div className="noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center min-h-[calc(100vh-80px)] py-16">

          <div>
            <div className="inline-flex items-center gap-3 bg-white border border-cream rounded-full px-4 py-2 mb-8 shadow-card animate-fade-in">
              <div className="flex gap-px">{[...Array(5)].map((_, i) => <Icon key={i} n="star" size={12} cls="star" />)}</div>
              <span className="font-body text-xs text-stone">4.6 on Yelp · Serving Charlotte since 2009</span>
            </div>

            <h1 id="hero-heading"
                className="font-display text-5xl md:text-6xl lg:text-hero text-ink mb-6 animate-fade-up">
              Your clothes,<br />
              <span className="text-sage italic">cared for</span><br />
              like our own.
            </h1>

            <p className="font-body text-stone text-lg leading-[1.8] mb-10 max-w-md animate-fade-up d2">
              Charlotte's neighborhood dry cleaner — expert cleaning, alterations, and wash & fold with the kind of personal attention you only get from a place that's been here over 17 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up d3">
              <a href="tel:+17043930088"
                 className="btn inline-flex items-center justify-center gap-3 bg-sage text-white font-body font-medium text-base px-8 py-4 rounded-full">
                <Icon n="phone" size={17} />Call to Schedule
              </a>
              <a href="#services"
                 className="inline-flex items-center justify-center gap-2 border border-stone/25 text-ink font-body font-medium text-base px-8 py-4 rounded-full hover:border-sage hover:text-sage transition-colors duration-200">
                Explore Services
              </a>
            </div>

            <div className="flex items-stretch gap-0 mt-12 pt-8 border-t border-cream animate-fade-up d4">
              {[
                { v: '17+',  l: 'Years in Charlotte' },
                { v: '4.6★', l: 'Yelp Rating' },
                { v: '48h',  l: 'Avg Turnaround' },
                { v: '20yr', l: 'Longest Customer' },
              ].map(({ v, l }, i) => (
                <div key={l} className="flex-1 text-center relative px-2">
                  {i > 0 && <div className="stat-divider absolute left-0 top-1/2 -translate-y-1/2 h-8" />}
                  <div className="font-display text-xl font-semibold text-ink">{v}</div>
                  <div className="font-body text-xs text-stone mt-1 leading-snug">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-[390px]">

              <div className="animate-float relative rounded-2xl shadow-lift overflow-hidden aspect-[4/5] bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&fm=webp&q=85&fit=crop"
                  srcSet="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&fm=webp&q=80&fit=crop 400w, https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&fm=webp&q=85&fit=crop 700w, https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&fm=webp&q=85&fit=crop 1000w"
                  sizes="(max-width: 1024px) 0px, 390px"
                  alt="Neatly pressed garments on hangers at Brookshire's Cleaners"
                  className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  loading="eager"
                  fetchPriority="high"
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=700&fm=webp&q=80&fit=crop'; }}
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 bg-cream flex items-center justify-center">
                    <Logo height={80} variant="dark" />
                  </div>
                )}
                <div className="absolute inset-0 bg-sage/[0.04] pointer-events-none rounded-2xl" />
              </div>

              <div className="absolute -left-10 bottom-20 bg-white rounded-2xl shadow-lift p-4 w-56 hover-lift">
                <div className="flex gap-px mb-2">{[...Array(5)].map((_, i) => <Icon key={i} n="star" size={11} cls="star" />)}</div>
                <p className="font-body text-xs text-ink leading-relaxed">
                  "I have been a customer for over 20 years and never received anything but excellent service."
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-mist flex items-center justify-center flex-shrink-0">
                    <span className="font-body text-sage text-xs font-semibold">S</span>
                  </div>
                  <span className="font-body text-xs text-stone">Soundra S. · Yelp, Oct 2024</span>
                </div>
              </div>

              <div className="absolute -right-5 top-12 bg-ink text-white rounded-2xl shadow-lift px-4 py-3 text-center hover-lift">
                <div className="font-display text-2xl font-semibold text-sage">48h</div>
                <div className="font-body text-xs text-stone/70 mt-0.5">Turnaround</div>
              </div>

              <div className="absolute -right-3 bottom-10 bg-white rounded-xl shadow-card px-3 py-2 flex items-center gap-2 hover-lift">
                <Icon n="map" size={12} cls="text-sage flex-shrink-0" />
                <span className="font-body text-xs text-stone whitespace-nowrap">3900 Brookshire Blvd, CLT</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in d5 z-10">
        <span className="font-body text-xs text-stone/40 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-stone/20 to-transparent" />
      </div>
    </section>
  );
}
