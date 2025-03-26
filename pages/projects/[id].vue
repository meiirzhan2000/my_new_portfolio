<!--pages\projects\[id].vue-->
<template>
  <div class="project-detail-page bg-neutral-900 min-h-screen">
    <!-- Loading State -->
    <div v-if="loading" class="h-screen flex items-center justify-center">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400"></div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="container-custom py-20 text-center">
      <h1 class="text-3xl font-bold text-white mb-4">{{ $t('projects.notFound') }}</h1>
      <p class="text-neutral-400 mb-8">{{ $t('projects.notFoundMessage') }}</p>
      <NuxtLink to="/#projects" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all">
        <Icon name="mdi:arrow-left" class="mr-2" />
        {{ $t('projects.backToProjects') }}
      </NuxtLink>
    </div>
    
    <!-- Project Content -->
    <template v-else>
      <!-- Hero Section -->
      <div class="relative">
        <!-- Hero Background with Overlay -->
        <div class="bg-neutral-800">
          <div class="absolute inset-0 opacity-20 overflow-hidden">
            <NuxtImg
              v-if="project.image_url"
              :src="project.image_url"
              :alt="translate(project.title)"
              class="w-full h-full object-cover object-center filter blur-md"
              loading="lazy"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900"></div>
          
          <!-- Header Content -->
          <div class="container-custom relative z-10 pt-24 pb-16">
            <!-- Back Button -->
            <div class="mb-8">
              <NuxtLink 
                to="/#projects" 
                class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Icon name="mdi:arrow-left" class="mr-2" />
                {{ $t('projects.backToProjects') }}
              </NuxtLink>
            </div>
            
            <!-- Project Header -->
            <div class="flex flex-col md:flex-row gap-8">
              <!-- Title and Info -->
              <div class="md:w-2/3">
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">{{ translate(project.title) }}</h1>
                
                <!-- Technologies -->
                <div v-if="project.technologies && project.technologies.length" class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="text-sm bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- Completion Date -->
                <div v-if="project.completion_date" class="text-neutral-400 mb-6">
                  {{ $t('projects.completed') }}: {{ formatDate(project.completion_date) }}
                </div>
              </div>
              
              <!-- Featured Image -->
              <div class="md:w-1/3">
                <div class="rounded-lg overflow-hidden shadow-lg">
                  <NuxtImg
                    v-if="project.image_url"
                    :src="project.image_url"
                    :alt="translate(project.title)"
                    width="500"
                    height="300"
                    format="webp"
                    quality="90"
                    class="w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main Content -->
        <div class="container-custom py-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <!-- Project Description -->
            <div class="lg:col-span-7 space-y-6">
              <h2 class="text-2xl font-bold text-white mb-4">{{ $t('projects.overview') }}</h2>
              <div class="text-neutral-300 space-y-4">
                <p>{{ translate(project.description) }}</p>
              </div>
            </div>
            
            <!-- Project Details Sidebar -->
            <div class="lg:col-span-5">
              <div class="bg-neutral-800 rounded-xl p-6 shadow-lg">
                <h3 class="text-xl font-bold text-white mb-4">{{ $t('projects.projectDetails') }}</h3>
                
                <!-- Project Metadata -->
                <div class="space-y-4">
                  <div>
                    <h4 class="text-sm font-medium text-neutral-400 mb-1">{{ $t('projects.completed') }}</h4>
                    <p class="text-white">{{ formatDate(project.completion_date) }}</p>
                  </div>
                  
                  <div v-if="project.technologies && project.technologies.length">
                    <h4 class="text-sm font-medium text-neutral-400 mb-1">{{ $t('projects.technologies') }}</h4>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in project.technologies" 
                        :key="tech"
                        class="text-sm bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project Gallery -->
          <div v-if="project.images && project.images.length > 1" class="mt-16">
            <h2 class="text-2xl font-bold text-white mb-6">{{ $t('projects.projectGallery') }}</h2>
            
            <!-- Gallery Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div 
                v-for="(image, index) in project.images" 
                :key="index"
                class="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer"
                @click="openGallery(index)"
              >
                <NuxtImg
                  :src="image"
                  :alt="`${translate(project.title)} - Image ${index + 1}`"
                  width="400"
                  height="300"
                  format="webp"
                  quality="80"
                  class="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Image Gallery Modal -->
      <client-only>
        <Teleport to="body">
          <div 
            v-if="galleryOpen" 
            class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            @click="closeGallery"
          >
            <button 
              @click="closeGallery" 
              class="absolute top-4 right-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 z-10"
            >
              <Icon name="mdi:close" size="24" />
            </button>
            
            <!-- Main Image -->
            <div class="relative w-full max-w-6xl px-4" @click.stop>
              <NuxtImg
                :src="project.images[currentImageIndex]" 
                :alt="`${translate(project.title)} - Image ${currentImageIndex + 1}`"
                width="1200"
                height="800"
                format="webp"
                quality="90"
                class="w-full max-h-[80vh] object-contain"
              />
              
              <!-- Navigation Arrows -->
              <button 
                @click.stop="prevGalleryImage"
                class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
              >
                <Icon name="mdi:chevron-left" size="32" />
              </button>
              <button 
                @click.stop="nextGalleryImage"
                class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3"
              >
                <Icon name="mdi:chevron-right" size="32" />
              </button>
              
              <!-- Image Counter -->
              <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full">
                {{ currentImageIndex + 1 }} / {{ project.images.length }}
              </div>
            </div>
          </div>
        </Teleport>
      </client-only>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useTranslation } from '~/composables/useTranslation';
import { getProjectById, type Project } from '~/composables/useSupabase';

// Get translation utilities
const { translate, translateObject, setupPageMeta } = useTranslation();

// Route params
const route = useRoute();
const projectId = route.params.id as string;

// State
const rawProject = ref<Project | null>(null);
const loading = ref(true);
const error = ref(false);
const galleryOpen = ref(false);
const currentImageIndex = ref(0);

// Translated project
const project = computed(() => {
  if (!rawProject.value) return {} as Project;
  return translateObject(rawProject.value);
});

// Head metadata
useHead({
  title: computed(() => project.value.title ? `${project.value.title} | ${t('projects.projectDetails')}` : t('projects.projectDetails')),
  meta: [
    {
      name: 'description',
      content: computed(() => {
        const desc = project.value.description;
        if (typeof desc === 'string') {
          return desc.substring(0, 160);
        }
        return t('projects.projectDetails');
      })
    }
  ]
});

// Load project data
onMounted(async () => {
  try {
    const projectData = await getProjectById(projectId);
    
    if (!projectData) {
      error.value = true;
    } else {
      rawProject.value = projectData;
      
      // Set page metadata
      setupPageMeta(
        'projects.projectDetails', 
        'projects.projectDetailsDescription'
      );
    }
  } catch (err) {
    error.value = true;
    console.error('Error fetching project:', err);
  } finally {
    loading.value = false;
  }
});

// Format date
const formatDate = (dateString: string) => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric'
  });
};

// Gallery functions
const openGallery = (index: number) => {
  currentImageIndex.value = index;
  galleryOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent scrolling
};

const closeGallery = () => {
  galleryOpen.value = false;
  document.body.style.overflow = ''; // Re-enable scrolling
};

const nextGalleryImage = () => {
  if (!project.value?.images) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % project.value.images.length;
};

const prevGalleryImage = () => {
  if (!project.value?.images) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + project.value.images.length) % project.value.images.length;
};

// Keyboard navigation
const handleKeyDown = (e: KeyboardEvent) => {
  if (!galleryOpen.value) return;
  
  if (e.key === 'Escape') {
    closeGallery();
  } else if (e.key === 'ArrowLeft') {
    prevGalleryImage();
  } else if (e.key === 'ArrowRight') {
    nextGalleryImage();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = ''; // Ensure scroll is enabled when component unmounts
});
</script>

<style scoped>
.gallery-item {
  overflow: hidden;
}

.gallery-item img {
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}
</style>