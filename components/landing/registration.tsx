import { Mail, Phone } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { RegistrationForm } from './registration-form'

// Ottimizzazione 1: Estrazione dei dati (Separation of Concerns)
const tournamentStats = [
  { label: 'Entry', value: '$60' },
  { label: 'Deadline', value: 'Oct 20' },
  { label: 'Spots', value: '9 left', highlight: true },
]

const contactInfo = {
  email: 'hello@sunsetspike.com',
  phoneRaw: '+16195550142',
  phoneFormatted: '(619) 555-0142',
}

export function Registration() {
  return (
    <section id="register" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="03 — Register"
            title="Claim your court"
            description="Entry is $60 per team and includes tournament tees, water, and an after-party taco ticket for both players."
          />

          {/* Ottimizzazione 2: Rendering dinamico e consistenza visiva */}
          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6">
            {tournamentStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs tracking-wider text-muted-foreground uppercase">
                  {stat.label}
                </dt>
                <dd 
                  className={`mt-1 font-display text-3xl ${
                    stat.highlight ? 'text-primary animate-pulse' : ''
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <p className="text-muted-foreground">Questions? Reach the organizers:</p>
            {/* Ottimizzazione 3: Accessibilità da tastiera e click area */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex w-fit items-center gap-3 rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="size-4 text-accent" aria-hidden="true" />
              {contactInfo.email}
            </a>
            <a 
              href={`tel:${contactInfo.phoneRaw}`} 
              className="inline-flex w-fit items-center gap-3 rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Phone className="size-4 text-accent" aria-hidden="true" />
              {contactInfo.phoneFormatted}
            </a>
          </div>
        </div>

        {/* Qui dentro c'è la vera logica complessa del form */}
        <RegistrationForm />
      </div>
    </section>
  )
}