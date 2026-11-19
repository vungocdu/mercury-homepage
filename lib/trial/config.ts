export const TRIAL_ORIGIN = 'https://www.mercurysolutions.vn'
import { TERMS_VERSION } from './validation'
export { TERMS_VERSION } from './validation'
export const LEGAL_APPROVED = process.env.TRIAL_LEGAL_APPROVED === TERMS_VERSION
export const trialUrl = (lang: 'vi' | 'ja', page = '') => `${TRIAL_ORIGIN}/erp-trial${lang === 'vi' ? '/vi' : ''}/${page ? `${page}/` : ''}`
