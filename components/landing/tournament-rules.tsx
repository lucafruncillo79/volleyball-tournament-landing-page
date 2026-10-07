import { CalendarDays, MapPin, Trophy, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const rules = [
  {
    icon: Users,
    title: 'Teams',
    items: [
      '2 players per team, plus 1 optional sub',
      'Co-ed and Open divisions',
      'All players must be 18+ and non-pro',
      'Max 32 teams — first come, first served',
    ],
  },
  {
    icon: CalendarDays,
    title: 'Dates',
    items: [
      'Sat, Oct 24 — Pool play, 8:00 AM to 5:00 PM',
      'Sun, Oct 25 — Playoffs from 9:00 AM',
      'Finals at sunset, ~6:00 PM',
      'Check-in closes 30 min before first match',
    ],
  },
  {
    icon: MapPin,
    title: 'Location',
    items: [
      'Mission Beach, San Diego, CA',
      '8 courts north of Belmont Park',
      'Free parking at the Bonita Cove lot',
      'Showers and restrooms on site',
    ],
  },
  {
    icon: Trophy,
    title: 'Format',
    items: [
      'Pool play: 1 set to 21, win by 2',
      'Playoffs: best of 3 (21, 21, 15)',
      'Rally scoring, side switch every 7 points',
      'Self-officiated — play fair, call your own',
    ],
  },
]

export function TournamentRules() {
  return (
    <section id="rules" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="01 — The Rules"
          title="Know before you dig"
          description="Simple rules, good vibes. Here's everything you need to know before stepping on the sand."
        />

        {/* Ottimizzazione: Aggiunta un'animazione sottile al passaggio del mouse */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rules.map(({ icon: Icon, title, items }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-2xl tracking-wide uppercase">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}