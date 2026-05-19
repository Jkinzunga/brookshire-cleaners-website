import Icon from './Icon';
import ReviewCard from './ReviewCard';
import { featured, cards } from '../data/reviews';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-ivory" aria-labelledby="reviews-heading">
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-sage/10 rounded-full px-4 py-1.5 mb-4">
              <Icon n="star" size={13} cls="text-sage" />
              <span className="font-body text-sage text-sm font-medium">Verified Yelp Reviews</span>
            </div>
            <h2 id="reviews-heading" className="font-display text-4xl md:text-5xl text-ink">
              What Charlotte<br /><em>actually says.</em>
            </h2>
          </div>
          <div className="flex gap-8 pb-1">
            {[{ v: '4.6★', l: 'Yelp Rating' }, { v: '9', l: 'Reviews' }, { v: '20+', l: 'Yrs serving CLT' }].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="font-display text-2xl text-sage">{v}</div>
                <div className="font-body text-xs text-stone mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mb-5">
          <div className="scale-card bg-ink text-white rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="big-quote" aria-hidden>"</div>
            <div className="relative z-10 max-w-3xl pt-8">
              <p className="font-display text-xl md:text-2xl leading-relaxed text-white/90 mb-8">
                "{featured.text}"
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                    <span className="font-body font-semibold text-white">{featured.initial}</span>
                  </div>
                  <div>
                    <div className="font-body font-medium text-white text-sm">{featured.name}</div>
                    <div className="font-body text-stone/60 text-xs">{featured.location} · {featured.date}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex gap-px">{[...Array(5)].map((_, i) => <Icon key={i} n="star" size={11} cls="star" />)}</div>
                  <span className="font-body text-xs font-semibold text-red-400">yelp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cards.slice(0, 3).map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(3).map((r) => <ReviewCard key={r.name} r={r} />)}
        </div>

        <div className="reveal text-center mt-10">
          <a href="https://www.yelp.com/biz/brookshires-cleaners-charlotte"
             target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 border border-stone/25 text-stone hover:text-sage hover:border-sage font-body text-sm px-6 py-3 rounded-full transition-colors duration-200">
            Read all reviews on Yelp <Icon n="arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
