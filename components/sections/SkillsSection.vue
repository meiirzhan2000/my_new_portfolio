<template>
  <section id="skills" class="section bg-neutral-800 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('skills.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Skills Categories -->
      <div class="space-y-16">
        <div 
          v-for="(category, categoryIndex) in skillsData" 
          :key="categoryIndex"
          class="skills-category"
        >
          <!-- Category Title (if available) -->
          <SectionTransition v-if="translate(category.title)">
            <div class="flex items-center mb-8">
              <div class="h-1 w-10 bg-blue-500 rounded-full mr-3"></div>
              <h3 class="text-2xl font-bold text-blue-400">{{ translate(category.title) }}</h3>
            </div>
          </SectionTransition>
          
          <!-- Skills Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SectionTransition 
              v-for="(skill, skillIndex) in category.skills" 
              :key="skillIndex"
              :delay="skillIndex * 50"
            >
              <div 
                class="skill-card bg-neutral-700/50 border border-neutral-600 rounded-lg p-5 hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
              >
                <div class="flex items-start space-x-4">
                  <!-- Skill Icon -->
                  <div class="skill-icon-container flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon :name="getIconName(skill.icon)" size="28" />
                  </div>
                  
                  <!-- Skill Info -->
                  <div class="flex-1">
                    <h4 class="text-white text-lg font-medium mb-1">{{ skill.skill }}</h4>
                    <p class="text-neutral-400 text-sm">{{ translate(skill.info) }}</p>
                  </div>
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation';
import skillsData from '~/data/skills';
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';

// Get translation function
const { translate } = useTranslation();

// Map React Icons library names to Nuxt Icon/MDI names
const getIconName = (iconName: string): string => {
  // Map for React Icons to MDI (Material Design Icons)
  const iconMap: Record<string, string> = {
    // Dev Icons
    'DiHtml5': 'mdi:language-html5',
    'DiCss3': 'mdi:language-css3',
    'DiJavascript': 'mdi:language-javascript',
    'DiReact': 'mdi:react',
    'RiFlutterLine': 'mdi:flutter',
    'TbBrandReactNative': 'mdi:react',
    'DiNodejs': 'mdi:nodejs',
    'DiGit': 'mdi:git',
    'DiBootstrap': 'mdi:bootstrap',
    'DiVuejs': 'mdi:vuejs',
    'DiNuxtjs': 'mdi:nuxt',
    'DiJava': 'mdi:language-java',
    'TbBrandKotlin': 'mdi:kotlin',
    'TbBrandCSharp': 'mdi:language-csharp',
    'DiPython': 'mdi:language-python',
    'TbSql': 'mdi:database',
    'TbDatabaseSearch': 'mdi:database-search',
    'DiMysql': 'mdi:database',
    'DiAws': 'mdi:aws',
    'DiGoogleCloudPlatform': 'mdi:google-cloud',
    'DiAndroid': 'mdi:android',
    'DiApple': 'mdi:apple',
    
    // Other Icons
    'GrAchievement': 'mdi:trophy',
    'GrUserManager': 'mdi:account-supervisor',
    'GrTime': 'mdi:clock-time-four',
    'GrTask': 'mdi:checkbox-marked-circle',
    'GrGroup': 'mdi:account-group'
  };
  
  return iconMap[iconName] || 'mdi:code-tags'; // Default icon if not found
};
</script>

<style scoped>
.skills-category:not(:first-child) {
  margin-top: 3rem;
}

.skill-card {
  backdrop-filter: blur(8px);
  height: 100%;
}

.skill-icon-container {
  transition: all 0.3s ease;
}

.skill-card:hover .skill-icon-container {
  transform: scale(1.1);
}

/* Ensure consistent height for all cards */
.skill-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Overlay effect on hover */
.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 0.5rem;
  pointer-events: none;
}

.skill-card:hover::before {
  opacity: 1;
}
</style>