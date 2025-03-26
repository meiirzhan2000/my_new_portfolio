<template>
  <section id="achievements" class="section bg-neutral-800 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('achievements.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Tabs Navigation -->
      <SectionTransition>
        <div class="flex flex-wrap justify-center mb-10 gap-2">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            :class="activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-700'"
            @click="activeTab = tab.id"
          >
            {{ $t(tab.nameKey) }}
          </button>
        </div>
      </SectionTransition>
      
      <!-- Awards & Honors Tab -->
      <div v-if="activeTab === 'awards'" class="space-y-8">
        <SectionTransition>
          <div class="award-card bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
            <div class="p-6 md:p-8">
              <div class="flex items-start gap-6">
                <!-- Award Icon -->
                <div class="award-badge hidden md:flex shrink-0 w-16 h-16 bg-blue-600/20 rounded-full items-center justify-center">
                  <Icon name="mdi:trophy" class="text-blue-400" size="32" />
                </div>
                
                <!-- Award Content -->
                <div class="space-y-4">
                  <h3 class="text-xl md:text-2xl font-bold text-white">{{ $t('achievements.awardTitle') }}</h3>
                  <div class="flex items-center text-neutral-400 text-sm">
                    <span class="flex items-center">
                      <Icon name="mdi:medal" class="mr-1" />
                      {{ $t('achievements.awardOrganization') }}
                    </span>
                    <span class="mx-3">|</span>
                    <span class="flex items-center">
                      <Icon name="mdi:calendar" class="mr-1" />
                      {{ $t('achievements.awardDate') }}
                    </span>
                    <span class="mx-3">|</span>
                    <span class="flex items-center">
                      <Icon name="mdi:school" class="mr-1" />
                      {{ $t('achievements.awardSchool') }}
                    </span>
                  </div>
                  <p class="text-neutral-300">
                    {{ $t('achievements.awardDescription') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
      
      <!-- Certifications Tab -->
      <div v-if="activeTab === 'certifications'" class="space-y-8">
        <!-- Loading State -->
        <div v-if="loading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
        </div>
        
        <!-- Certification Organization Groups -->
        <template v-else>
          <SectionTransition v-for="(group, groupIndex) in translatedCertificationGroups" :key="group.organization" :delay="groupIndex * 100">
            <!-- Organization Header -->
            <div class="mb-4">
              <div class="flex items-center mb-4">
                <div class="h-1 w-6 bg-blue-500 rounded-full mr-2"></div>
                <h3 class="text-xl font-bold text-blue-400">{{ group.organization }}</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div 
                  v-for="cert in group.certifications" 
                  :key="cert.id"
                  class="bg-neutral-900 rounded-lg border border-neutral-700 p-5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div class="flex items-start gap-4">
                    <!-- Logo/Icon based on organization -->
                    <div class="certification-icon shrink-0 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                      <Icon :name="getIconForOrganization(cert.issuing_organization)" class="text-blue-400" size="24" />
                    </div>
                    
                    <!-- Certificate Details -->
                    <div class="space-y-2">
                      <h4 class="text-lg font-semibold text-white">{{ cert.name }}</h4>
                      <div class="text-neutral-400 text-sm">
                        {{ formatDate(cert.issue_date) }}
                      </div>
                      
                      <!-- Skills Tags -->
                      <div v-if="cert.skills && cert.skills.length" class="flex flex-wrap gap-1 mt-2">
                        <span 
                          v-for="skill in cert.skills.slice(0, 3)" 
                          :key="skill"
                          class="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                        >
                          {{ skill }}
                        </span>
                        <span 
                          v-if="cert.skills.length > 3" 
                          class="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full"
                        >
                          +{{ cert.skills.length - 3 }}
                        </span>
                      </div>
                      
                      <!-- Credential Link -->
                      <div v-if="cert.credential_url" class="mt-2">
                        <a 
                          :href="cert.credential_url" 
                          target="_blank"
                          rel="noopener noreferrer" 
                          class="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                        >
                          <Icon name="mdi:certificate" class="mr-1" />
                          {{ $t('achievements.viewCredential') }}
                          <Icon name="mdi:open-in-new" class="ml-1" size="14" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useCertifications, type Certification } from '~/composables/useCertifications';
import { useTranslation } from '~/composables/useTranslation';
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';

// Get translation utilities
const { translate, translateArray } = useTranslation();

// Available tabs
const tabs = [
  { id: 'awards', nameKey: 'achievements.awardsTab' },
  { id: 'certifications', nameKey: 'achievements.certificationsTab' }
];

// State
const activeTab = ref('awards');
const certifications = ref<Certification[]>([]);
const loading = ref(true);

// Load certifications data
onMounted(async () => {
  try {
    certifications.value = await useCertifications();
  } catch (err) {
    console.error('Error fetching certifications:', err);
  } finally {
    loading.value = false;
  }
});

// Group certifications by organization
const certificationGroups = computed(() => {
  const groups: { organization: string; certifications: Certification[] }[] = [];
  
  // Get unique organizations
  const organizations = [...new Set(certifications.value.map(cert => cert.issuing_organization))];
  
  // Create groups
  organizations.forEach(org => {
    const certs = certifications.value.filter(cert => cert.issuing_organization === org);
    groups.push({
      organization: org,
      certifications: certs
    });
  });
  
  return groups;
});

// Apply translations to certification groups
const translatedCertificationGroups = computed(() => {
  return certificationGroups.value.map(group => {
    return {
      organization: group.organization,
      certifications: translateArray(group.certifications)
    };
  });
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
    'Cisco': 'mdi:router-network'
  };
  
  return iconMap[organization] || 'mdi:certificate';
};
</script>

<style scoped>
.award-card {
  position: relative;
  overflow: hidden;
}

.award-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%);
  z-index: 0;
}

.award-badge {
  position: relative;
  z-index: 1;
}

.certification-icon {
  transition: all 0.3s ease;
}

/* Group hover effect */
.bg-neutral-900:hover .certification-icon {
  background-color: rgba(59, 130, 246, 0.1);
}
</style>