'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { registerTeam, type RegistrationState } from '@/app/actions'

const initialState: RegistrationState = { status: 'idle', message: '' }

// Ottimizzazione 1: Focus States potenziati
const inputClass =
  'w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/30'

type FieldProps = {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}

function Field({ id, label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground/90">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-destructive animate-in slide-in-from-top-1 fade-in duration-200">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function RegistrationForm() {
  const [state, formAction, pending] = useActionState(registerTeam, initialState)
  const errors = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-primary/40 bg-card p-10 text-center animate-in zoom-in-95 fade-in duration-300"
      >
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="font-display text-3xl uppercase">See you on the sand</h3>
        <p className="max-w-sm text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  const describe = (key: keyof typeof errors) => (errors[key] ? `${key}-error` : undefined)

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 md:p-8">
      <Field id="teamName" label="Team name" error={errors.teamName}>
        {/* Ottimizzazione 2: Mobile Keyboard UX */}
        <input
          id="teamName"
          name="teamName"
          type="text"
          required
          placeholder="e.g. Dig Dynasty"
          autoCapitalize="words"
          autoComplete="off"
          aria-invalid={Boolean(errors.teamName)}
          aria-describedby={describe('teamName')}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="captain" label="Captain name" error={errors.captain}>
          <input
            id="captain"
            name="captain"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            autoCapitalize="words"
            aria-invalid={Boolean(errors.captain)}
            aria-describedby={describe('captain')}
            className={inputClass}
          />
        </Field>
        <Field id="partner" label="Partner name" error={errors.partner}>
          <input
            id="partner"
            name="partner"
            type="text"
            required
            placeholder="Partner's full name"
            autoCapitalize="words"
            aria-invalid={Boolean(errors.partner)}
            aria-describedby={describe('partner')}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describe('email')}
            className={inputClass}
          />
        </Field>
        <Field id="division" label="Division" error={errors.division}>
          <select
            id="division"
            name="division"
            required
            defaultValue=""
            aria-invalid={Boolean(errors.division)}
            aria-describedby={describe('division')}
            className={inputClass}
          >
            <option value="" disabled>
              Select a division
            </option>
            <option value="open">Open</option>
            <option value="coed">Co-ed</option>
          </select>
        </Field>
      </div>

      <Field id="message" label="Anything else? (optional)">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Questions, sub info, or your best trash talk"
          className={`${inputClass} resize-none`}
        />
      </Field>

      {state.status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {state.message}
        </p>
      ) : null}

      {/* Ottimizzazione 3: Button UX */}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 [&:not(:disabled)]:active:scale-95 shadow-lg shadow-primary/20"
      >
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : null}
        {pending ? 'Submitting…' : 'Register my team'}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        By registering you agree to play nice and respect the beach.
      </p>
    </form>
  )
}