<template>
  <div class="interests-page bg-neutral-900 min-h-screen">
    <!-- Header Area -->
    <div class="pt-24 pb-4 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div class="container-custom">
        <div class="mb-4">
          <NuxtLink 
            to="/#interests" 
            class="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
          >
            <Icon name="mdi:arrow-left" class="mr-2" />
            {{ $t('interests.backToHome') }}
          </NuxtLink>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ $t('interests.title') }}</h1>
        <p class="text-neutral-400 text-lg max-w-3xl">
          {{ $t('interests.description') }}
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container-custom py-12">
      <!-- Filter Tabs -->
      <div class="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        <button 
          class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
          :class="selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
          @click="selectedCategory = null"
        >
          {{ $t('interests.allInterests') }}
        </button>
        <button 
          v-for="category in translatedCategories" 
          :key="category.categoryKey"
          class="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
          :class="selectedCategory === category.categoryKey ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
          @click="selectedCategory = category.categoryKey"
        >
          {{ category.categoryName }}
        </button>
      </div>

      <!-- Categories and Activities -->
      <div class="space-y-16">
        <div 
          v-for="category in filteredCategories" 
          :key="category.categoryKey"
          class="activity-category"
        >
          <h2 class="text-2xl md:text-3xl font-bold text-blue-400 mb-8 flex items-center">
            <div class="h-1 w-8 bg-blue-500 rounded-full mr-3"></div>
            {{ category.categoryName }}
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div 
              v-for="activity in category.details" 
              :key="activity.title"
              class="activity-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <!-- Card Layout -->
              <div class="card-layout">
                <!-- Animation Column -->
                <div class="animation-wrapper">
                  <div class="animation-container">
                    <client-only>
                      <Vue3Lottie
                        :animationLink="`/animations/${activity.animation}.json`"
                        :height="240"
                        :width="240"
                        :loop="true"
                        :speed="0.8"
                        :noMargin="true"
                        backgroundColor="transparent"
                        :assetsPath="'/animations/'"
                        class="lottie-animation"
                      />
                      
                      <!-- Fallback when client rendering is not available -->
                      <template #fallback>
                        <div class="w-full h-full bg-neutral-700/30 flex items-center justify-center">
                          <div class="text-neutral-400">
                            <Icon name="mdi:image" size="48" />
                          </div>
                        </div>
                      </template>
                    </client-only>
                  </div>
                </div>
                
                <!-- Content Column -->
                <div class="content-wrapper">
                  <h3 class="text-xl font-semibold text-white mb-3">{{ activity.title }}</h3>
                  <p class="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {{ activity.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to top button -->
      <div class="fixed bottom-8 right-8 z-50">
        <button 
          v-show="showBackToTop"
          @click="scrollToTop"
          class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Back to top"
        >
          <Icon name="mdi:arrow-up" size="24" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import activityData from '~/data/interests';
import { useTranslation } from '~/composables/useTranslation';

// Get translation utilities
const { translate, setupPageMeta } = useTranslation();

// Setup page metadata
setupPageMeta('interests.title', 'interests.description');

// Transform activity data to include translated content
const transformedActivityData = computed(() => {
  return activityData.map(category => {
    return {
      categoryKey: category.category.en.toLowerCase().replace(/\s+/g, '-'),
      categoryName: translate(category.category),
      details: category.details.map(detail => ({
        title: translate(detail.title),
        animation: detail.animation,
        description: translate(detail.description)
      }))
    };
  });
});

// Get unique categories for the filter
const translatedCategories = computed(() => {
  return transformedActivityData.value;
});

// Category filter
const selectedCategory = ref(null);

// Filter categories based on selection
const filteredCategories = computed(() => {
  if (selectedCategory.value === null) {
    return transformedActivityData.value;
  }
  return transformedActivityData.value.filter(category => category.categoryKey === selectedCategory.value);
});

// Back to top button
const showBackToTop = ref(false);

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.activity-card {
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Card layout */
.card-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Animation wrapper and container */
.animation-wrapper {
  background-color: rgba(38, 38, 38, 0.4);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.animation-container {
  width: 240px;
  height: 240px;
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lottie-animation {
  transform-origin: center center;
  object-fit: contain;
}

/* Content wrapper */
.content-wrapper {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Hover effect */
.activity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.activity-card:hover::before {
  transform: scaleX(1);
}

/* Media query for md screens and above */
@media (min-width: 768px) {
  .card-layout {
    flex-direction: row;
  }
  
  .animation-wrapper {
    width: 40%;
    padding: 0;
    height: auto;
  }
  
  .animation-container {
    height: 100%;
  }
  
  .content-wrapper {
    width: 60%;
  }
}

/* Hide scrollbar but allow scrolling */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.no-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}
</style>