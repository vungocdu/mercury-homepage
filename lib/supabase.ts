import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  company?: string
  message: string
  source: string // 'contact_form', 'tvc_form', etc.
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface EmailCampaign {
  id?: string
  name: string
  subject: string
  template: string
  mailchimp_campaign_id?: string
  status: 'draft' | 'sending' | 'sent' | 'failed'
  sent_count?: number
  open_rate?: number
  click_rate?: number
  created_at?: string
  updated_at?: string
}

export interface Subscriber {
  id?: string
  email: string
  first_name?: string
  last_name?: string
  source: string
  tags: string[]
  mailchimp_subscriber_id?: string
  status: 'subscribed' | 'unsubscribed' | 'pending'
  created_at?: string
  updated_at?: string
}

// Helper functions
export const insertContactSubmission = async (data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single()

  if (error) {
    console.error('Error inserting contact submission:', error)
    throw error
  }

  return result
}

export const insertSubscriber = async (data: Omit<Subscriber, 'id' | 'created_at' | 'updated_at'>) => {
  const { data: result, error } = await supabase
    .from('subscribers')
    .upsert([data], { 
      onConflict: 'email',
      ignoreDuplicates: false 
    })
    .select()
    .single()

  if (error) {
    console.error('Error inserting subscriber:', error)
    throw error
  }

  return result
}

export const getContactSubmissions = async () => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching contact submissions:', error)
    throw error
  }

  return data
}

export const updateContactSubmissionStatus = async (id: string, status: ContactSubmission['status']) => {
  const { data, error } = await supabase
    .from('contact_submissions')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error('Error updating contact submission:', error)
    throw error
  }

  return data
}