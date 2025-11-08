import { CalendarDays, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Season 12: New Maps, New Ranks',
    excerpt: 'Explore tactical reworks, ranked updates, and a fresh season pass packed with rewards.',
    date: 'Nov 2025',
    image: 'https://images.unsplash.com/photo-1677295922463-147d7f2f718c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZWFzb24lMjAxMiUzQSUyME5ldyUyME1hcHMlMkMlMjBOZXclMjBSYW5rc3xlbnwwfDB8fHwxNzYyNjM5NjMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Esports Invitational Announced',
    excerpt: 'Top squads compete for regional glory. Qualifiers open next month—assemble your team!',
    date: 'Oct 2025',
    image: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Weapon Balance Patch Notes',
    excerpt: 'Recoil tweaks, time-to-kill adjustments, and utility balance for a fairer fight.',
    date: 'Sep 2025',
    image: 'https://images.unsplash.com/photo-1730578725185-3810188ecf8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWFwb24lMjBCYWxhbmNlJTIwUGF0Y2glMjBOb3Rlc3xlbnwwfDB8fHwxNzYyNjM5NjM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function NewsGrid() {
  return (
    <section id="news" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest News</h2>
            <p className="mt-2 text-zinc-400">Updates, events, and patch notes.</p>
          </div>
          <a href="#" className="hidden md:inline text-amber-400 hover:text-amber-300 font-medium">
            View all
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-44 overflow-hidden">
                <img src={item.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-2 left-2 inline-flex items-center gap-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                  <CalendarDays className="h-3 w-3" />
                  {item.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300">
                  Read more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
