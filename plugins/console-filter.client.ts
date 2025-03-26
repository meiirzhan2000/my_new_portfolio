// plugins/console-filter.client.ts

/**
 * This plugin filters out specific console warnings 
 * Note the .client suffix ensures this only runs in the browser
 */
export default defineNuxtPlugin({
    name: 'console-filter',
    setup() {
      if (process.client) {
        // Save the original console methods
        const originalConsoleWarn = console.warn
        
        // Override console.warn to filter out i18n messages
        console.warn = function(...args) {
          // Check if this is an i18n warning message we want to suppress
          const message = args[0]?.toString() || ''
          if (typeof message === 'string' && 
              (message.includes('Not found') && message.includes('locale messages'))) {
            // Don't log i18n missing key warnings
            return
          }
          
          // Call original for other warnings
          originalConsoleWarn.apply(console, args)
        }
      }
    }
  })