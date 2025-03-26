<template>
  <section id="career" class="section bg-neutral-900 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('career.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Career Summary -->
      <SectionTransition>
        <div class="career-summary mb-12 bg-neutral-800/70 p-6 rounded-lg border-l-4 border-blue-500 transform transition-all duration-500 hover:translate-y-[-5px]">
          <h3 class="text-xl font-semibold text-white mb-4">{{ $t('career.summaryTitle') }}</h3>
          <p class="text-gray-300 leading-relaxed">
            {{ $t('career.summary') }}
          </p>
        </div>
      </SectionTransition>
      
      <!-- Career Timeline -->
      <div class="space-y-8">
        <!-- Each Career Group -->
        <div 
          v-for="(group, groupIndex) in careerData" 
          :key="groupIndex" 
          class="mb-12 career-group"
          :class="`entrance-animation entrance-${groupIndex % 3}`"
        >
          <!-- Group Name Header with Line -->
          <SectionTransition>
            <div class="flex items-center mb-6">
              <div class="h-1 w-10 bg-blue-500 rounded-full mr-3"></div>
              <h3 class="text-2xl font-bold text-blue-400">{{ translate(group.name) }}</h3>
            </div>
          </SectionTransition>
          
          <!-- Career Card -->
          <div 
            class="career-card bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-md transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]"
            :class="{ 'is-visible': isCardVisible }"
          >
            <!-- Company Header -->
            <div class="bg-neutral-800 p-6 border-b border-neutral-700 flex justify-between items-center">
              <div>
                <h4 v-if="group.slides[activeSlideIndices[groupIndex]]?.company" class="text-xl font-semibold text-white">
                  {{ translate(group.slides[activeSlideIndices[groupIndex]].company) }}
                </h4>
                <div class="flex flex-wrap items-center mt-1">
                  <span v-if="group.slides[activeSlideIndices[groupIndex]]?.position" class="text-blue-400 font-medium text-sm">
                    {{ translate(group.slides[activeSlideIndices[groupIndex]].position) }}
                  </span>
                  <span v-if="group.slides[activeSlideIndices[groupIndex]]?.period" class="text-neutral-400 text-sm ml-3 pl-3 border-l border-neutral-600">
                    {{ group.slides[activeSlideIndices[groupIndex]].period }}
                  </span>
                </div>
              </div>
              
              <!-- Navigation Counter -->
              <div class="flex items-center space-x-4">
                <button 
                  @click="prevSlide(groupIndex)" 
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-blue-500 transition-colors"
                  :class="{ 'opacity-40 cursor-not-allowed hover:bg-neutral-700': activeSlideIndices[groupIndex] === 0 }"
                  :disabled="activeSlideIndices[groupIndex] === 0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <span class="text-neutral-400 text-sm">
                  {{ activeSlideIndices[groupIndex] + 1 }} / {{ group.slides.length }}
                </span>
                
                <button 
                  @click="nextSlide(groupIndex)"
                  class="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-blue-500 transition-colors"
                  :class="{ 'opacity-40 cursor-not-allowed hover:bg-neutral-700': activeSlideIndices[groupIndex] === group.slides.length - 1 }"
                  :disabled="activeSlideIndices[groupIndex] === group.slides.length - 1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Content Area -->
            <div class="relative w-full overflow-hidden">
              <div 
                class="carousel-track flex transition-transform duration-500"
                :style="{ transform: `translateX(-${activeSlideIndices[groupIndex] * 100}%)` }"
              >
                <div 
                  v-for="(slide, slideIndex) in group.slides" 
                  :key="slideIndex"
                  class="carousel-slide w-full flex-shrink-0 p-6"
                >
                  <div class="grid md:grid-cols-12 gap-8">
                    <!-- Icon Area -->
                    <div class="md:col-span-5 flex items-center justify-center">
                      <div class="icon-container w-full h-64 bg-neutral-700/30 rounded-lg flex items-center justify-center">
                        <div class="text-blue-400 opacity-80">
                          <Icon :name="slide.iconName" size="120" />
                        </div>
                      </div>
                    </div>
                    
                    <!-- Description Area -->
                    <div class="md:col-span-7 flex flex-col justify-center">
                      <p class="text-neutral-300 text-lg mb-6 leading-relaxed">{{ translate(slide.description) }}</p>
                      
                      <!-- Skills Tags -->
                      <div class="flex flex-wrap gap-2 mt-4">
                        <span 
                          v-for="(skill, i) in slide.skills" 
                          :key="i" 
                          class="px-3 py-1 bg-neutral-700 text-blue-300 text-sm rounded-full"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Dots Indicator -->
              <div class="absolute bottom-4 right-6 flex space-x-2">
                <button
                  v-for="(_, slideIndex) in group.slides"
                  :key="slideIndex"
                  @click="goToSlide(groupIndex, slideIndex)"
                  class="w-2 h-2 rounded-full transition-colors"
                  :class="slideIndex === activeSlideIndices[groupIndex] ? 'bg-blue-500' : 'bg-neutral-600'"
                  :aria-label="`Go to slide ${slideIndex + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import careerGroups from '~/data/career';
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';
import { useTranslation } from '~/composables/useTranslation';

// Use career data
const careerData = careerGroups;

// Get translation utilities
const { translate } = useTranslation();

// Track active slide for each group
const activeSlideIndices = ref(careerData.map(() => 0));

// Visibility state for entrance animations
const isCardVisible = ref(false);

// Navigation functions
const nextSlide = (groupIndex: number) => {
  if (activeSlideIndices.value[groupIndex] < careerData[groupIndex].slides.length - 1) {
    activeSlideIndices.value[groupIndex]++;
  }
};

const prevSlide = (groupIndex: number) => {
  if (activeSlideIndices.value[groupIndex] > 0) {
    activeSlideIndices.value[groupIndex]--;
  }
};

const goToSlide = (groupIndex: number, slideIndex: number) => {
  activeSlideIndices.value[groupIndex] = slideIndex;
};

// Setup entrance animations
const setupEntranceAnimations = () => {
  isCardVisible.value = true;
  
  // Set up intersection observer for entrance animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  // Observe all career group elements
  document.querySelectorAll('.career-group').forEach((el) => {
    observer.observe(el);
  });
};

// Auto-advance slides (optional)
let autoplayIntervals: number[] = [];

const startAutoplay = () => {
  // Create an interval for each group
  careerData.forEach((group, groupIndex) => {
    autoplayIntervals.push(window.setInterval(() => {
      if (activeSlideIndices.value[groupIndex] < group.slides.length - 1) {
        activeSlideIndices.value[groupIndex]++;
      } else {
        // Loop back to first slide
        activeSlideIndices.value[groupIndex] = 0;
      }
    }, 7000 + (groupIndex * 1000))); // Different timing for each group
  });
};

const stopAutoplay = () => {
  autoplayIntervals.forEach(interval => clearInterval(interval));
  autoplayIntervals = [];
};

onMounted(() => {
  startAutoplay();
  setupEntranceAnimations();
});

// Clean up on component unmount
onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* Card hover animation */
.career-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  will-change: transform, box-shadow;
}

.career-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

/* Carousel transitions */
.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  width: 100%;
  flex-shrink: 0;
}

/* Icon container styling */
.icon-container {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.icon-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
}

.career-card:hover .icon-container {
  transform: scale(1.03);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Navigation button animations */
button:not(:disabled) {
  transition: all 0.3s ease;
}

button:not(:disabled):hover {
  transform: translateY(-2px);
}

button:not(:disabled):active {
  transform: translateY(0);
}

/* Career summary hover effect */
.career-summary {
  transition: all 0.3s ease;
}

.career-summary:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-left-width: 6px;
}

/* Entrance animations */
.entrance-animation {
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* Alternating entrance animations */
.entrance-0 {
  transform: translateX(-50px);
}

.entrance-1 {
  transform: translateX(50px);
}

.entrance-2 {
  transform: translateX(-50px);
}

/* Visible state */
.entrance-animation.is-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Stagger the animations */
.entrance-0.is-visible {
  transition-delay: 0.2s;
}

.entrance-1.is-visible {
  transition-delay: 0.4s;
}

.entrance-2.is-visible {
  transition-delay: 0.6s;
}
</style>