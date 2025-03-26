<template>
    <div class="icon-wrapper">
      <!-- Render placeholder icon when actual icon can't be loaded -->
      <span class="placeholder-icon" :style="{ color: color, fontSize: `${size}px` }">
        <fa-icon v-if="getFallbackIcon" :icon="getFallbackIcon" />
        <span v-else>{{ name.slice(0, 2) }}</span>
      </span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  });
  
  // Map react-icons to FontAwesome icons for fallback
  const iconMap = {
    // DevIcons
    'DiHtml5': ['fab', 'html5'],
    'DiCss3': ['fab', 'css3'],
    'DiJavascript': ['fab', 'js'],
    'DiReact': ['fab', 'react'],
    'DiNodejs': ['fab', 'node'],
    'DiGit': ['fab', 'git'],
    'DiBootstrap': ['fab', 'bootstrap'],
    'DiJava': ['fab', 'java'],
    'DiVuejs': ['fab', 'vuejs'],
    'DiPython': ['fab', 'python'],
    'DiMysql': ['fas', 'database'],
    'DiAws': ['fab', 'aws'],
    'DiGoogleCloudPlatform': ['fab', 'google'],
    'DiAndroid': ['fab', 'android'],
    'DiApple': ['fab', 'apple'],
    'DiNuxtjs': ['fab', 'vuejs'],
    
    // Tabler Icons
    'TbBrandReactNative': ['fab', 'react'],
    'TbBrandKotlin': ['fas', 'code'],
    'TbBrandCSharp': ['fas', 'code'],
    'TbSql': ['fas', 'database'],
    'TbDatabaseSearch': ['fas', 'database'],
    
    // Remix Icons
    'RiFlutterLine': ['fas', 'code'],
    
    // Grommet Icons
    'GrAchievement': ['fas', 'trophy'],
    'GrUserManager': ['fas', 'user-tie'],
    'GrTime': ['fas', 'clock'],
    'GrTask': ['fas', 'tasks'],
    'GrGroup': ['fas', 'users']
  };
  
  const getFallbackIcon = computed(() => {
    return iconMap[props.name] || ['fas', 'code'];
  });
  </script>
  
  <style scoped>
  .icon-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .placeholder-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  </style>