<!--layouts/default.vue (Updated with Language Switch)-->
<template>
  <div class="flex flex-col min-h-screen bg-neutral-900 text-neutral-50">
    <!-- Animated Header -->
    <header
      ref="mainHeader"
      class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800 header-animation"
      :class="{ 'is-visible': isHeaderVisible }"
    >
      <div class="container-custom py-4">
        <nav class="flex items-center justify-between">
          <!-- Animated Logo -->
          <NuxtLink
            to="/"
            class="text-xl font-bold text-primary-400 logo-animation"
          >
            {{ $t("nav.portfolio") }}
          </NuxtLink>

          <!-- Navigation Links with Staggered Animation -->
          <ul
            class="hidden md:flex items-center space-x-8 nav-items-container"
            :class="{ 'is-visible': isHeaderVisible }"
          >
            <li
              v-for="(item, index) in navItems"
              :key="item.href"
              class="nav-item"
              :style="{ 'animation-delay': `${index * 0.1 + 0.2}s` }"
            >
              <NuxtLink
                :to="item.href"
                class="text-neutral-300 hover:text-primary-400 transition-colors relative group"
              >
                {{ $t(`nav.${item.key}`) }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full"
                ></span>
              </NuxtLink>
            </li>

            <!-- Language Toggle Button -->
            <li class="nav-item" :style="{ 'animation-delay': '0.9s' }">
              <button
                @click="toggleLanguage"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all"
                :class="{ 'opacity-50': isTranslating }"
                aria-label="Switch Language"
                :title="
                  isEnglish ? 'Переключить на русский' : 'Switch to English'
                "
              >
                <span class="text-sm font-medium">{{
                  isEnglish ? "RU" : "EN"
                }}</span>
              </button>
            </li>
          </ul>

          <!-- Mobile Menu Button with Animation -->
          <div class="md:hidden flex items-center space-x-3">
            <!-- Language Toggle for Mobile -->
            <button
              @click="toggleLanguage"
              class="p-2 rounded-md text-neutral-400 hover:text-neutral-100 transition-colors"
              :class="{ 'opacity-50': isTranslating }"
              aria-label="Switch Language"
              :title="
                isEnglish ? 'Переключить на русский' : 'Switch to English'
              "
            >
              <span class="text-sm font-medium">{{
                isEnglish ? "RU" : "EN"
              }}</span>
            </button>

            <!-- Mobile Menu Toggle -->
            <button
              @click="toggleMobileMenu"
              class="p-2 rounded-md text-neutral-400 hover:text-neutral-100 transition-transform duration-300"
              :class="{ 'rotate-90': isMobileMenuOpen }"
              aria-label="Toggle mobile menu"
            >
              <svg
                v-if="!isMobileMenuOpen"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <!-- Mobile Menu with Transition -->
      <Transition name="mobile-menu">
        <div
          v-show="isMobileMenuOpen"
          class="md:hidden bg-black border-t border-neutral-800"
        >
          <div class="container-custom py-4">
            <ul class="space-y-4">
              <li
                v-for="(item, index) in navItems"
                :key="item.href"
                class="mobile-nav-item"
                :style="{ 'animation-delay': `${index * 0.05}s` }"
              >
                <NuxtLink
                  :to="item.href"
                  @click="toggleMobileMenu"
                  class="block py-2 text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  {{ $t(`nav.${item.key}`) }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-black border-t border-neutral-800">
      <div class="container-custom py-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p class="text-neutral-400">
            &copy; {{ new Date().getFullYear() }} {{ $t("footer.copyright") }}
          </p>

          <div class="flex space-x-4">
            <a
              v-for="(link, index) in socialLinks"
              :key="link.platform"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="footer-icon-animation"
              :style="{ 'animation-delay': `${index * 0.1}s` }"
              :title="$t(`social.${link.platform.toLowerCase()}`)"
            >
              <fa-icon
                :icon="link.icon"
                class="text-xl text-neutral-400 hover:text-primary-400 transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useTranslation } from "~/composables/useTranslation";
import type { SocialLink } from "~/types";

const isMobileMenuOpen = ref(false);
const isHeaderVisible = ref(false);
const mainHeader = ref(null);

// Get translation functions
const { isEnglish, toggleLanguage, isTranslating } = useTranslation();

// Navigation items
const navItems = [
  { key: "home", href: "#" },
  { key: "career", href: "#career" },
  { key: "projects", href: "#projects" },
  { key: "skills", href: "#skills" },
  { key: "achievements", href: "#achievements" },
  { key: "interests", href: "#interests" },
  { key: "contact", href: "#contact" },
];

// Placeholder social links
const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/meiirzhan2000",
    icon: ["fab", "github"],
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/",
    icon: ["fab", "linkedin"],
  },
];

// Toggle mobile menu with animation timing
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Initialize header animation on mount
onMounted(() => {
  // Small delay to ensure everything is rendered
  setTimeout(() => {
    isHeaderVisible.value = true;
  }, 100);

  // Add scroll effect to header
  const handleScroll = () => {
    if (mainHeader.value) {
      const headerElement = mainHeader.value as HTMLElement;
      if (window.scrollY > 30) {
        headerElement.classList.add("header-scrolled");
      } else {
        headerElement.classList.remove("header-scrolled");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up event listener
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style scoped>
/* Header Animation */
.header-animation {
  transform: translateY(-100%);
  transition: transform 0.6s ease-out, background-color 0.3s ease;
}

.header-animation.is-visible {
  transform: translateY(0);
}

/* Header scroll effect */
.header-scrolled {
  background-color: rgba(0, 0, 0, 0.95) !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

/* Logo Animation */
.logo-animation {
  position: relative;
  animation: slide-in-right 0.5s ease-out forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

/* Navigation Items Animation */
.nav-items-container .nav-item {
  opacity: 0;
  transform: translateY(-20px);
  animation: fade-in-down 0.5s ease forwards;
}

.nav-items-container.is-visible .nav-item {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Menu Animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 400px;
  overflow: hidden;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
}

.mobile-nav-item {
  animation: slide-in-right 0.3s ease forwards;
  opacity: 0;
}

/* Footer Icons Animation */
.footer-icon-animation {
  animation: fade-in-up 0.5s ease forwards;
  opacity: 0;
}

/* Animation Keyframes */
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-right {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
