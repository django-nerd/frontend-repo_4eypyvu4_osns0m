import { Download, MonitorSmartphone, Check } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-600 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_50%_0%,rgba(255,255,255,0.35),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900">Download Point Blank</h2>
            <p className="mt-3 text-zinc-900/80">
              Get the game client and jump straight into fast-paced tactical combat. Optimized for low-latency play in SEA.
            </p>
            <ul className="mt-6 space-y-2 text-zinc-900/90">
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Anti-cheat enabled</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Seamless matchmaking</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4" /> Frequent balance updates</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-3 font-semibold text-white shadow hover:bg-zinc-800">
                <Download className="h-4 w-4" />
                Download for Windows
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-zinc-900/20 bg-white/30 px-5 py-3 font-semibold text-zinc-900 backdrop-blur hover:bg-white/50">
                <MonitorSmartphone className="h-4 w-4" />
                System Requirements
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/40 bg-white/40 p-2 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1932&auto=format&fit=crop"
                alt="Game preview"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-6 hidden h-24 w-24 rounded-full bg-white/40 blur-2xl md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
