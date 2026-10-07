export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row md:px-6">
        <p className="font-display tracking-wide text-foreground uppercase">
          Sunset <span className="text-primary">Spike</span> Open
        </p>
        <p>{`© ${currentYear} Sunset Spike Open · Mission Beach, San Diego`}</p>
      </div>
    </footer>
  )
}