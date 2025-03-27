<template>
  <ClientOnly>
    <button 
      @click="toggleLanguage"
      class="language-toggle flex items-center justify-center w-10 h-10 rounded-full transition-all"
      :class="{ 'opacity-75': isTranslating }"
      aria-label="Switch Language"
      :title="isEnglish ? 'Переключить на русский' : 'Switch to English'"
    >
      <span class="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {{ isEnglish ? 'RU' : 'EN' }}
      </span>
    </button>
    
    <!-- Fallback during SSR -->
    <template #fallback>
      <div class="language-toggle-placeholder w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm"></div>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useTranslation } from '~/composables/useTranslation';

const { isEnglish, toggleLanguage, isTranslating } = useTranslation();
</script>

<style scoped>
.language-toggle {
  @apply bg-neutral-100 dark:bg-neutral-800;
  @apply border border-neutral-200 dark:border-neutral-700;
  @apply hover:bg-neutral-200 dark:hover:bg-neutral-700;
  @apply shadow-sm hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500;
}

.language-toggle:hover {
  @apply transform scale-105;
}

.language-toggle:active {
  @apply transform scale-95;
}

.language-toggle-placeholder {
  @apply flex items-center justify-center;
}
</style>