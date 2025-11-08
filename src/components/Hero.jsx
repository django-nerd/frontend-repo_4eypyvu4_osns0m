import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-zinc-950" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1v8gT4rJH3QmA0di/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,255,255,0.12),rgba(0,0,0,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Point Blank: Fierce Online FPS
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Join epic team battles, master your loadout, and dominate the arena in Southeast Asia’s most iconic tactical shooter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-zinc-900 hover:bg-amber-400 transition-colors"
            >
              Play Free Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#news"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Latest News
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
