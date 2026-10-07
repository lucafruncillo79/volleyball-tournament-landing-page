import { SiteHeader } from '@/components/landing/site-header'
import { Hero } from '@/components/landing/hero'
import { TournamentRules } from '@/components/landing/tournament-rules'
import { Standings } from '@/components/landing/standings'
import { Registration } from '@/components/landing/registration'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TournamentRules />
        <Standings />
        <Registration />
      </main>
      <SiteFooter />
    </>
  )
}
