<!--components/ui/AnimatedHeading.vue (Updated)-->
<template>
  <div class="relative">
    <h2
      ref="headingRef"
      :class="[
        'animated-heading',
        isVisible ? 'is-visible' : '',
        textClass
      ]"
    >
      <span class="relative z-10">{{ text }}</span>
      
      <!-- Optional decorative line under heading -->
      <span
        v-if="withLine"
        class="heading-line"
        :class="{ 'is-visible': isVisible }"
      ></span>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  textClass: {
    type: String,
    default: 'text-3xl font-bold mb-8 text-white'
  },
  withLine: {
    type: Boolean,
    default: true
  }
});

const headingRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  // Set up intersection observer for entrance animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  
  if (headingRef.value) {
    observer.observe(headingRef.value);
  }
});
</script>

<style scoped>
.animated-heading {
  overflow: hidden;
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.7s ease, opacity 0.7s ease;
}

.animated-heading.is-visible {
  transform: translateY(0);
  opacity: 1;
}

.heading-line {
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  transition: width 0.7s ease 0.3s;
  border-radius: 2px;
}

.heading-line.is-visible {
  width: 60px;
}

@media (min-width: 768px) {
  .heading-line.is-visible {
    width: 80px;
  }
}
</style>