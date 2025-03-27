export interface SocialLink {
  platform: string;
  url: string;
  icon: string[] | string; // Updated to support FontAwesome array format ['fab', 'github']
}

export interface TranslatedField {
  en: string;
  ru: string;
  [key: string]: string;
}

export interface Profile {
  id: string;
  name: TranslatedField | string;
  title: TranslatedField | string;
  description: TranslatedField | string;
  avatarUrl: string;
  socialLinks: SocialLink[];
  backgroundImageUrl?: string;
  ctaText?: TranslatedField | string;
  ctaLink?: string;
}

export type Json =
| string
| number
| boolean
| null
| { [key: string]: Json | undefined }
| Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: Json
          description: Json | null
          image_url: string | null
          technologies: Json | null
          featured: boolean | null
          completion_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: Json
          description?: Json | null
          image_url?: string | null
          technologies?: Json | null
          featured?: boolean | null
          completion_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: Json
          description?: Json | null
          image_url?: string | null
          technologies?: Json | null
          featured?: boolean | null
          completion_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      project_images: {
        Row: {
          id: string
          project_id: string
          image_url: string
          display_order: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          image_url: string
          display_order?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          image_url?: string
          display_order?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      certifications: {
        Row: {
          id: string
          name: Json
          issuing_organization: string
          issue_date: string
          expiration_date: string | null
          credential_id: string | null
          credential_url: string | null
          skills: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: Json
          issuing_organization: string
          issue_date: string
          expiration_date?: string | null
          credential_id?: string | null
          credential_url?: string | null
          skills?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: Json
          issuing_organization?: string
          issue_date?: string
          expiration_date?: string | null
          credential_id?: string | null
          credential_url?: string | null
          skills?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

// For Skills section
export interface SkillItem {
  icon: string;
  iconType?: 'react' | 'fontawesome';
  skill: string;
  info: TranslatedField | string;
}

export interface SkillCategory {
  title: TranslatedField | string;
  skills: SkillItem[];
}

// For Interests section
export interface ActivityDetail {
  title: TranslatedField | string;
  animation: string;
  description: TranslatedField | string;
}

export interface ActivityCategory {
  category: TranslatedField | string;
  details: ActivityDetail[];
}