<template>
  <div class="bg-neutral-900 text-white">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useTranslation } from '~/composables/useTranslation';

const { locale, t } = useI18n();
const { currentLang } = useTranslation();

// SEO Metadata
useHead({
  // Title template
  titleTemplate: (title) => title ? `${title} | ${t('meta.title')}` : t('meta.title'),
  
  // Default meta tags
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: t('meta.description') },
    { name: 'keywords', content: 'full stack developer, portfolio, web development, mobile development, vue, react, spring boot' },
    { name: 'author', content: 'Meiirzhan Baitangatov' },
    
    // Theme color
    { name: 'theme-color', content: '#3b82f6' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: process.client ? window.location.href : 'https://meiirzhan-portfolio.com' },
    { property: 'og:title', content: t('meta.og.title') },
    { property: 'og:description', content: t('meta.og.description') },
    { property: 'og:image', content: '/images/og-image.jpg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: currentLang === 'en' ? 'en_US' : 'ru_RU' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: process.client ? window.location.href : 'https://meiirzhan-portfolio.com' },
    { name: 'twitter:title', content: t('meta.og.title') },
    { name: 'twitter:description', content: t('meta.og.description') },
    { name: 'twitter:image', content: '/images/twitter-card.jpg' },
    
    // iOS
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  
  // Links
  link: [
    // Favicon and app icons
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    
    // Preconnect for performance
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    
    // Canonical URL
    { rel: 'canonical', href: process.client ? window.location.href : 'https://meiirzhan-portfolio.com' },
  ],
  
  // HTML attributes
  htmlAttrs: {
    lang: currentLang,
    dir: 'ltr'
  },
  
  // Body attributes
  bodyAttrs: {
    class: 'font-sans antialiased'
  }
});

// Add structured data (JSON-LD) for enhanced SEO
onMounted(() => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Meiirzhan Baitangatov",
    "url": "https://meiirzhan-portfolio.com",
    "image": "/images/profile.jpg",
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "sameAs": [
      "https://github.com/meiirzhan2000",
      "https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/"
    ],
    "description": t('meta.description')
  });
  document.head.appendChild(script);
});
</script>

<style>
/* Base styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply font-sans antialiased text-neutral-800 dark:text-neutral-200;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}

svg {
  display: inline-block;
  vertical-align: -0.125em;
}

/* For accessibility */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Ensure proper link focus styles for accessibility */
a:focus-visible, 
button:focus-visible {
  @apply outline-none ring-2 ring-primary-500 ring-offset-2;
}
</style>