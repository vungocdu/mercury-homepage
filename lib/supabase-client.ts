import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Client-side Supabase client for static builds
let supabase: SupabaseClient | null = null

export function getSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dhtmdfbzcglagzgyxdbs.supabase.co'
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRodG1kZmJ6Y2dsYWd6Z3l4ZGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MDAzMzIsImV4cCI6MjA2NDA3NjMzMn0.IOJ3N0Jv4XbCYCzNRQk4OV1hkSe52yeXrR67R4mts4M'

    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 DEBUG: Creating Supabase client with URL:', supabaseUrl)
      console.log('🔍 DEBUG: Using anon key (first 50 chars):', supabaseAnonKey.substring(0, 50) + '...')
      console.log('🔍 DEBUG: Environment variables loaded:', {
        hasEnvUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasEnvKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      })
    }
    
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    if (process.env.NODE_ENV === 'development') {
      console.log('🔍 DEBUG: Supabase client created successfully')
    }
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
  if (process.env.NODE_ENV === 'development') {
    console.log('🚀 insertContactSubmission called with data:', data)
  }
  
  const client = getSupabaseClient()
  if (!client) {
    console.error('❌ Supabase client not available')
    throw new Error('Supabase client not available')
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('✅ Supabase client available, attempting insert...')
    
    // Debug: Check current session/auth status
    try {
      const { data: session } = await client.auth.getSession()
      console.log('🔍 Current auth session:', session.session ? 'authenticated' : 'anonymous (anon)')
      console.log('🔍 Session details:', {
        hasSession: !!session.session,
        user: session.session?.user?.id || 'anonymous'
      })
    } catch (authError) {
      console.log('⚠️ Auth check failed (continuing anyway):', authError)
    }
    
    console.log('🔍 INSERT attempt - Table: contact_submissions')
    console.log('🔍 INSERT attempt - Data payload:', JSON.stringify(data, null, 2))
  }
  
  try {
    const { data: result, error } = await client
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()

    if (process.env.NODE_ENV === 'development') {
      console.log('📥 Supabase raw response - result:', result)
      console.log('📥 Supabase raw response - error:', error)
    }

    if (error) {
      console.error('❌ Database error details:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      })
      throw new Error(`Database error: ${error.message || JSON.stringify(error)}`)
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('🎉 Contact submission successful!', result)
    }
    return result
  } catch (err) {
    console.error('💥 Exception in insertContactSubmission:', err)
    throw err
  }
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