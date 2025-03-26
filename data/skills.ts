export interface SkillItem {
  icon: string;
  skill: string;
  info: {
    en: string;
    ru: string;
  };
}

export interface SkillCategory {
  title: {
    en: string;
    ru: string;
  };
  skills: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: {
      en: "Technical Skills",
      ru: "Технические Навыки"
    },
    skills: [
      { 
        icon: "DiHtml5", 
        skill: "HTML", 
        info: {
          en: "Markup language used for structuring web content.",
          ru: "Язык разметки, используемый для структурирования веб-контента."
        }
      },
      { 
        icon: "DiCss3", 
        skill: "CSS", 
        info: {
          en: "Style sheet language used for describing the presentation of a document.",
          ru: "Язык таблиц стилей, используемый для описания представления документа."
        }
      },
      { 
        icon: "DiJavascript", 
        skill: "JavaScript", 
        info: {
          en: "High-level programming language for web development.",
          ru: "Высокоуровневый язык программирования для веб-разработки."
        }
      },
      { 
        icon: "DiReact", 
        skill: "React", 
        info: {
          en: "JavaScript library for building user interfaces.",
          ru: "JavaScript библиотека для создания пользовательских интерфейсов."
        }
      },
      { 
        icon: "FaFlutter", 
        skill: "Flutter", 
        info: {
          en: "UI toolkit for building natively compiled applications.",
          ru: "UI-инструментарий для создания нативно компилируемых приложений."
        }
      },
      { 
        icon: "TbBrandReactNative", 
        skill: "React Native", 
        info: {
          en: "Framework for building native apps using React.",
          ru: "Фреймворк для создания нативных приложений с использованием React."
        }
      },
      { 
        icon: "DiNodejs", 
        skill: "Node.js", 
        info: {
          en: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
          ru: "JavaScript среда выполнения, созданная на базе движка V8 Chrome."
        }
      },
      { 
        icon: "DiGit", 
        skill: "Git", 
        info: {
          en: "Version control system for tracking changes in source code.",
          ru: "Система контроля версий для отслеживания изменений в исходном коде."
        }
      },
      { 
        icon: "DiBootstrap", 
        skill: "Bootstrap", 
        info: {
          en: "CSS framework for building responsive, mobile-first websites.",
          ru: "CSS фреймворк для создания отзывчивых, ориентированных на мобильные устройства веб-сайтов."
        }
      },
      { 
        icon: "DiVuejs", 
        skill: "Vue.js", 
        info: {
          en: "Progressive JavaScript framework for building UIs.",
          ru: "Прогрессивный JavaScript фреймворк для создания пользовательских интерфейсов."
        }
      },
      { 
        icon: "DiNuxtjs", 
        skill: "Nuxt.js", 
        info: {
          en: "Higher-level framework built on top of Vue.js.",
          ru: "Фреймворк более высокого уровня, построенный на основе Vue.js."
        }
      }
    ]
  },
  {
    title: {
      en: "",
      ru: ""
    },
    skills: [
      { 
        icon: "DiJava", 
        skill: "Java", 
        info: {
          en: "General-purpose, object-oriented programming language.",
          ru: "Объектно-ориентированный язык программирования общего назначения."
        }
      },
      { 
        icon: "TbBrandKotlin", 
        skill: "Kotlin", 
        info: {
          en: "Cross-platform, statically typed programming language.",
          ru: "Кроссплатформенный статически типизированный язык программирования."
        }
      },
      { 
        icon: "TbBrandCSharp", 
        skill: "C#", 
        info: {
          en: "Modern, object-oriented programming language developed by Microsoft.",
          ru: "Современный объектно-ориентированный язык программирования, разработанный Microsoft."
        }
      },
      { 
        icon: "DiPython", 
        skill: "Python", 
        info: {
          en: "High-level, general-purpose programming language.",
          ru: "Высокоуровневый язык программирования общего назначения."
        }
      },
      { 
        icon: "TbSql", 
        skill: "SQL", 
        info: {
          en: "Standard language for accessing and managing databases.",
          ru: "Стандартный язык для доступа и управления базами данных."
        }
      },
      { 
        icon: "TbDatabaseSearch", 
        skill: "Database Management", 
        info: {
          en: "Skills in managing and maintaining databases.",
          ru: "Навыки управления и обслуживания баз данных."
        }
      },
      { 
        icon: "DiMysql", 
        skill: "MySQL", 
        info: {
          en: "Open-source relational database management system.",
          ru: "Система управления реляционными базами данных с открытым исходным кодом."
        }
      },
      { 
        icon: "DiAws", 
        skill: "AWS Cloud Solutions", 
        info: {
          en: "Experience with Amazon Web Services for cloud solutions.",
          ru: "Опыт работы с Amazon Web Services для облачных решений."
        }
      },
      { 
        icon: "DiGoogleCloudPlatform", 
        skill: "Google Cloud Platform", 
        info: {
          en: "Knowledge of Google Cloud services for cloud computing.",
          ru: "Знание сервисов Google Cloud для облачных вычислений."
        }
      }
    ]
  },
  {
    title: {
      en: "",
      ru: ""
    },
    skills: [
      { 
        icon: "DiAndroid", 
        skill: "Android Development", 
        info: {
          en: "Developing applications for Android devices.",
          ru: "Разработка приложений для устройств Android."
        }
      },
      { 
        icon: "DiApple", 
        skill: "iOS Development", 
        info: {
          en: "Developing applications for Apple devices.",
          ru: "Разработка приложений для устройств Apple."
        }
      }
    ]
  },
  {
    title: {
      en: "Other Skills",
      ru: "Другие Навыки"
    },
    skills: [
      { 
        icon: "GrAchievement", 
        skill: "Achievement-Oriented", 
        info: {
          en: "Driven by setting and achieving challenging goals.",
          ru: "Мотивирован постановкой и достижением сложных целей."
        }
      },
      { 
        icon: "GrUserManager", 
        skill: "Leadership", 
        info: {
          en: "Experience in leading and managing teams effectively.",
          ru: "Опыт в эффективном руководстве и управлении командами."
        }
      },
      { 
        icon: "GrTime", 
        skill: "Time Management", 
        info: {
          en: "Ability to manage time efficiently and prioritize tasks.",
          ru: "Способность эффективно управлять временем и расставлять приоритеты задач."
        }
      },
      { 
        icon: "GrTask", 
        skill: "Multitasking", 
        info: {
          en: "Skilled in handling multiple tasks simultaneously.",
          ru: "Умение одновременно выполнять несколько задач."
        }
      },
      { 
        icon: "GrGroup", 
        skill: "Teamwork", 
        info: {
          en: "Effective collaboration with team members to achieve objectives.",
          ru: "Эффективное сотрудничество с членами команды для достижения целей."
        }
      }
    ]
  }
];

export default skillsData;