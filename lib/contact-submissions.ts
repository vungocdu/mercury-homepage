import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getFirestoreDb } from '@/lib/firebase'

export type ContactSubmissionInput = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
}

export type ContactSubmissionErrorCode = 'required' | 'invalid-email' | 'invalid-length'

export class ContactSubmissionValidationError extends Error {
  constructor(readonly code: ContactSubmissionErrorCode) {
    super(code)
    this.name = 'ContactSubmissionValidationError'
  }
}

const fieldLimits = {
  firstName: 100,
  lastName: 100,
  email: 254,
  phone: 40,
  company: 160,
  message: 5000,
  service: 120,
} as const

function normalized(value: string | undefined): string {
  return value?.trim() ?? ''
}

export async function submitContactSubmission(input: ContactSubmissionInput): Promise<void> {
  const firstName = normalized(input.firstName)
  const lastName = normalized(input.lastName)
  const email = normalized(input.email).toLowerCase()
  const message = normalized(input.message)
  const phone = normalized(input.phone)
  const company = normalized(input.company)
  const service = normalized(input.service)

  if (!firstName || !lastName || !email || !message) {
    throw new ContactSubmissionValidationError('required')
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ContactSubmissionValidationError('invalid-email')
  }

  const values = { firstName, lastName, email, phone, company, message, service }
  for (const [field, limit] of Object.entries(fieldLimits) as [keyof typeof fieldLimits, number][]) {
    const value = values[field]
    if (value && value.length > limit) {
      throw new ContactSubmissionValidationError('invalid-length')
    }
  }

  const db = getFirestoreDb()
  await addDoc(collection(db, 'contact_submissions'), {
    ...values,
    status: 'new',
    createdAt: serverTimestamp(),
  })
}
