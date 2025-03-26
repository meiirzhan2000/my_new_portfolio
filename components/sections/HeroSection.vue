<template>
  <section class="relative min-h-screen flex items-center pt-24 pb-8 overflow-hidden">
    <!-- Background with animated gradient -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: linear-gradient(135deg, #0f2051, #204f9b, #4c209b);"
      ></div>
      <!-- Background particles/shapes -->
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-600/20 blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      <div class="absolute inset-0 bg-black/30"></div>
    </div>
    
    <!-- Main Content -->
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
        <!-- Left side content (3 columns on large screens) -->
        <SectionTransition class="slide-right lg:col-span-3">
          <div class="space-y-8">
            <!-- Name with gradient text -->
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
                {{ translate(profile.name) }}
              </span>
            </h1>
            
            <!-- Title with animated underline -->
            <h2 class="text-xl md:text-2xl text-primary-200 font-medium relative inline-block">
              {{ translate(profile.title) }}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 origin-left transition-transform duration-1000 animate-slide-in"></span>
            </h2>
            
            <!-- Description -->
            <p class="text-lg text-white/90 max-w-xl leading-relaxed">
              {{ translate(profile.description) }}
            </p>
            
            <!-- Social Links with only Github and LinkedIn -->
            <div class="flex space-x-4 stagger-container is-visible">
              <!-- GitHub -->
              <a 
                href="https://github.com/meiirzhan2000"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn group stagger-item"
                :title="$t('social.github')"
              >
                <fa-icon :icon="['fab', 'github']" class="text-white group-hover:text-primary-300 text-xl transition-all" />
              </a>
              
              <!-- LinkedIn -->
              <a 
                href="https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon-btn group stagger-item"
                :title="$t('social.linkedin')"
              >
                <fa-icon :icon="['fab', 'linkedin']" class="text-white group-hover:text-primary-300 text-xl transition-all" />
              </a>
            </div>
            
            <!-- Resume Button -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="/files/Meiirzhan_Baitangatov_resume.pdf" 
                download
                class="resume-button btn btn-primary group"
              >
                <div class="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{{ $t('hero.downloadResume') }}</span>
                </div>
              </a>
              
              <NuxtLink 
                :to="profile.ctaLink || '#contact'" 
                class="btn btn-outline text-white border-white/30 hover:bg-white/10 backdrop-blur-sm group"
              >
                <span>{{ $t('hero.getInTouch') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
            </div>
          </div>
        </SectionTransition>
        
        <!-- Right side - Enhanced Animated Profile (2 columns on large screens) -->
        <SectionTransition class="sm:py-8 md:py-8 lg:py-8 py-0 slide-left flex justify-center lg:justify-end lg:col-span-2" :delay="300">
          <div class="relative">
            <!-- Decorative rings -->
            <div class="absolute inset-0 -m-6 rotate-45 opacity-70">
              <div class="absolute inset-0 border-2 border-primary-400/30 rounded-full animate-spin-slow"></div>
            </div>
            <div class="absolute inset-0 -m-12 -rotate-45 opacity-70">
              <div class="absolute inset-0 border-2 border-secondary-400/30 rounded-full animate-spin-slow-reverse"></div>
            </div>
            
            <!-- Enhanced animated profile -->
            <div class="animated-profile">
              <div class="profile-content">
                <img 
                  :src="profile.avatarUrl" 
                  :alt="translate(profile.name)" 
                  class="profile-img"
                />
                <h2>{{ translate(profile.name) }}<br><span>{{ translate(profile.title) }}</span></h2>
                <NuxtLink :to="profile.ctaLink || '#contact'" class="hire-me-btn">{{ $t('hero.hireMe') }}</NuxtLink>
              </div>
            </div>
            
            <!-- Decorative glowing dots -->
            <div class="absolute -bottom-4 -right-4 w-3 h-3 rounded-full bg-primary-400 animate-pulse"></div>
            <div class="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-secondary-400 animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
        </SectionTransition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import profileData from '~/data/profile';
import type { Profile } from '~/types';
import SectionTransition from '../ui/SectionTransition.vue';
import { useTranslation } from '~/composables/useTranslation';

// Use local profile data instead of fetching from Supabase
const profile: Profile = profileData;

// Use translation composable
const { translate } = useTranslation();
</script>

<style>
@import url('~/assets/css/hero-animation.css');

/* Enhanced button styling */
.btn-icon {
  @apply flex items-center justify-center w-10 h-10 rounded-full transition-all;
  @apply hover:shadow-lg;
}

/* Social icon buttons */
.social-icon-btn {
  @apply flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm;
  @apply hover:bg-white/20 hover:scale-110 transition-all duration-300;
  @apply border border-white/10;
}

/* Resume button responsive styling */
.resume-button {
  /* Default (desktop): Narrow button */
  @apply text-sm px-6 py-2.5 inline-flex;
  width: auto;
  @apply bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600;
  @apply shadow-lg shadow-primary-700/30;
}

/* Tablet and mobile: Wide button */
@media (max-width: 640px) {
  .resume-button {
    @apply text-base px-6 py-3;
    width: 100%;
  }
}

/* Additional mobile optimizations */
@media (max-width: 640px) {
  .animated-profile {
    margin-top: 1rem;
    width: 260px;
    height: 260px;
  }
}

/* Enhanced profile animations */
.animated-profile {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
}

.animated-profile::before {
  animation: animate 8s linear infinite;
}

.hire-me-btn {
  @apply bg-white text-primary-700 hover:bg-primary-100;
  @apply shadow-lg font-medium;
}

/* Custom animations */
@keyframes animate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.animate-slide-in {
  animation: slideIn 1.5s forwards ease-out;
  animation-delay: 0.5s;
}

@keyframes slideIn {
  to { transform: scaleX(1); }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-spin-slow-reverse {
  animation: spin 15s linear infinite reverse;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>