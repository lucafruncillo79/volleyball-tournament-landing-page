'use server'

export type RegistrationState = {
  status: 'idle' | 'success' | 'error'
  message: string
  errors?: Partial<Record<'teamName' | 'captain' | 'email' | 'partner' | 'division', string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DIVISIONS = new Set(['open', 'coed'])

export async function registerTeam(
  _prev: RegistrationState,
  formData: FormData,
): Promise<RegistrationState> {
  const read = (key: string) => String(formData.get(key) ?? '').trim().slice(0, 200)

  const teamName = read('teamName')
  const captain = read('captain')
  const email = read('email')
  const partner = read('partner')
  const division = read('division')

  const errors: RegistrationState['errors'] = {}
  if (teamName.length < 2) errors.teamName = 'Give your team a name (2+ characters).'
  if (captain.length < 2) errors.captain = 'Captain name is required.'
  if (!EMAIL_PATTERN.test(email)) errors.email = 'Enter a valid email address.'
  if (partner.length < 2) errors.partner = 'Partner name is required.'
  if (!DIVISIONS.has(division)) errors.division = 'Choose a division.'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: `You're in, ${teamName}! We'll send confirmation and payment details to ${email}.`,
  }
}
