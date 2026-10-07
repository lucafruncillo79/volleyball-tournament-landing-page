import Image from 'next/image'
import { ArrowRight, CalendarDays, MapPin, Users } from 'lucide-react'

const facts = [
  { icon: CalendarDays, label: 'Oct 24–25, 2026' },
  { icon: MapPin, label: 'Mission Beach, San Diego' },
  { icon: Users, label: '32 teams · 2v2' },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh items-end overflow-hidden pt-28">
      {/* 
        Ottimizzazione 1: SEO e Qualità
        Aggiunto alt text descrittivo per l'indicizzazione e quality={90} per la resa su schermi Retina 
      */}
      <Image
        src="/images/hero-volleyball.png"
        alt="Amateur beach volleyball players jumping at sunset during a tournament in San Diego"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium tracking-widest text-primary uppercase">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          Registration open · 9 spots left
        </p>
        
        {/* Ottimizzazione 2: Gerarchia e accessibilità */}
        <h1 className="font-display text-6xl leading-[0.9] tracking-tight text-balance uppercase sm:text-7xl md:text-8xl lg:text-9xl">
          Sand. Sweat.
          <br />
          <span className="text-primary">Sunset</span> Spikes.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
          The Sunset Spike Open is a weekend of 2v2 amateur beach volleyball for every level — from
          weekend warriors to backyard legends. Grab a partner and claim your court.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#register"
            aria-label="Jump to registration form"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
          >
            Register Now
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#rules"
            aria-label="Read tournament rules"
            className="inline-flex items-center justify-center rounded-full border border-border bg-secondary/60 px-7 py-3.5 font-semibold backdrop-blur transition-all hover:bg-secondary active:scale-95"
          >
            See the rules
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
          {facts.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm text-foreground/90 font-medium">
              <Icon className="size-4 text-primary" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}