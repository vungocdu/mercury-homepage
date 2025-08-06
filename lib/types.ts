// Database types
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string | null
  company?: string | null
  message: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at?: string
  updated_at?: string
}

// Form data types
export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  message: string
  service: string
}

// API request/response types
export interface ContactFormRequest extends Omit<ContactFormData, 'firstName' | 'lastName'> {
  first_name: string
  last_name: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  message: string
  data?: T
  error?: string
}

// Email types
export interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

export interface ContactConfirmationEmailData {
  firstName: string
  lastName: string
  email: string
  company?: string
  service: string
  message: string
  submittedAt: string
}

// Form validation types
export interface FormErrors {
  [key: string]: string | undefined
}

export interface FormValidationResult {
  isValid: boolean
  errors: FormErrors
}