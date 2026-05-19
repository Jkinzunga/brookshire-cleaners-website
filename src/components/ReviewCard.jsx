import Icon from './Icon';

export default function ReviewCard({ r }) {
  return (
    <div className="scale-card bg-white rounded-2xl p-6 shadow-card relative">
      <div className="flex gap-px mb-4">{[...Array(5)].map((_, i) => <Icon key={i} n="star" size={11} cls="star" />)}</div>
      <p className="font-body text-sm text-ink leading-relaxed mb-5">"{r.text}"</p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
            <span className="font-body text-sage text-xs font-semibold">{r.initial}</span>
          </div>
          <div>
            <div className="font-body text-sm font-medium text-ink">{r.name}</div>
            <div className="font-body text-xs text-stone/60">{r.location}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-body text-[10px] font-semibold text-red-400">yelp</div>
          <div className="font-body text-[10px] text-stone/50">{r.date}</div>
        </div>
      </div>
    </div>
  );
}
