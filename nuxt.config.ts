// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-12',
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables',
      'components'
    ]
  },
  
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  experimental: {
    viewTransition: true
  },
  
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/supabase', 
    '@nuxt/image', 
    '@vesp/nuxt-fontawesome', 
    '@nuxt/icon'
  ],
  
  image: {
    dir: 'assets/images',
    // Quality settings for optimization
    quality: 80,
    // Define image provider (default is ipx)
    provider: 'ipx',
    // Configure image sources (optional)
    domains: [],
    // Define image alias for easier reference
    alias: {
      career: '/assets/images'
    }
  },
  
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
      cookieCrossOrigin: false,
      cookieSecure: process.env.NODE_ENV === 'production'
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
    lazy: true
  },

  fontawesome: {
    component: 'fa',
    suffix: true, // This will make the component name <fa-icon>
    icons: {
      solid: [
        'user', 
        'envelope', 
        'briefcase',
        'code',
        'laptop-code',
        'server',
        'database',
        'file-code',
        'cog',
        'graduation-cap',
        'chevron-down',
        'chevron-right',
        'external-link-alt',
        'link',
        'globe',
        'calendar',
        'sun',
        'moon',
      ],
      brands: [
        'github',
        'linkedin',
        'twitter',
        'html5',
        'css3',
        'js',
        'node',
        'react',
        'vuejs',
        'android',
        'apple',
        'aws',
        'bootstrap',
        'python',
        'java',
        'google',
        'git'
      ]
    }
  },
  
  css: [
    '~/assets/css/main.css',
  ],
  
  app: {
    head: {
      title: 'My Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My professional portfolio showcasing my skills, projects, and experience.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  },
  
  supabase: {
    redirect: false
  },
  
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL ?? 'http://localhost:3000',
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    }
  },

  ssr: true,
  nitro: {
    preset: 'netlify',
    static: true
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
})