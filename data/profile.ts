import type { Profile } from '~/types';

export const profileData: Profile = {
  id: '1',
  name: {
    en: 'Meiirzhan Baitangatov',
    ru: 'Мейиржан Байтангатов'
  },
  title: {
    en: 'Full Stack Developer',
    ru: 'Full Stack Разработчик'
  },
  description: {
    en: 'I build modern web and mobile applications with a focus on user experience, performance, and clean code.',
    ru: 'Я создаю современные веб и мобильные приложения, ориентируясь на пользовательский опыт, производительность и чистый код.'
  },
  avatarUrl: '/images/profile.jpg',
  backgroundImageUrl: '/images/background.jpeg',
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/johndoe', icon: ['fab', 'github'] },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/johndoe', icon: ['fab', 'linkedin'] },
    { platform: 'Twitter', url: 'https://twitter.com/johndoe', icon: ['fab', 'twitter'] }
  ],
  ctaText: {
    en: 'View More',
    ru: 'Подробнее'
  },
  ctaLink: '#contact'
};

export default profileData;