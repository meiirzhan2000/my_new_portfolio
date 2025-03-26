<template>
    <div class="skill-item">
      <div class="skill-icon">
        <ReactIcon :name="skill.icon" :size="24" :color="iconColor" />
      </div>
      <div class="skill-content">
        <h3 class="skill-name">{{ skill.skill }}</h3>
        <p class="skill-info">{{ skill.info }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ReactIcon from '~/components/ui/ReactIcon.vue';
  import type { SkillItem } from '~/types';
  
  const props = defineProps({
    skill: {
      type: Object as () => SkillItem,
      required: true
    },
    iconColor: {
      type: String,
      default: '#3B82F6' // primary-500 color
    }
  });
  </script>
  
  <style scoped>
  .skill-item {
    @apply flex items-start gap-3 py-3 px-2 rounded-lg transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800;
  }
  
  .skill-icon {
    @apply flex-shrink-0 w-8 h-8 flex items-center justify-center;
  }
  
  .skill-content {
    @apply flex-grow;
  }
  
  .skill-name {
    @apply text-lg font-medium text-neutral-800 dark:text-neutral-200;
  }
  
  .skill-info {
    @apply text-sm text-neutral-600 dark:text-neutral-400 mt-1;
  }
  </style>