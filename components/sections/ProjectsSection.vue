<template>
  <section id="projects" class="section bg-neutral-900 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('projects.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Filter Tabs -->
      <SectionTransition>
        <div class="flex flex-wrap justify-center mb-10 gap-2">
          <button 
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedCategory === null ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
            @click="selectedCategory = null"
          >
            {{ $t('projects.allProjects') }}
          </button>
          <button 
            v-for="category in categories" 
            :key="category"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </SectionTransition>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-400">Error loading projects. Please try again later.</p>
      </div>
      
      <!-- Empty State -->
      <div v-else-if="filteredProjects.length === 0" class="text-center py-12">
        <p class="text-neutral-400">No projects found for the selected category.</p>
      </div>
      
      <!-- Projects Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <SectionTransition 
          v-for="(project, index) in translatedProjects" 
          :key="project.id"
          :delay="index * 100"
        >
          <div 
            class="project-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
          >
            <!-- Project Image -->
            <div class="project-image-container relative overflow-hidden group">
              <NuxtImg
                v-if="project.image_url"
                :src="project.image_url" 
                :alt="project.title"
                width="500"
                height="300"
                format="webp"
                quality="80"
                class="w-full h-48 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div v-if="project.technologies && project.technologies.length" class="flex flex-wrap gap-1">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech"
                    class="text-xs bg-blue-800/70 text-blue-100 px-2 py-1 rounded-full"
                  >
                    {{ tech }}
                  </span>
                  <span 
                    v-if="project.technologies.length > 3" 
                    class="text-xs bg-neutral-700/80 text-neutral-300 px-2 py-1 rounded-full"
                  >
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Project Content -->
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-neutral-400 text-sm mb-4 line-clamp-3 flex-1">{{ project.description }}</p>
              <div class="flex justify-between items-center mt-auto pt-2 border-t border-neutral-700/50">
                <span v-if="project.completion_date" class="text-xs text-neutral-500">
                  {{ formatDate(project.completion_date) }}
                </span>
                <button 
                  @click="openProjectDetails(project)" 
                  class="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
                >
                  {{ $t('projects.viewDetails') }}
                  <Icon name="mdi:arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
      
      <!-- Project Detail Modal -->
      <client-only>
        <Teleport to="body">
          <div 
            v-if="selectedProject" 
            class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            @click="closeProjectDetails"
          >
            <div 
              class="bg-neutral-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              @click.stop
            >
              <!-- Modal Close Button -->
              <button 
                @click="closeProjectDetails" 
                class="absolute top-4 right-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 z-10"
              >
                <Icon name="mdi:close" size="24" />
              </button>
              
              <!-- Project Content -->
              <div class="p-6 md:p-8">
                <h2 class="text-2xl md:text-3xl font-bold text-white mb-3">{{ selectedProject.title }}</h2>
                
                <!-- Technologies -->
                <div v-if="selectedProject.technologies && selectedProject.technologies.length" class="flex flex-wrap gap-2 mb-4">
                  <span 
                    v-for="tech in selectedProject.technologies" 
                    :key="tech"
                    class="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- Completion Date -->
                <div v-if="selectedProject.completion_date" class="text-neutral-400 text-sm mb-6">
                  {{ $t('projects.completed') }}: {{ formatDate(selectedProject.completion_date, 'full') }}
                </div>
                
                <!-- Image Gallery -->
                <div v-if="selectedProject.images && selectedProject.images.length" class="mb-6 overflow-hidden rounded-lg">
                  <div class="relative">
                    <!-- Main Image -->
                    <NuxtImg
                      :src="selectedProject.images[currentImageIndex]" 
                      :alt="`${selectedProject.title} - Image ${currentImageIndex + 1}`"
                      width="1000"
                      height="600"
                      format="webp"
                      quality="80"
                      class="w-full rounded-lg"
                      loading="lazy"
                    />
                    
                    <!-- Navigation Arrows -->
                    <button 
                      v-if="selectedProject.images.length > 1"
                      @click.prevent="prevImage"
                      class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    >
                      <Icon name="mdi:chevron-left" size="24" />
                    </button>
                    <button 
                      v-if="selectedProject.images.length > 1"
                      @click.prevent="nextImage"
                      class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                    >
                      <Icon name="mdi:chevron-right" size="24" />
                    </button>
                    
                    <!-- Image Counter -->
                    <div 
                      v-if="selectedProject.images.length > 1"
                      class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}
                    </div>
                  </div>
                  
                  <!-- Thumbnail Navigation -->
                  <div 
                    v-if="selectedProject.images.length > 1"
                    class="flex gap-2 mt-2 overflow-x-auto pb-2 thumbnail-container"
                  >
                    <button 
                      v-for="(image, index) in selectedProject.images"
                      :key="index"
                      @click="currentImageIndex = index"
                      class="relative flex-shrink-0 h-14 w-20 rounded overflow-hidden"
                      :class="{ 'ring-2 ring-blue-500': currentImageIndex === index }"
                    >
                      <NuxtImg
                        :src="image" 
                        :alt="`${selectedProject.title} - Thumbnail ${index + 1}`"
                        width="100"
                        height="80"
                        format="webp"
                        quality="50"
                        class="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  </div>
                </div>
                
                <!-- Project Description -->
                <div class="text-neutral-300 text-base space-y-4">
                  <p>{{ selectedProject.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </client-only>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useProjects, type Project } from '~/composables/useSupabase';
import { useTranslation } from '~/composables/useTranslation';
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';

// Get translation utilities
const { translate, translateArray, translateObject } = useTranslation();

// State
const projects = ref<Project[]>([]);
const loading = ref(true);
const error = ref(false);
const selectedCategory = ref<string | null>(null);
const selectedProject = ref<Project | null>(null);
const currentImageIndex = ref(0);

// Load projects
onMounted(async () => {
  try {
    projects.value = await useProjects();
  } catch (err) {
    error.value = true;
    console.error('Error fetching projects:', err);
  } finally {
    loading.value = false;
  }
});

// Translate projects
const translatedProjects = computed(() => {
  return translateArray(filteredProjects.value);
});

// Unique categories derived from project technologies
const categories = computed(() => {
  const allTechnologies = projects.value.flatMap(project => project.technologies || []);
  const uniqueTechnologies = [...new Set(allTechnologies)];
  
  // Return the top used technologies (adjust this based on your data)
  return uniqueTechnologies.slice(0, 6);
});

// Filter projects based on selected category
const filteredProjects = computed(() => {
  if (!selectedCategory.value) {
    return projects.value;
  }
  
  return projects.value.filter(project => 
    project.technologies?.includes(selectedCategory.value as string)
  );
});

// Format date 
const formatDate = (dateString: string, style: 'short' | 'full' = 'short') => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  
  if (style === 'short') {
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric'
  });
};

// Open project details modal
const openProjectDetails = (project: Project) => {
  selectedProject.value = translateObject(project);
  currentImageIndex.value = 0;
  document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
};

// Close project details modal
const closeProjectDetails = () => {
  selectedProject.value = null;
  document.body.style.overflow = ''; // Re-enable scrolling
};

// Navigation for project images
const nextImage = () => {
  if (!selectedProject.value?.images) return;
  
  currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length;
};

const prevImage = () => {
  if (!selectedProject.value?.images) return;
  
  currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length;
};

// Handle keyboard navigation 
const handleKeyDown = (e: KeyboardEvent) => {
  if (!selectedProject.value) return;
  
  if (e.key === 'Escape') {
    closeProjectDetails();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  }
};

// Add and remove keyboard event listeners
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Project card styling */
.project-image-container {
  background-color: rgba(17, 24, 39, 0.5);
}

/* Hide scrollbar but allow scrolling in thumbnails */
.thumbnail-container {
  scrollbar-width: thin;
  scrollbar-color: #4B5563 transparent;
}

.thumbnail-container::-webkit-scrollbar {
  height: 6px;
}

.thumbnail-container::-webkit-scrollbar-track {
  background: transparent;
}

.thumbnail-container::-webkit-scrollbar-thumb {
  background-color: #4B5563;
  border-radius: 20px;
}
</style>