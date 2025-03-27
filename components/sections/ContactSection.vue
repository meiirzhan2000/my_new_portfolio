<template>
  <section id="contact" class="section bg-neutral-800 py-16">
    <div class="container-custom">
      <!-- Section Heading -->
      <AnimatedHeading :text="$t('contact.title')" textClass="text-3xl lg:text-4xl font-bold mb-10 text-white" />
      
      <!-- Contact Card -->
      <div class="max-w-4xl mx-auto">
        <SectionTransition>
          <div class="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
            <div class="p-8 md:p-10">
              <!-- Introduction -->
              <div class="mb-10 text-center">
                <h3 class="text-2xl md:text-3xl text-white font-semibold mb-4">{{ $t('contact.letsConnect') }}</h3>
                <p class="text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                  {{ $t('contact.connectDescription') }}
                </p>
              </div>
              
              <!-- Contact Methods Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <!-- Email -->
                <div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                  <div class="flex items-start gap-4">
                    <div class="contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon name="mdi:email" size="32" />
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-xl font-medium text-white mb-2">{{ $t('contact.email') }}</h4>
                      <a href="mailto:rikimarubro@gmail.com" class="text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis">
                        rikimarubro@gmail.com
                      </a>
                      <p class="text-neutral-500 text-sm mt-2">
                        {{ $t('contact.emailDescription') }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- WhatsApp -->
                <div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                  <div class="flex items-start gap-4">
                    <div class="contact-icon-container flex-shrink-0 bg-green-600/20 p-4 rounded-lg text-green-400 group-hover:scale-110 transition-transform">
                      <Icon name="mdi:whatsapp" size="32" />
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-xl font-medium text-white mb-2">{{ $t('contact.whatsapp') }}</h4>
                      <a href="https://wa.me/77087134055" target="_blank" class="text-neutral-400 hover:text-green-400 transition-colors block overflow-hidden text-ellipsis">
                        +7 708 713 4055
                      </a>
                      <p class="text-neutral-500 text-sm mt-2">
                        {{ $t('contact.whatsappDescription') }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- LinkedIn -->
                <div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                  <div class="flex items-start gap-4">
                    <div class="contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon name="mdi:linkedin" size="32" />
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-xl font-medium text-white mb-2">{{ $t('contact.linkedin') }}</h4>
                      <a 
                        href="https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/" 
                        target="_blank" 
                        class="text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis"
                        title="linkedin.com/in/meiirzhan-baitangatov-871632248"
                      >
                        <span class="hidden sm:inline">linkedin.com/in/meiirzhan-baitangatov-871632248</span>
                        <span class="inline sm:hidden">Meiirzhan Baitangatov</span>
                      </a>
                      <p class="text-neutral-500 text-sm mt-2">
                        {{ $t('contact.linkedinDescription') }}
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- GitHub -->
                <div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group">
                  <div class="flex items-start gap-4">
                    <div class="contact-icon-container flex-shrink-0 bg-purple-600/20 p-4 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon name="mdi:github" size="32" />
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-xl font-medium text-white mb-2">{{ $t('contact.github') }}</h4>
                      <a 
                        href="https://github.com/meiirzhan2000" 
                        target="_blank" 
                        class="text-neutral-400 hover:text-purple-400 transition-colors block overflow-hidden text-ellipsis"
                        title="github.com/meiirzhan2000"
                      >
                        <span class="hidden sm:inline">github.com/meiirzhan2000</span>
                        <span class="inline sm:hidden">meiirzhan2000</span>
                      </a>
                      <p class="text-neutral-500 text-sm mt-2">
                        {{ $t('contact.githubDescription') }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Location -->
              <div class="mt-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-8">
                <div class="flex items-center text-neutral-400">
                  <Icon name="mdi:map-marker" class="mr-2 text-blue-400" />
                  <span>{{ $t('contact.location') }}</span>
                </div>
                <div class="h-4 border-l border-neutral-700 hidden md:block"></div>
                <div class="text-neutral-400 flex items-center">
                  <Icon name="mdi:clock-time-four-outline" class="mr-2 text-blue-400" />
                  <span>{{ $t('contact.availableRemote') }}</span>
                </div>
              </div>
              
              <!-- Call to Action -->
              <div class="mt-10 text-center">
                <p class="text-neutral-300 mb-4">{{ $t('contact.interestedWorking') }}</p>
                <a 
                  href="mailto:rikimarubro@gmail.com" 
                  class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 font-medium"
                >
                  {{ $t('contact.talkProject') }}
                  <Icon name="mdi:arrow-right" class="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </SectionTransition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AnimatedHeading from '../ui/AnimatedHeading.vue';
import SectionTransition from '../ui/SectionTransition.vue';
</script>

<style scoped>
.contact-card {
  height: 100%;
  will-change: transform;
  position: relative;
}

.contact-icon-container {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

/* Overlay gradient effect for cards on hover */
.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.03), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 0.75rem;
}

.contact-card:hover::before {
  opacity: 1;
}

/* Special styling for WhatsApp card */
.contact-card:nth-child(2):hover::before {
  background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.03), transparent 70%);
}

/* Special styling for GitHub card */
.contact-card:nth-child(4):hover::before {
  background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.03), transparent 70%);
}
</style>