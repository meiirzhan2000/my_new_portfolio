<template>
  <section id="interests" class="section bg-neutral-900 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('interests.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Preview of interests with link to full page -->
      <div class="space-y-12">
        <!-- Featured interests from each category -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SectionTransition v-for="(category, index) in translatedInterests" :key="index" :delay="index * 100">
            <div 
              class="interest-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <!-- Animation Container -->
              <div class="interest-animation-container">
                <client-only>
                  <div class="animation-wrapper">
                    <Vue3Lottie
                      :animationLink="`/animations/${category.animation}.json`"
                      :height="300"
                      :width="300"
                      :loop="true" 
                      :speed="0.8"
                      :noMargin="true"
                      :scale="1.2"
                      class="interest-lottie"
                    />
                  </div>
                  
                  <!-- Fallback -->
                  <template #fallback>
                    <div class="w-full h-full flex items-center justify-center">
                      <div class="text-neutral-400">
                        <Icon name="mdi:image" size="48" />
                      </div>
                    </div>
                  </template>
                </client-only>
                
                <!-- Hover overlay -->
                <div class="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <!-- Content -->
              <div class="p-5">
                <h3 class="text-xl font-semibold text-blue-400 mb-2">{{ category.title }}</h3>
                <p class="text-neutral-400 text-sm interest-description">{{ category.description }}</p>
              </div>
            </div>
          </SectionTransition>
        </div>
        
        <!-- Read more link -->
        <div class="text-center mt-10">
          <SectionTransition>
            <NuxtLink 
              to="/interests" 
              class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {{ $t('interests.discoverAll') }}
              <Icon name="mdi:arrow-right" class="ml-2" />
            </NuxtLink>
          </SectionTransition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import activityData from '~/data/interests';
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';
import { useTranslation } from '~/composables/useTranslation';

// Get translation utilities
const { translate } = useTranslation();

// Select one featured interest from each category
const featuredInterests = computed(() => {
  return activityData.map(category => {
    // Choose the first interest from each category
    const featuredDetail = category.details[0];
    return {
      category: translate(category.category),
      title: translate(featuredDetail.title),
      animation: featuredDetail.animation,
      description: translate(featuredDetail.description)
    };
  });
});

// Use translated interests
const translatedInterests = computed(() => featuredInterests.value);
</script>

<style scoped>
.interest-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  will-change: transform;
  position: relative;
}

.interest-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.interest-card:hover::after {
  transform: scaleX(1);
}

.interest-animation-container {
  height: 220px;
  position: relative;
  overflow: hidden;
  background-color: rgba(64, 64, 64, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animation wrapper to ensure consistent sizing */
.animation-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Description text */
.interest-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  max-height: 4.5em; /* 3 lines × 1.5 line height */
}

/* Override internal Vue3Lottie styling */
:deep(.interest-lottie) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  transform-origin: center center !important;
}

:deep(.interest-lottie > div) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(svg) {
  max-width: none !important;
  max-height: none !important;
  width: 100% !important;
  height: 100% !important;
  transform-origin: center center !important;
}
</style>