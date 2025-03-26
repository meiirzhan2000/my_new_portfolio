import { useTranslation } from './useTranslation'
import type { Database, TranslatedField } from '~/types'
import { useSupabaseClient } from '#imports'

export interface Certification {
  id: string
  name: TranslatedField | string
  issuing_organization: string
  issue_date: string
  expiration_date?: string
  credential_id?: string
  credential_url?: string
  skills: string[]
}

export const useCertifications = async () => {
  const config = useRuntimeConfig()
  const { translate } = useTranslation()
  
  const supabase = useSupabaseClient()
  
  try {
    const { data, error } = await supabase
      .from('certifications')
      .select('*')
      .order('issue_date', { ascending: false })
    
    if (error) throw error
    
    return data.map(cert => ({
      ...cert,
      name: cert.name || '',
      skills: cert.skills as string[] || []
    })) as Certification[]
  } catch (error) {
    console.error('Error fetching certifications:', error)
    return []
  }
}

export const getCertificationsByOrganization = async (organization: string) => {
  const certifications = await useCertifications()
  return certifications.filter(cert => 
    cert.issuing_organization.toLowerCase() === organization.toLowerCase()
  )
}

export const getTopCertifications = async (limit: number = 5) => {
  const certifications = await useCertifications()
  return certifications.slice(0, limit)
}

// Function to migrate certifications to support translations
export const migrateCertificationsToTranslation = async () => {
  const config = useRuntimeConfig()
  
  const supabase = useSupabaseClient()
  
  try {
    // Fetch all certifications
    const { data: certifications, error: certsError } = await supabase
      .from('certifications')
      .select('*')
    
    if (certsError) throw certsError
    
    // Update each certification to use JSON for name
    for (const cert of certifications) {
      // Only convert if it's a string (not already converted)
      if (typeof cert.name === 'string') {
        const translatedName = {
          en: cert.name,
          ru: cert.name // Default Russian to English until translated
        }
        
        // Update the name
        const { error: updateError } = await supabase
          .from('certifications')
          .update({ name: translatedName })
          .eq('id', cert.id)
        
        if (updateError) throw updateError
      }
    }
    
    return { success: true, message: 'Certifications migrated successfully' }
  } catch (error) {
    console.error('Error migrating certifications:', error)
    return { success: false, message: 'Failed to migrate certifications', error }
  }
}