import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Client-side Supabase client for static builds
let supabase: SupabaseClient | null = null

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase configuration missing. Contact form will be disabled.')
      return null
    }

    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }

  return supabase
}

// Database types
export interface ContactSubmission {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string | undefined
  company?: string | undefined
  message: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at?: string
  updated_at?: string
}

export interface Subscriber {
  id?: string
  email: string
  first_name: string
  last_name: string
  source: string
  tags: string[]
  status: 'subscribed' | 'unsubscribed' | 'pending' | 'cleaned'
  created_at?: string
  updated_at?: string
}

export const insertContactSubmission = async (data: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'>) => {
  const client = getSupabaseClient()
  if (!client) {
    throw new Error('Supabase client not available')
  }

  const { data: result, error } = await client
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
  const client = getSupabaseClient()
  if (!client) {
    throw new Error('Supabase client not available')
  }

  const { data: result, error } = await client
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