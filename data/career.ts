export interface CareerSlide {
  description: {
    en: string;
    ru: string;
  };
  iconName: string;
  company?: {
    en: string;
    ru: string;
  };
  position?: {
    en: string;
    ru: string;
  };
  period?: string;
  skills?: string[];
}

export interface CareerGroup {
  name: {
    en: string;
    ru: string;
  };
  slides: CareerSlide[];
}

export const careerGroups: CareerGroup[] = [
  {
    name: {
      en: "Teaching",
      ru: "Преподавание"
    },
    slides: [
      {
        description: {
          en: 'Taught programming languages including Java, Python, and C.',
          ru: 'Преподавал языки программирования, включая Java, Python и C.'
        },
        iconName: 'mdi:teach',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Java', 'Python', 'C', 'Programming']
      },
      {
        description: {
          en: 'Developed personalized lesson plans to improve student skills.',
          ru: 'Разрабатывал персонализированные планы уроков для улучшения навыков студентов.'
        },
        iconName: 'mdi:book-open-page-variant',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Curriculum Design', 'Mentoring', 'Teaching']
      },
      {
        description: {
          en: 'Encouraged students to study by letting them teach back concepts.',
          ru: 'Мотивировал студентов учиться, позволяя им объяснять концепции другим.'
        },
        iconName: 'mdi:school',
        company: {
          en: 'Programming Tutor',
          ru: 'Репетитор по программированию'
        },
        position: {
          en: 'Instructor',
          ru: 'Преподаватель'
        },
        period: '2018-2020',
        skills: ['Student Engagement', 'Mentoring', 'Teaching']
      },
    ]
  },
  {
    name: {
      en: "FarTech",
      ru: "FarTech"
    },
    slides: [
      {
        description: {
          en: 'Developed a chatbot using React, Twilio API, and Google Cloud.',
          ru: 'Разработал чат-бота с использованием React, Twilio API и Google Cloud.'
        },
        iconName: 'mdi:robot',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['React', 'Twilio API', 'Google Cloud']
      },
      {
        description: {
          en: 'Worked closely with clients to meet their requirements.',
          ru: 'Тесно сотрудничал с клиентами для удовлетворения их требований.'
        },
        iconName: 'mdi:account-group',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['Requirements Gathering', 'Client Communication']
      },
      {
        description: {
          en: 'Worked with Dialogflow, Flutter on AR navigation systems.',
          ru: 'Работал с Dialogflow, Flutter над AR навигационными системами.'
        },
        iconName: 'mdi:augmented-reality',
        company: {
          en: 'FarTech Solutions',
          ru: 'FarTech Solutions'
        },
        position: {
          en: 'Developer',
          ru: 'Разработчик'
        },
        period: '2020-2022',
        skills: ['Dialogflow', 'Flutter', 'AR Navigation']
      },
    ]
  },
  {
    name: {
      en: "Freelance",
      ru: "Фриланс"
    },
    slides: [
      {
        description: {
          en: 'Developed and maintained an admin dashboard for a clothing-selling application using Vue.js, Nuxt.js and Spring Boot.',
          ru: 'Разработал и поддерживал панель администратора для приложения по продаже одежды с использованием Vue.js, Nuxt.js и Spring Boot.'
        },
        iconName: 'mdi:vuejs',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: '2024-Present',
        skills: ['Vue.js', 'Nuxt.js', 'Spring Boot']
      },
      {
        description: {
          en: 'Collaborated with stakeholders to gather requirements and ensure the dashboard met business needs.',
          ru: 'Сотрудничал с заинтересованными сторонами для сбора требований и обеспечения соответствия панели управления бизнес-потребностям.'
        },
        iconName: 'mdi:handshake',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: '2024-Present',
        skills: ['Requirements Gathering', 'Client Communication', 'Project Management']
      },
      {
        description: {
          en: 'Built a static website using React, Vite, and CSS, optimizing performance and maintaining a clean UI/UX.',
          ru: 'Создал статический веб-сайт с использованием React, Vite и CSS, оптимизируя производительность и поддерживая чистый UI/UX.'
        },
        iconName: 'mdi:react',
        company: {
          en: 'Freelance',
          ru: 'Фриланс'
        },
        position: {
          en: 'Full-stack Developer',
          ru: 'Full-stack Разработчик'
        },
        period: '2024-Present',
        skills: ['React', 'Vite', 'CSS', 'UI/UX Design']
      },
    ]
  }
];

export default careerGroups;