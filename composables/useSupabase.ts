import { useTranslation } from './useTranslation'
import type { Database, TranslatedField } from '~/types'
import { useSupabaseClient } from '#imports'

export interface Project {
  id: string
  title: TranslatedField | string
  description: TranslatedField | string
  image_url: string
  technologies: string[]
  featured: boolean
  completion_date: string
  images: string[]
}

export const useProjects = async () => {
  const config = useRuntimeConfig()
  const { translate } = useTranslation()
  
  const supabase = useSupabaseClient()
  
  try {
    // Fetch all projects
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .order('completion_date', { ascending: false })
    
    if (projectsError) throw projectsError
    
    // For each project, fetch its images
    const projectsWithImages = await Promise.all(
      projects.map(async (project) => {
        const { data: images, error: imagesError } = await supabase
          .from('project_images')
          .select('image_url')
          .eq('project_id', project.id)
          .order('display_order', { ascending: true })
        
        if (imagesError) throw imagesError
        
        return {
          ...project,
          // Ensure title and description are properly handled for translation
          title: project.title || '',
          description: project.description || '',
          images: images.map(img => img.image_url)
        } as Project
      })
    )
    
    return projectsWithImages
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export const getFeaturedProjects = async () => {
  const projects = await useProjects()
  return projects.filter(project => project.featured)
}

// Fetch a single project by id
export const getProjectById = async (id: string) => {
  const projects = await useProjects()
  return projects.find(project => project.id === id)
}

// Function to migrate projects to support translations
export const migrateProjectsToTranslation = async () => {
  const config = useRuntimeConfig()
  
  const supabase = useSupabaseClient()
  
  try {
    // Fetch all projects
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
    
    if (projectsError) throw projectsError
    
    // Update each project to use JSON for title and description
    for (const project of projects) {
      // Only convert if it's a string (not already converted)
      if (typeof project.title === 'string') {
        const translatedTitle = {
          en: project.title,
          ru: project.title // Default Russian to English until translated
        }
        
        // Update the title
        const { error: updateError } = await supabase
          .from('projects')
          .update({ title: translatedTitle })
          .eq('id', project.id)
        
        if (updateError) throw updateError
      }
      
      // Only convert if description is a string
      if (typeof project.description === 'string') {
        const translatedDescription = {
          en: project.description,
          ru: project.description // Default Russian to English until translated
        }
        
        // Update the description
        const { error: updateError } = await supabase
          .from('projects')
          .update({ description: translatedDescription })
          .eq('id', project.id)
        
        if (updateError) throw updateError
      }
    }
    
    return { success: true, message: 'Projects migrated successfully' }
  } catch (error) {
    console.error('Error migrating projects:', error)
    return { success: false, message: 'Failed to migrate projects', error }
  }
}