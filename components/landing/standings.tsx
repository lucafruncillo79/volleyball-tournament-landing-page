import { SectionHeading } from './section-heading'

const standings = [
  { team: 'Dig Dynasty', players: 'M. Reyes / J. Park', w: 4, l: 0, diff: '+38' },
  { team: 'Sandy Cheeks', players: 'A. Lowe / T. Kim', w: 3, l: 1, diff: '+21' },
  { team: 'Block Party', players: 'D. Shah / R. Cole', w: 3, l: 1, diff: '+14' },
  { team: 'Net Gains', players: 'S. Ortiz / L. Baker', w: 2, l: 2, diff: '+3' },
  { team: 'Ace Ventura', players: 'K. Nguyen / P. Ross', w: 1, l: 3, diff: '-19' },
  { team: 'Setters Gonna Set', players: 'E. Hall / B. Diaz', w: 0, l: 4, diff: '-57' },
]

const schedule = [
  { time: '8:00 AM', court: 'Court 1', match: 'Dig Dynasty vs Net Gains', status: 'Final' },
  { time: '8:45 AM', court: 'Court 2', match: 'Sandy Cheeks vs Ace Ventura', status: 'Final' },
  { time: '9:30 AM', court: 'Court 1', match: 'Block Party vs Setters Gonna Set', status: 'Live' },
  { time: '10:15 AM', court: 'Court 3', match: 'Dig Dynasty vs Sandy Cheeks', status: 'Upcoming' },
  { time: '11:00 AM', court: 'Court 2', match: 'Net Gains vs Block Party', status: 'Upcoming' },
]

const statusStyles: Record<string, string> = {
  Final: 'bg-secondary text-muted-foreground',
  Live: 'bg-primary/15 text-primary animate-pulse', // Ottimizzazione: animazione live
  Upcoming: 'bg-accent/15 text-accent',
}

export function Standings() {
  return (
    <section id="standings" className="scroll-mt-16 border-y border-border bg-card/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="02 — Standings & Schedule"
          title="Who's heating up"
          description="Open Division · Pool A. Standings update after every match on tournament day."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* Tabella delle classifiche */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card lg:col-span-3 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Pool A standings</caption>
                <thead className="border-b border-border bg-muted/30 text-xs tracking-wider text-muted-foreground uppercase">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-medium">#</th>
                    <th scope="col" className="px-5 py-4 font-medium">Team</th>
                    <th scope="col" className="px-3 py-4 text-center font-medium">W</th>
                    <th scope="col" className="px-3 py-4 text-center font-medium">L</th>
                    <th scope="col" className="px-5 py-4 text-right font-medium">
                      <abbr title="Point differential" className="no-underline">+/-</abbr>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {standings.map((row, index) => (
                    <tr key={row.team} className="transition-colors hover:bg-secondary/50">
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex size-7 items-center justify-center rounded-full font-display text-sm ${
                            index === 0 ? 'bg-primary text-primary-foreground font-bold shadow-sm shadow-primary/30' : 'bg-secondary text-foreground'
                          }`}
                        >
                          {index + 1}
                        </span>
                      </td>
                      <th scope="row" className="px-5 py-4 font-normal">
                        <span className="block font-semibold text-foreground">{row.team}</span>
                        <span className="block text-xs text-muted-foreground">{row.players}</span>
                      </th>
                      {/* Ottimizzazione: tabular-nums allinea perfettamente i numeri in colonna */}
                      <td className="px-3 py-4 text-center font-semibold tabular-nums">{row.w}</td>
                      <td className="px-3 py-4 text-center tabular-nums text-muted-foreground">{row.l}</td>
                      <td
                        className={`px-5 py-4 text-right font-semibold tabular-nums ${
                          row.diff.startsWith('+') ? 'text-accent' : 'text-destructive'
                        }`}
                      >
                        {row.diff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tabella degli orari delle partite */}
          <div className="rounded-2xl border border-border bg-card p-5 lg:col-span-2 shadow-sm">
            <h3 className="font-display text-2xl tracking-wide uppercase">Saturday schedule</h3>
            <ol className="mt-4 flex flex-col divide-y divide-border">
              {schedule.map((item) => (
                <li key={item.time + item.court} className="flex items-center gap-4 py-3.5">
                  <div className="w-20 shrink-0">
                    <p className="text-sm font-semibold whitespace-nowrap tabular-nums">{item.time}</p>
                    <p className="text-xs text-muted-foreground">{item.court}</p>
                  </div>
                  <p className="min-w-0 flex-1 text-sm leading-snug">{item.match}</p>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}