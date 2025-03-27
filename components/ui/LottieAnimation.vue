<!--components\ui\LottieAnimation.vue-->
<template>
  <div :style="{ width: width, height: height }" class="lottie-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, defineComponent } from 'vue';

defineComponent({
  name: 'LottieAnimation'
});

const props = defineProps({
  animationName: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100%'
  },
  loop: {
    type: Boolean,
    default: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  speed: {
    type: Number,
    default: 1
  }
});

const animationContainer = ref<HTMLElement | null>(null);
const anim = ref<any>(null);

onMounted(async () => {
  // Import lottie only on client side
  const lottieModule = await import('lottie-web');
  const lottie = lottieModule.default;
  
  animationContainer.value = document.querySelector('.lottie-container');
  
  if (animationContainer.value) {
    try {
      // Load animation file
      const animationPath = `/animations/${props.animationName}.json`;
      
      anim.value = lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: props.loop,
        autoplay: props.autoplay,
        path: animationPath,
      });
      
      // Set animation speed
      if (props.speed !== 1) {
        anim.value.setSpeed(props.speed);
      }
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
    }
  }
});

// Watch for prop changes
watch(() => props.animationName, async (newAnimationName) => {
  if (anim.value) {
    anim.value.destroy();
  }
  
  if (animationContainer.value) {
    try {
      // Import lottie only on client side
      const lottieModule = await import('lottie-web');
      const lottie = lottieModule.default;
      
      const animationPath = `/animations/${newAnimationName}.json`;
      
      anim.value = lottie.loadAnimation({
        container: animationContainer.value,
        renderer: 'svg',
        loop: props.loop,
        autoplay: props.autoplay,
        path: animationPath,
      });
      
      if (props.speed !== 1) {
        anim.value.setSpeed(props.speed);
      }
    } catch (error) {
      console.error('Error loading Lottie animation:', error);
    }
  }
});

// Clean up animation on component unmount
onUnmounted(() => {
  if (anim.value) {
    anim.value.destroy();
  }
});
</script>