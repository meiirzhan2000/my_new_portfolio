<!--index.vue-->
<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Career Section -->
    <CareerSection />
    
    <!-- Skills Section -->
    <SkillsSection />
    
    <!-- Projects Section -->
    <ProjectsSection/>

    <!-- Achievements Section-->
    <AchievmentsSection/>
    
    <!-- Interests Section -->
    <InterestsSection />
    
    <!-- Contact Section -->
    <ContactSection/>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeroSection from '~/components/sections/HeroSection.vue';
import CareerSection from '~/components/sections/CareerSection.vue';
import SkillsSection from '~/components/sections/SkillsSection.vue';
import InterestsSection from '~/components/sections/InterestSection.vue';
import AnimatedHeading from '~/components/ui/AnimatedHeading.vue';
import { useProjects } from '~/composables/useSupabase';
import ContactSection from '~/components/sections/ContactSection.vue';
import ProjectsSection from '~/components/sections/ProjectsSection.vue';
import AchievmentsSection from '~/components/sections/AchievmentsSection.vue';

</script>