<template>
  <div class="certifications-page bg-neutral-900 min-h-screen">
    <!-- Header Area -->
    <div class="py-16 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div class="container-custom">
        <div class="mb-4">
          <NuxtLink 
            to="/#achievements" 
            class="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
          >
            <Icon name="mdi:arrow-left" class="mr-2" />
            {{ $t('achievements.backToAchievements') }}
          </NuxtLink>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ $t('achievements.certificationsTitle') }}</h1>
        <p class="text-neutral-400 text-lg max-w-3xl">
          {{ $t('achievements.certificationsDescription') }}
        </p>
      </div>
    </div>
    
    <div class="container-custom py-12">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      </div>
      
      <template v-else>
        <!-- Organization Filter -->
        <div class="flex flex-wrap justify-center mb-10 gap-2">
          <button 
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedOrganization === null ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
            @click="selectedOrganization = null"
          >
            {{ $t('achievements.allOrganizations') }}
          </button>
          <button 
            v-for="org in organizations" 
            :key="org"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="selectedOrganization === org ? 'bg-blue-600 text-white' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'"
            @click="selectedOrganization = org"
          >
            {{ org }}
          </button>
        </div>
        
        <!-- Timeline View -->
        <div class="relative mt-16">
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-700 transform -translate-x-1/2"></div>
          
          <!-- Certification Items -->
          <div class="space-y-16">
            <div 
              v-for="(cert, index) in filteredCertifications" 
              :key="cert.id"
              class="relative"
            >
              <!-- Timeline Dot -->
              <div class="hidden md:flex absolute left-1/2 top-0 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-neutral-900"></div>
              
              <!-- Content -->
              <div 
                class="md:w-5/12 ml-0 md:ml-auto md:mr-auto"
                :class="index % 2 === 0 ? 'md:mr-auto md:ml-0 md:pr-10' : 'md:ml-auto md:mr-0 md:pl-10'"
              >
                <div class="bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl">
                  <!-- Organization Logo -->
                  <div class="flex items-center justify-between mb-4">
                    <div class="certification-logo-container w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center">
                      <Icon :name="getIconForOrganization(cert.issuing_organization)" class="text-blue-400" size="28" />
                    </div>
                    <div class="text-sm text-neutral-400">
                      {{ formatDate(cert.issue_date) }}
                    </div>
                  </div>
                  
                  <!-- Certificate Details -->
                  <h3 class="text-xl font-bold text-white mb-2">{{ cert.name }}</h3>
                  <p class="text-blue-400 text-sm mb-4">{{ cert.issuing_organization }}</p>
                  
                  <!-- Skills -->
                  <div v-if="cert.skills && cert.skills.length" class="mb-4">
                    <h4 class="text-sm font-medium text-neutral-400 mb-2">{{ $t('achievements.skills') }}</h4>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="skill in cert.skills" 
                        :key="skill"
                        class="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                  
                  <!-- Credential Link -->
                  <div v-if="cert.credential_url" class="mt-4">
                    <a 
                      :href="cert.credential_url" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                    >
                      <Icon name="mdi:certificate" class="mr-2" />
                      {{ $t('achievements.viewCredential') }}
                      <Icon name="mdi:open-in-new" class="ml-2" size="14" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Awards Section -->
        <div class="mt-20">
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="mdi:trophy" class="mr-3 text-blue-400" />
            {{ $t('achievements.honorsAndAwards') }}
          </h2>
          
          <div class="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
            <div class="p-8">
              <div class="flex flex-col md:flex-row md:items-start gap-6">
                <!-- Award Badge -->
                <div class="award-badge md:w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  <Icon name="mdi:trophy" class="text-blue-400" size="40" />
                </div>
                
                <!-- Award Content -->
                <div class="space-y-4">
                  <h3 class="text-2xl font-bold text-white text-center md:text-left">{{ $t('achievements.awardTitle') }}</h3>
                  <div class="flex flex-col md:flex-row md:items-center text-neutral-400 text-sm gap-2 md:gap-0">
                    <span class="flex items-center justify-center md:justify-start">
                      <Icon name="mdi:medal" class="mr-1" />
                      {{ $t('achievements.awardOrganization') }}
                    </span>
                    <span class="hidden md:inline mx-3">|</span>
                    <span class="flex items-center justify-center md:justify-start">
                      <Icon name="mdi:calendar" class="mr-1" />
                      {{ $t('achievements.awardDate') }}
                    </span>
                    <span class="hidden md:inline mx-3">|</span>
                    <span class="flex items-center justify-center md:justify-start">
                      <Icon name="mdi:school" class="mr-1" />
                      {{ $t('achievements.awardSchool') }}
                    </span>
                  </div>
                  <p class="text-neutral-300 text-center md:text-left">
                    {{ $t('achievements.awardDescription') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCertifications, type Certification } from '~/composables/useCertifications';
import { useTranslation } from '~/composables/useTranslation';

// Get translation utilities
const { translate, translateArray, setupPageMeta } = useTranslation();

// State
const certifications = ref<Certification[]>([]);
const loading = ref(true);
const selectedOrganization = ref<string | null>(null);

// Setup page metadata
setupPageMeta('achievements.certificationsTitle', 'achievements.certificationsDescription');

// Load certifications data
onMounted(async () => {
  try {
    const rawCertifications = await useCertifications();
    certifications.value = translateArray(rawCertifications);
  } catch (err) {
    console.error('Error fetching certifications:', err);
  } finally {
    loading.value = false;
  }
});

// Get all unique organizations
const organizations = computed(() => {
  return [...new Set(certifications.value.map(cert => cert.issuing_organization))];
});

// Filter certifications by selected organization
const filteredCertifications = computed(() => {
  if (!selectedOrganization.value) {
    return certifications.value;
  }
  
  return certifications.value.filter(cert => 
    cert.issuing_organization === selectedOrganization.value
  );
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

// Get icon for organization
const getIconForOrganization = (organization: string) => {
  const iconMap: Record<string, string> = {
    'Microsoft Learning': 'mdi:microsoft',
    'Google': 'mdi:google',
    'Amazon': 'mdi:amazon',
    'Duke University': 'mdi:school',
    'Cisco': 'mdi:certificate'
  };
  
  return iconMap[organization] || 'mdi:certificate';
};
</script>

<style scoped>
.certification-logo-container {
  transition: all 0.3s ease;
}

.bg-neutral-800:hover .certification-logo-container {
  transform: scale(1.1);
  background-color: rgba(59, 130, 246, 0.2);
}

/* Timeline styles for desktop */
@media (min-width: 768px) {
  .space-y-16 > div:nth-child(odd) {
    padding-right: 3rem;
  }
  
  .space-y-16 > div:nth-child(even) {
    padding-left: 3rem;
  }
}

/* Award badge glow effect */
.award-badge {
  position: relative;
}

.award-badge::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.6;
  z-index: -1;
}
</style>