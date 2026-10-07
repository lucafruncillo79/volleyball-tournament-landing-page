const links = [
  { href: '#rules', label: 'Rules' },
  { href: '#standings', label: 'Standings' },
  { href: '#register', label: 'Register' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        
        {/* Logo con focus accessibile */}
        <a 
          href="#top" 
          className="font-display text-xl tracking-wide uppercase transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        >
          Sunset <span className="text-primary">Spike</span>
        </a>

        {/* Menu di navigazione */}
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 md:gap-2">
            {links.slice(0, 2).map((link) => (
              <li key={link.href} className="hidden sm:block">
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}