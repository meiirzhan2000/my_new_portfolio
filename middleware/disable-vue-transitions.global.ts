// Middleware to disable Vue transitions when View Transitions API is available
export default defineNuxtRouteMiddleware((to) => {
    // Skip on server-side or when View Transitions API is not available
    if (process.server || typeof document === 'undefined' || !document.startViewTransition) { 
      return;
    }
  
    // Disable built-in Vue transitions when native View Transitions API is available
    to.meta.pageTransition = false;
    to.meta.layoutTransition = false;
  });