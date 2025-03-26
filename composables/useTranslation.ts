// composables/useTranslation.ts
import { ref, computed, onMounted, watch, readonly } from 'vue';
import { useI18n } from '#imports'; // Use #imports for Nuxt 3 compatibility
import type { TranslatedField } from '~/types';

// Import translations directly
import enTranslations from '~/translations/en';
import ruTranslations from '~/translations/ru';

// Specify the supported locales explicitly
type SupportedLocale = 'en' | 'ru';

// Create a persistent state to share across component instances
const isTranslating = ref(false);
const hasInitialized = ref(false);

export const useTranslation = () => {
  const { locale, t, setLocaleMessage } = useI18n();
  const defaultLocale: SupportedLocale = 'en';
  
  // Function to get the stored language
  const getStoredLanguage = (): SupportedLocale | null => {
    if (!process.client) return null;
    const savedLang = localStorage.getItem('portfolio_lang');
    return (savedLang === 'en' || savedLang === 'ru') ? savedLang as SupportedLocale : null;
  };
  
  // Function to set the language in localStorage
  const setStoredLanguage = (lang: SupportedLocale) => {
    if (!process.client) return;
    localStorage.setItem('portfolio_lang', lang);
    
    // Also set the i18n cookie to ensure consistency with Nuxt i18n module
    document.cookie = `i18n_redirected=${lang}; path=/; max-age=31536000`; // 1 year
  };
  
  // Initialize all translations
  const initializeTranslations = () => {
    if (!hasInitialized.value && process.client) {
      // Initialize translations
      setLocaleMessage('en', enTranslations);
      setLocaleMessage('ru', ruTranslations);
      
      // Set up the initial locale
      const storedLang = getStoredLanguage();
      if (storedLang) {
        locale.value = storedLang;
      } else {
        // Try to detect browser language if no saved preference
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'ru') {
          locale.value = 'ru';
          setStoredLanguage('ru');
        } else {
          setStoredLanguage('en');
        }
      }
      
      // Set the HTML lang attribute
      if (document?.documentElement) {
        document.documentElement.setAttribute('lang', locale.value);
      }
      
      hasInitialized.value = true;
    }
  };
  
  // Run initialization in mounted hook to ensure client-side execution
  onMounted(() => {
    initializeTranslations();
  });
  
  // Update document lang attribute when locale changes
  watch(locale, (newLocale) => {
    if (process.client && document?.documentElement) {
      document.documentElement.setAttribute('lang', newLocale);
      // Also update localStorage whenever locale changes
      setStoredLanguage(newLocale as SupportedLocale);
    }
  });
  
  // Toggle between languages
  const toggleLanguage = () => {
    isTranslating.value = true;
    const newLocale: SupportedLocale = locale.value === 'en' ? 'ru' : 'en';
    
    // Change locale
    locale.value = newLocale;
    
    // Store in localStorage
    setStoredLanguage(newLocale);
    
    // Add a small delay for visual feedback
    setTimeout(() => {
      isTranslating.value = false;
    }, 400);
  };
  
  // Function to get translated text from an object or string
  const translate = (field: TranslatedField | string | null | undefined): string => {
    if (!field) return '';
    
    // Handle string values (legacy data)
    if (typeof field === 'string') return field;
    
    // Handle object with language keys
    if (typeof field === 'object' && field !== null) {
      const currentLocale = locale.value;
      // Try to get current locale, fallback to default locale, then to any available locale
      return (field[currentLocale] || field[defaultLocale] || Object.values(field)[0] || '') as string;
    }
    
    return String(field);
  };
  
  // Function to translate a complete data object
  const translateObject = <T extends Record<string, any>>(obj: T | null | undefined): T => {
    if (!obj) return {} as T;
    
    const result = { ...obj };
    for (const key in result) {
      // Only process objects that might be translatable fields
      if (typeof result[key] === 'object' && 
          result[key] !== null && 
          !Array.isArray(result[key]) &&
          (result[key].en || result[key].ru)) {
        // Need to cast here to ensure TypeScript is happy
        result[key] = translate(result[key]) as T[Extract<keyof T, string>];
      }
    }
    return result;
  };
  
  // Function to translate an array of objects
  const translateArray = <T extends Record<string, any>>(items: T[] | null | undefined): T[] => {
    if (!items || !Array.isArray(items)) return [];
    return items.map(item => translateObject(item));
  };
  
  // Setup page metadata based on current language
  const setupPageMeta = (titleKey: string, descriptionKey: string) => {
    useHead({
      title: t(titleKey),
      meta: [
        { name: 'description', content: t(descriptionKey) }
      ]
    });
  };
  
  return {
    currentLang: computed(() => locale.value),
    isEnglish: computed(() => locale.value === 'en'),
    isRussian: computed(() => locale.value === 'ru'),
    isTranslating: readonly(isTranslating),
    toggleLanguage,
    translate,
    translateObject,
    translateArray,
    setupPageMeta,
    t
  };
};

export default useTranslation;