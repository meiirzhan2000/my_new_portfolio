<!--components/ui/SectionTransition.vue (Updated)-->
<template>
  <div
    ref="sectionRef"
    :class="[
      'section-transition',
      animation,
      isVisible ? 'is-visible' : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
  animation: {
    type: String,
    default: 'fade-in'
  },
  delay: {
    type: Number,
    default: 0
  },
  threshold: {
    type: Number,
    default: 0.1
  }
});

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  // Set up intersection observer for entrance animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          if (props.delay > 0) {
            setTimeout(() => {
              isVisible.value = true;
            }, props.delay);
          } else {
            isVisible.value = true;
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { 
      threshold: props.threshold,
      rootMargin: '0px 0px -50px 0px' // Adjust rootMargin to trigger animation a bit earlier
    }
  );
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<style scoped>
.section-transition {
  transition-property: opacity, transform;
  transition-duration: 0.8s;
  transition-timing-function: ease-out;
  will-change: opacity, transform;
}

/* Apply different initial states based on animation type */
.fade-in {
  opacity: 0;
}

.slide-up {
  opacity: 0;
  transform: translateY(40px);
}

.slide-down {
  opacity: 0;
  transform: translateY(-40px);
}

.slide-left {
  opacity: 0;
  transform: translateX(40px);
}

.slide-right {
  opacity: 0;
  transform: translateX(-40px);
}

.scale-up {
  opacity: 0;
  transform: scale(0.8);
}

.scale-down {
  opacity: 0;
  transform: scale(1.2);
}

/* Visible state for all animations */
.section-transition.is-visible {
  opacity: 1;
  transform: none;
}
</style>