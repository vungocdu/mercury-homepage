import { NextRequest, NextResponse } from 'next/server'
import { mailchimpService } from '@/lib/mailchimp'
import { supabase } from '@/lib/supabase'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params
  const campaignId = resolvedParams.id
  
  try {

    if (!campaignId) {
      return NextResponse.json(
        { error: 'Campaign ID is required' },
        { status: 400 }
      )
    }

    // Send campaign via Mailchimp
    const result = await mailchimpService.sendCampaign(campaignId)

    // Update campaign status in Supabase
    const { data: updatedCampaign, error } = await supabase
      .from('email_campaigns')
      .update({ 
        status: 'sending',
        updated_at: new Date().toISOString()
      })
      .eq('mailchimp_campaign_id', campaignId)
      .select()
      .single()

    if (error) {
      console.error('Error updating campaign status in Supabase:', error)
      // Continue even if Supabase update fails
    }

    // Set up a delayed job to update final stats (in a real app, use a job queue)
    setTimeout(async () => {
      try {
        const stats = await mailchimpService.getCampaignStats(campaignId)
        
        await supabase
          .from('email_campaigns')
          .update({
            status: 'sent',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            sent_count: (stats as any)?.emails_sent || 0,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            open_rate: (stats as any)?.open_rate || 0,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            click_rate: (stats as any)?.click_rate || 0,
            updated_at: new Date().toISOString()
          })
          .eq('mailchimp_campaign_id', campaignId)
          
      } catch (statsError) {
        console.error('Error updating campaign stats:', statsError)
      }
    }, 30000) // Wait 30 seconds then update stats

    return NextResponse.json({
      success: true,
      message: 'Campaign sent successfully',
      campaign_id: campaignId,
      supabase_campaign: updatedCampaign
    })

  } catch (error) {
    console.error('Campaign send error:', error)
    
    // Update campaign status to failed in Supabase
    try {
      await supabase
        .from('email_campaigns')
        .update({ 
          status: 'failed',
          updated_at: new Date().toISOString()
        })
        .eq('mailchimp_campaign_id', campaignId)
    } catch (updateError) {
      console.error('Error updating failed campaign status:', updateError)
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send campaign',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}