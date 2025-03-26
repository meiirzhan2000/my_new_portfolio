import { defineComponent, ref, mergeProps, useSSRContext, withCtx, unref, createVNode, createBlock, toDisplayString, openBlock, createTextVNode, computed, resolveComponent, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import __nuxt_component_1 from './index2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
import { a as useTranslation } from './server.mjs';
import { _ as __nuxt_component_3 } from './client-only.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { a as activityData } from './interests.mjs';
import { _ as _sfc_main$b } from './NuxtImg.vue2.mjs';
import { _ as _sfc_main$a } from './icon.vue2.mjs';
import '@iconify/utils/lib/css/icon';
import '@iconify/vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'vue-router';
import '@supabase/ssr';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-brands-svg-icons';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';

const profileData = {
  id: "1",
  name: {
    en: "Meiirzhan Baitangatov",
    ru: "Мейиржан Байтангатов"
  },
  title: {
    en: "Full Stack Developer",
    ru: "Full Stack Разработчик"
  },
  description: {
    en: "I build modern web and mobile applications with a focus on user experience, performance, and clean code.",
    ru: "Я создаю современные веб и мобильные приложения, ориентируясь на пользовательский опыт, производительность и чистый код."
  },
  avatarUrl: "/images/profile.jpg",
  backgroundImageUrl: "/images/background.jpeg",
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/johndoe", icon: ["fab", "github"] },
    { platform: "LinkedIn", url: "https://linkedin.com/in/johndoe", icon: ["fab", "linkedin"] },
    { platform: "Twitter", url: "https://twitter.com/johndoe", icon: ["fab", "twitter"] }
  ],
  ctaText: {
    en: "View More",
    ru: "Подробнее"
  },
  ctaLink: "#contact"
};

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SectionTransition",
  __ssrInlineRender: true,
  props: {
    animation: {
      type: String,
      default: "fade-in"
    },
    delay: {
      type: Number,
      default: 0
    },
    threshold: {
      type: Number,
      default: 0.1
    }
  },
  setup(__props) {
    const sectionRef = ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "sectionRef",
        ref: sectionRef,
        class: [
          "section-transition",
          __props.animation,
          isVisible.value ? "is-visible" : ""
        ]
      }, _attrs))} data-v-008a32b6>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});

const _sfc_setup$8 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/SectionTransition.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const SectionTransition = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-008a32b6"]]);

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const profile = profileData;
    const { translate } = useTranslation();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_fa_icon = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative min-h-screen flex items-center pt-24 pb-8 overflow-hidden" }, _attrs))}><div class="absolute inset-0 z-0 overflow-hidden"><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ "background-image": "linear-gradient(135deg, #0f2051, #204f9b, #4c209b)" })}"></div><div class="absolute inset-0"><div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-600/20 blur-3xl animate-pulse"></div><div class="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-600/20 blur-3xl animate-pulse" style="${ssrRenderStyle({ "animation-delay": "1s" })}"></div></div><div class="absolute inset-0 bg-black/30"></div></div><div class="container-custom relative z-10"><div class="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">`);
      _push(ssrRenderComponent(SectionTransition, { class: "slide-right lg:col-span-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8"${_scopeId}><h1 class="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight"${_scopeId}><span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300"${_scopeId}>${ssrInterpolate(unref(translate)(unref(profile).name))}</span></h1><h2 class="text-xl md:text-2xl text-primary-200 font-medium relative inline-block"${_scopeId}>${ssrInterpolate(unref(translate)(unref(profile).title))} <span class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 origin-left transition-transform duration-1000 animate-slide-in"${_scopeId}></span></h2><p class="text-lg text-white/90 max-w-xl leading-relaxed"${_scopeId}>${ssrInterpolate(unref(translate)(unref(profile).description))}</p><div class="flex space-x-4 stagger-container is-visible"${_scopeId}><a href="https://github.com/meiirzhan2000" target="_blank" rel="noopener noreferrer" class="social-icon-btn group stagger-item"${ssrRenderAttr("title", _ctx.$t("social.github"))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_fa_icon, {
              icon: ["fab", "github"],
              class: "text-white group-hover:text-primary-300 text-xl transition-all"
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/" target="_blank" rel="noopener noreferrer" class="social-icon-btn group stagger-item"${ssrRenderAttr("title", _ctx.$t("social.linkedin"))}${_scopeId}>`);
            _push2(ssrRenderComponent(_component_fa_icon, {
              icon: ["fab", "linkedin"],
              class: "text-white group-hover:text-primary-300 text-xl transition-all"
            }, null, _parent2, _scopeId));
            _push2(`</a></div><div class="flex flex-col sm:flex-row gap-4 pt-6"${_scopeId}><a href="/files/Meiirzhan_Baitangatov_resume.pdf" download class="resume-button btn btn-primary group"${_scopeId}><div class="flex items-center justify-center space-x-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"${_scopeId}></path></svg><span${_scopeId}>${ssrInterpolate(_ctx.$t("hero.downloadResume"))}</span></div></a>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(profile).ctaLink || "#contact",
              class: "btn btn-outline text-white border-white/30 hover:bg-white/10 backdrop-blur-sm group"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(_ctx.$t("hero.getInTouch"))}</span><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"${_scopeId2}></path></svg>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(_ctx.$t("hero.getInTouch")), 1),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "h-5 w-5 ml-2 transition-transform group-hover:translate-x-1",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                      })
                    ]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("h1", { class: "text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight" }, [
                  createVNode("span", { class: "bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300" }, toDisplayString(unref(translate)(unref(profile).name)), 1)
                ]),
                createVNode("h2", { class: "text-xl md:text-2xl text-primary-200 font-medium relative inline-block" }, [
                  createTextVNode(toDisplayString(unref(translate)(unref(profile).title)) + " ", 1),
                  createVNode("span", { class: "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 transform scale-x-0 origin-left transition-transform duration-1000 animate-slide-in" })
                ]),
                createVNode("p", { class: "text-lg text-white/90 max-w-xl leading-relaxed" }, toDisplayString(unref(translate)(unref(profile).description)), 1),
                createVNode("div", { class: "flex space-x-4 stagger-container is-visible" }, [
                  createVNode("a", {
                    href: "https://github.com/meiirzhan2000",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "social-icon-btn group stagger-item",
                    title: _ctx.$t("social.github")
                  }, [
                    createVNode(_component_fa_icon, {
                      icon: ["fab", "github"],
                      class: "text-white group-hover:text-primary-300 text-xl transition-all"
                    })
                  ], 8, ["title"]),
                  createVNode("a", {
                    href: "https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    class: "social-icon-btn group stagger-item",
                    title: _ctx.$t("social.linkedin")
                  }, [
                    createVNode(_component_fa_icon, {
                      icon: ["fab", "linkedin"],
                      class: "text-white group-hover:text-primary-300 text-xl transition-all"
                    })
                  ], 8, ["title"])
                ]),
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4 pt-6" }, [
                  createVNode("a", {
                    href: "/files/Meiirzhan_Baitangatov_resume.pdf",
                    download: "",
                    class: "resume-button btn btn-primary group"
                  }, [
                    createVNode("div", { class: "flex items-center justify-center space-x-2" }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 transition-transform group-hover:translate-y-0.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        })
                      ])),
                      createVNode("span", null, toDisplayString(_ctx.$t("hero.downloadResume")), 1)
                    ])
                  ]),
                  createVNode(_component_NuxtLink, {
                    to: unref(profile).ctaLink || "#contact",
                    class: "btn btn-outline text-white border-white/30 hover:bg-white/10 backdrop-blur-sm group"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(_ctx.$t("hero.getInTouch")), 1),
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "h-5 w-5 ml-2 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M17 8l4 4m0 0l-4 4m4-4H3"
                        })
                      ]))
                    ]),
                    _: 1
                  }, 8, ["to"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(SectionTransition, {
        class: "sm:py-8 md:py-8 lg:py-8 py-0 slide-left flex justify-center lg:justify-end lg:col-span-2",
        delay: 300
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div class="absolute inset-0 -m-6 rotate-45 opacity-70"${_scopeId}><div class="absolute inset-0 border-2 border-primary-400/30 rounded-full animate-spin-slow"${_scopeId}></div></div><div class="absolute inset-0 -m-12 -rotate-45 opacity-70"${_scopeId}><div class="absolute inset-0 border-2 border-secondary-400/30 rounded-full animate-spin-slow-reverse"${_scopeId}></div></div><div class="animated-profile"${_scopeId}><div class="profile-content"${_scopeId}><img${ssrRenderAttr("src", unref(profile).avatarUrl)}${ssrRenderAttr("alt", unref(translate)(unref(profile).name))} class="profile-img"${_scopeId}><h2${_scopeId}>${ssrInterpolate(unref(translate)(unref(profile).name))}<br${_scopeId}><span${_scopeId}>${ssrInterpolate(unref(translate)(unref(profile).title))}</span></h2>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(profile).ctaLink || "#contact",
              class: "hire-me-btn"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("hero.hireMe"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("hero.hireMe")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="absolute -bottom-4 -right-4 w-3 h-3 rounded-full bg-primary-400 animate-pulse"${_scopeId}></div><div class="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-secondary-400 animate-pulse" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative" }, [
                createVNode("div", { class: "absolute inset-0 -m-6 rotate-45 opacity-70" }, [
                  createVNode("div", { class: "absolute inset-0 border-2 border-primary-400/30 rounded-full animate-spin-slow" })
                ]),
                createVNode("div", { class: "absolute inset-0 -m-12 -rotate-45 opacity-70" }, [
                  createVNode("div", { class: "absolute inset-0 border-2 border-secondary-400/30 rounded-full animate-spin-slow-reverse" })
                ]),
                createVNode("div", { class: "animated-profile" }, [
                  createVNode("div", { class: "profile-content" }, [
                    createVNode("img", {
                      src: unref(profile).avatarUrl,
                      alt: unref(translate)(unref(profile).name),
                      class: "profile-img"
                    }, null, 8, ["src", "alt"]),
                    createVNode("h2", null, [
                      createTextVNode(toDisplayString(unref(translate)(unref(profile).name)), 1),
                      createVNode("br"),
                      createVNode("span", null, toDisplayString(unref(translate)(unref(profile).title)), 1)
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: unref(profile).ctaLink || "#contact",
                      class: "hire-me-btn"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("hero.hireMe")), 1)
                      ]),
                      _: 1
                    }, 8, ["to"])
                  ])
                ]),
                createVNode("div", { class: "absolute -bottom-4 -right-4 w-3 h-3 rounded-full bg-primary-400 animate-pulse" }),
                createVNode("div", {
                  class: "absolute -top-4 -left-4 w-3 h-3 rounded-full bg-secondary-400 animate-pulse",
                  style: { "animation-delay": "0.5s" }
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});

const careerGroups = [
  {
    name: {
      en: "Teaching",
      ru: "Преподавание"
    },
    slides: [
      {
        description: {
          en: "Taught programming languages including Java, Python, and C.",
          ru: "Преподавал языки программирования, включая Java, Python и C."
        },
        iconName: "mdi:teach",
        company: {
          en: "Programming Tutor",
          ru: "Репетитор по программированию"
        },
        position: {
          en: "Instructor",
          ru: "Преподаватель"
        },
        period: "2018-2020",
        skills: ["Java", "Python", "C", "Programming"]
      },
      {
        description: {
          en: "Developed personalized lesson plans to improve student skills.",
          ru: "Разрабатывал персонализированные планы уроков для улучшения навыков студентов."
        },
        iconName: "mdi:book-open-page-variant",
        company: {
          en: "Programming Tutor",
          ru: "Репетитор по программированию"
        },
        position: {
          en: "Instructor",
          ru: "Преподаватель"
        },
        period: "2018-2020",
        skills: ["Curriculum Design", "Mentoring", "Teaching"]
      },
      {
        description: {
          en: "Encouraged students to study by letting them teach back concepts.",
          ru: "Мотивировал студентов учиться, позволяя им объяснять концепции другим."
        },
        iconName: "mdi:school",
        company: {
          en: "Programming Tutor",
          ru: "Репетитор по программированию"
        },
        position: {
          en: "Instructor",
          ru: "Преподаватель"
        },
        period: "2018-2020",
        skills: ["Student Engagement", "Mentoring", "Teaching"]
      }
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
          en: "Developed a chatbot using React, Twilio API, and Google Cloud.",
          ru: "Разработал чат-бота с использованием React, Twilio API и Google Cloud."
        },
        iconName: "mdi:robot",
        company: {
          en: "FarTech Solutions",
          ru: "FarTech Solutions"
        },
        position: {
          en: "Developer",
          ru: "Разработчик"
        },
        period: "2020-2022",
        skills: ["React", "Twilio API", "Google Cloud"]
      },
      {
        description: {
          en: "Worked closely with clients to meet their requirements.",
          ru: "Тесно сотрудничал с клиентами для удовлетворения их требований."
        },
        iconName: "mdi:account-group",
        company: {
          en: "FarTech Solutions",
          ru: "FarTech Solutions"
        },
        position: {
          en: "Developer",
          ru: "Разработчик"
        },
        period: "2020-2022",
        skills: ["Requirements Gathering", "Client Communication"]
      },
      {
        description: {
          en: "Worked with Dialogflow, Flutter on AR navigation systems.",
          ru: "Работал с Dialogflow, Flutter над AR навигационными системами."
        },
        iconName: "mdi:augmented-reality",
        company: {
          en: "FarTech Solutions",
          ru: "FarTech Solutions"
        },
        position: {
          en: "Developer",
          ru: "Разработчик"
        },
        period: "2020-2022",
        skills: ["Dialogflow", "Flutter", "AR Navigation"]
      }
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
          en: "Developed and maintained an admin dashboard for a clothing-selling application using Vue.js, Nuxt.js and Spring Boot.",
          ru: "Разработал и поддерживал панель администратора для приложения по продаже одежды с использованием Vue.js, Nuxt.js и Spring Boot."
        },
        iconName: "mdi:vuejs",
        company: {
          en: "Freelance",
          ru: "Фриланс"
        },
        position: {
          en: "Full-stack Developer",
          ru: "Full-stack Разработчик"
        },
        period: "2024-Present",
        skills: ["Vue.js", "Nuxt.js", "Spring Boot"]
      },
      {
        description: {
          en: "Collaborated with stakeholders to gather requirements and ensure the dashboard met business needs.",
          ru: "Сотрудничал с заинтересованными сторонами для сбора требований и обеспечения соответствия панели управления бизнес-потребностям."
        },
        iconName: "mdi:handshake",
        company: {
          en: "Freelance",
          ru: "Фриланс"
        },
        position: {
          en: "Full-stack Developer",
          ru: "Full-stack Разработчик"
        },
        period: "2024-Present",
        skills: ["Requirements Gathering", "Client Communication", "Project Management"]
      },
      {
        description: {
          en: "Built a static website using React, Vite, and CSS, optimizing performance and maintaining a clean UI/UX.",
          ru: "Создал статический веб-сайт с использованием React, Vite и CSS, оптимизируя производительность и поддерживая чистый UI/UX."
        },
        iconName: "mdi:react",
        company: {
          en: "Freelance",
          ru: "Фриланс"
        },
        position: {
          en: "Full-stack Developer",
          ru: "Full-stack Разработчик"
        },
        period: "2024-Present",
        skills: ["React", "Vite", "CSS", "UI/UX Design"]
      }
    ]
  }
];

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "AnimatedHeading",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    },
    textClass: {
      type: String,
      default: "text-3xl font-bold mb-8 text-white"
    },
    withLine: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    ref(null);
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-874e20d9><h2 class="${ssrRenderClass([
        "animated-heading",
        isVisible.value ? "is-visible" : "",
        __props.textClass
      ])}" data-v-874e20d9><span class="relative z-10" data-v-874e20d9>${ssrInterpolate(__props.text)}</span>`);
      if (__props.withLine) {
        _push(`<span class="${ssrRenderClass([{ "is-visible": isVisible.value }, "heading-line"])}" data-v-874e20d9></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</h2></div>`);
    };
  }
});

const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AnimatedHeading.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AnimatedHeading = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-874e20d9"]]);

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CareerSection",
  __ssrInlineRender: true,
  setup(__props) {
    const careerData = careerGroups;
    const { translate } = useTranslation();
    const activeSlideIndices = ref(careerData.map(() => 0));
    const isCardVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "career",
        class: "section bg-neutral-900 py-16"
      }, _attrs))} data-v-db0accff><div class="container-custom" data-v-db0accff>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("career.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(ssrRenderComponent(SectionTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="career-summary mb-12 bg-neutral-800/70 p-6 rounded-lg border-l-4 border-blue-500 transform transition-all duration-500 hover:translate-y-[-5px]" data-v-db0accff${_scopeId}><h3 class="text-xl font-semibold text-white mb-4" data-v-db0accff${_scopeId}>${ssrInterpolate(_ctx.$t("career.summaryTitle"))}</h3><p class="text-gray-300 leading-relaxed" data-v-db0accff${_scopeId}>${ssrInterpolate(_ctx.$t("career.summary"))}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "career-summary mb-12 bg-neutral-800/70 p-6 rounded-lg border-l-4 border-blue-500 transform transition-all duration-500 hover:translate-y-[-5px]" }, [
                createVNode("h3", { class: "text-xl font-semibold text-white mb-4" }, toDisplayString(_ctx.$t("career.summaryTitle")), 1),
                createVNode("p", { class: "text-gray-300 leading-relaxed" }, toDisplayString(_ctx.$t("career.summary")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-8" data-v-db0accff><!--[-->`);
      ssrRenderList(unref(careerData), (group, groupIndex) => {
        var _a, _b, _c;
        _push(`<div class="${ssrRenderClass([`entrance-animation entrance-${groupIndex % 3}`, "mb-12 career-group"])}" data-v-db0accff>`);
        _push(ssrRenderComponent(SectionTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center mb-6" data-v-db0accff${_scopeId}><div class="h-1 w-10 bg-blue-500 rounded-full mr-3" data-v-db0accff${_scopeId}></div><h3 class="text-2xl font-bold text-blue-400" data-v-db0accff${_scopeId}>${ssrInterpolate(unref(translate)(group.name))}</h3></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center mb-6" }, [
                  createVNode("div", { class: "h-1 w-10 bg-blue-500 rounded-full mr-3" }),
                  createVNode("h3", { class: "text-2xl font-bold text-blue-400" }, toDisplayString(unref(translate)(group.name)), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="${ssrRenderClass([{ "is-visible": isCardVisible.value }, "career-card bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 shadow-md transform transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]"])}" data-v-db0accff><div class="bg-neutral-800 p-6 border-b border-neutral-700 flex justify-between items-center" data-v-db0accff><div data-v-db0accff>`);
        if ((_a = group.slides[activeSlideIndices.value[groupIndex]]) == null ? void 0 : _a.company) {
          _push(`<h4 class="text-xl font-semibold text-white" data-v-db0accff>${ssrInterpolate(unref(translate)(group.slides[activeSlideIndices.value[groupIndex]].company))}</h4>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap items-center mt-1" data-v-db0accff>`);
        if ((_b = group.slides[activeSlideIndices.value[groupIndex]]) == null ? void 0 : _b.position) {
          _push(`<span class="text-blue-400 font-medium text-sm" data-v-db0accff>${ssrInterpolate(unref(translate)(group.slides[activeSlideIndices.value[groupIndex]].position))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = group.slides[activeSlideIndices.value[groupIndex]]) == null ? void 0 : _c.period) {
          _push(`<span class="text-neutral-400 text-sm ml-3 pl-3 border-l border-neutral-600" data-v-db0accff>${ssrInterpolate(group.slides[activeSlideIndices.value[groupIndex]].period)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="flex items-center space-x-4" data-v-db0accff><button class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed hover:bg-neutral-700": activeSlideIndices.value[groupIndex] === 0 }, "w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-blue-500 transition-colors"])}"${ssrIncludeBooleanAttr(activeSlideIndices.value[groupIndex] === 0) ? " disabled" : ""} data-v-db0accff><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-db0accff><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-v-db0accff></path></svg></button><span class="text-neutral-400 text-sm" data-v-db0accff>${ssrInterpolate(activeSlideIndices.value[groupIndex] + 1)} / ${ssrInterpolate(group.slides.length)}</span><button class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed hover:bg-neutral-700": activeSlideIndices.value[groupIndex] === group.slides.length - 1 }, "w-8 h-8 flex items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-blue-500 transition-colors"])}"${ssrIncludeBooleanAttr(activeSlideIndices.value[groupIndex] === group.slides.length - 1) ? " disabled" : ""} data-v-db0accff><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-db0accff><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-v-db0accff></path></svg></button></div></div><div class="relative w-full overflow-hidden" data-v-db0accff><div class="carousel-track flex transition-transform duration-500" style="${ssrRenderStyle({ transform: `translateX(-${activeSlideIndices.value[groupIndex] * 100}%)` })}" data-v-db0accff><!--[-->`);
        ssrRenderList(group.slides, (slide, slideIndex) => {
          _push(`<div class="carousel-slide w-full flex-shrink-0 p-6" data-v-db0accff><div class="grid md:grid-cols-12 gap-8" data-v-db0accff><div class="md:col-span-5 flex items-center justify-center" data-v-db0accff><div class="icon-container w-full h-64 bg-neutral-700/30 rounded-lg flex items-center justify-center" data-v-db0accff><div class="text-blue-400 opacity-80" data-v-db0accff>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: slide.iconName,
            size: "120"
          }, null, _parent));
          _push(`</div></div></div><div class="md:col-span-7 flex flex-col justify-center" data-v-db0accff><p class="text-neutral-300 text-lg mb-6 leading-relaxed" data-v-db0accff>${ssrInterpolate(unref(translate)(slide.description))}</p><div class="flex flex-wrap gap-2 mt-4" data-v-db0accff><!--[-->`);
          ssrRenderList(slide.skills, (skill, i) => {
            _push(`<span class="px-3 py-1 bg-neutral-700 text-blue-300 text-sm rounded-full" data-v-db0accff>${ssrInterpolate(skill)}</span>`);
          });
          _push(`<!--]--></div></div></div></div>`);
        });
        _push(`<!--]--></div><div class="absolute bottom-4 right-6 flex space-x-2" data-v-db0accff><!--[-->`);
        ssrRenderList(group.slides, (_, slideIndex) => {
          _push(`<button class="${ssrRenderClass([slideIndex === activeSlideIndices.value[groupIndex] ? "bg-blue-500" : "bg-neutral-600", "w-2 h-2 rounded-full transition-colors"])}"${ssrRenderAttr("aria-label", `Go to slide ${slideIndex + 1}`)} data-v-db0accff></button>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});

const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CareerSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const CareerSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-db0accff"]]);

const skillsData = [
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SkillsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { translate } = useTranslation();
    const getIconName = (iconName) => {
      const iconMap = {
        // Dev Icons
        "DiHtml5": "mdi:language-html5",
        "DiCss3": "mdi:language-css3",
        "DiJavascript": "mdi:language-javascript",
        "DiReact": "mdi:react",
        "RiFlutterLine": "mdi:flutter",
        "TbBrandReactNative": "mdi:react",
        "DiNodejs": "mdi:nodejs",
        "DiGit": "mdi:git",
        "DiBootstrap": "mdi:bootstrap",
        "DiVuejs": "mdi:vuejs",
        "DiNuxtjs": "mdi:nuxt",
        "DiJava": "mdi:language-java",
        "TbBrandKotlin": "mdi:kotlin",
        "TbBrandCSharp": "mdi:language-csharp",
        "DiPython": "mdi:language-python",
        "TbSql": "mdi:database",
        "TbDatabaseSearch": "mdi:database-search",
        "DiMysql": "mdi:database",
        "DiAws": "mdi:aws",
        "DiGoogleCloudPlatform": "mdi:google-cloud",
        "DiAndroid": "mdi:android",
        "DiApple": "mdi:apple",
        // Other Icons
        "GrAchievement": "mdi:trophy",
        "GrUserManager": "mdi:account-supervisor",
        "GrTime": "mdi:clock-time-four",
        "GrTask": "mdi:checkbox-marked-circle",
        "GrGroup": "mdi:account-group"
      };
      return iconMap[iconName] || "mdi:code-tags";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "section bg-neutral-800 py-16"
      }, _attrs))} data-v-bf6b46dc><div class="container-custom" data-v-bf6b46dc>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("skills.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(`<div class="space-y-16" data-v-bf6b46dc><!--[-->`);
      ssrRenderList(unref(skillsData), (category, categoryIndex) => {
        _push(`<div class="skills-category" data-v-bf6b46dc>`);
        if (unref(translate)(category.title)) {
          _push(ssrRenderComponent(SectionTransition, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center mb-8" data-v-bf6b46dc${_scopeId}><div class="h-1 w-10 bg-blue-500 rounded-full mr-3" data-v-bf6b46dc${_scopeId}></div><h3 class="text-2xl font-bold text-blue-400" data-v-bf6b46dc${_scopeId}>${ssrInterpolate(unref(translate)(category.title))}</h3></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center mb-8" }, [
                    createVNode("div", { class: "h-1 w-10 bg-blue-500 rounded-full mr-3" }),
                    createVNode("h3", { class: "text-2xl font-bold text-blue-400" }, toDisplayString(unref(translate)(category.title)), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-bf6b46dc><!--[-->`);
        ssrRenderList(category.skills, (skill, skillIndex) => {
          _push(ssrRenderComponent(SectionTransition, {
            key: skillIndex,
            delay: skillIndex * 50
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="skill-card bg-neutral-700/50 border border-neutral-600 rounded-lg p-5 hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group" data-v-bf6b46dc${_scopeId}><div class="flex items-start space-x-4" data-v-bf6b46dc${_scopeId}><div class="skill-icon-container flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300" data-v-bf6b46dc${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: getIconName(skill.icon),
                  size: "28"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="flex-1" data-v-bf6b46dc${_scopeId}><h4 class="text-white text-lg font-medium mb-1" data-v-bf6b46dc${_scopeId}>${ssrInterpolate(skill.skill)}</h4><p class="text-neutral-400 text-sm" data-v-bf6b46dc${_scopeId}>${ssrInterpolate(unref(translate)(skill.info))}</p></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "skill-card bg-neutral-700/50 border border-neutral-600 rounded-lg p-5 hover:bg-neutral-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group" }, [
                    createVNode("div", { class: "flex items-start space-x-4" }, [
                      createVNode("div", { class: "skill-icon-container flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300" }, [
                        createVNode(_component_Icon, {
                          name: getIconName(skill.icon),
                          size: "28"
                        }, null, 8, ["name"])
                      ]),
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("h4", { class: "text-white text-lg font-medium mb-1" }, toDisplayString(skill.skill), 1),
                        createVNode("p", { class: "text-neutral-400 text-sm" }, toDisplayString(unref(translate)(skill.info)), 1)
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});

const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SkillsSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SkillsSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-bf6b46dc"]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InterestSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { translate } = useTranslation();
    const featuredInterests = computed(() => {
      return activityData.map((category) => {
        const featuredDetail = category.details[0];
        return {
          category: translate(category.category),
          title: translate(featuredDetail.title),
          animation: featuredDetail.animation,
          description: translate(featuredDetail.description)
        };
      });
    });
    const translatedInterests = computed(() => featuredInterests.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_3;
      const _component_Vue3Lottie = resolveComponent("Vue3Lottie");
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "interests",
        class: "section bg-neutral-900 py-16"
      }, _attrs))} data-v-d421e182><div class="container-custom" data-v-d421e182>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("interests.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(`<div class="space-y-12" data-v-d421e182><div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-v-d421e182><!--[-->`);
      ssrRenderList(translatedInterests.value, (category, index) => {
        _push(ssrRenderComponent(SectionTransition, {
          key: index,
          delay: index * 100
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="interest-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group" data-v-d421e182${_scopeId}><div class="interest-animation-container" data-v-d421e182${_scopeId}>`);
              _push2(ssrRenderComponent(_component_client_only, null, {
                fallback: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-full flex items-center justify-center" data-v-d421e182${_scopeId2}><div class="text-neutral-400" data-v-d421e182${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:image",
                      size: "48"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                        createVNode("div", { class: "text-neutral-400" }, [
                          createVNode(_component_Icon, {
                            name: "mdi:image",
                            size: "48"
                          })
                        ])
                      ])
                    ];
                  }
                })
              }, _parent2, _scopeId));
              _push2(`<div class="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-v-d421e182${_scopeId}></div></div><div class="p-5" data-v-d421e182${_scopeId}><h3 class="text-xl font-semibold text-blue-400 mb-2" data-v-d421e182${_scopeId}>${ssrInterpolate(category.title)}</h3><p class="text-neutral-400 text-sm interest-description" data-v-d421e182${_scopeId}>${ssrInterpolate(category.description)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "interest-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group" }, [
                  createVNode("div", { class: "interest-animation-container" }, [
                    createVNode(_component_client_only, null, {
                      fallback: withCtx(() => [
                        createVNode("div", { class: "w-full h-full flex items-center justify-center" }, [
                          createVNode("div", { class: "text-neutral-400" }, [
                            createVNode(_component_Icon, {
                              name: "mdi:image",
                              size: "48"
                            })
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "animation-wrapper" }, [
                          createVNode(_component_Vue3Lottie, {
                            animationLink: `/animations/${category.animation}.json`,
                            height: 300,
                            width: 300,
                            loop: true,
                            speed: 0.8,
                            noMargin: true,
                            scale: 1.2,
                            class: "interest-lottie"
                          }, null, 8, ["animationLink"])
                        ])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode("div", { class: "absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
                  ]),
                  createVNode("div", { class: "p-5" }, [
                    createVNode("h3", { class: "text-xl font-semibold text-blue-400 mb-2" }, toDisplayString(category.title), 1),
                    createVNode("p", { class: "text-neutral-400 text-sm interest-description" }, toDisplayString(category.description), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="text-center mt-10" data-v-d421e182>`);
      _push(ssrRenderComponent(SectionTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/interests",
              class: "inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(_ctx.$t("interests.discoverAll"))} `);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "mdi:arrow-right",
                    class: "ml-2"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(toDisplayString(_ctx.$t("interests.discoverAll")) + " ", 1),
                    createVNode(_component_Icon, {
                      name: "mdi:arrow-right",
                      class: "ml-2"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/interests",
                class: "inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("interests.discoverAll")) + " ", 1),
                  createVNode(_component_Icon, {
                    name: "mdi:arrow-right",
                    class: "ml-2"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});

const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/InterestSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const InterestsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d421e182"]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "section bg-neutral-800 py-16"
      }, _attrs))} data-v-4c74437d><div class="container-custom" data-v-4c74437d>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("contact.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(`<div class="max-w-4xl mx-auto" data-v-4c74437d>`);
      _push(ssrRenderComponent(SectionTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg" data-v-4c74437d${_scopeId}><div class="p-8 md:p-10" data-v-4c74437d${_scopeId}><div class="mb-10 text-center" data-v-4c74437d${_scopeId}><h3 class="text-2xl md:text-3xl text-white font-semibold mb-4" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.letsConnect"))}</h3><p class="text-neutral-300 leading-relaxed max-w-2xl mx-auto" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.connectDescription"))}</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10" data-v-4c74437d${_scopeId}><div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" data-v-4c74437d${_scopeId}><div class="flex items-start gap-4" data-v-4c74437d${_scopeId}><div class="contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:email",
              size: "32"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-w-0" data-v-4c74437d${_scopeId}><h4 class="text-xl font-medium text-white mb-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.email"))}</h4><a href="mailto:rikimarubro@gmail.com" class="text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis" data-v-4c74437d${_scopeId}> rikimarubro@gmail.com </a><p class="text-neutral-500 text-sm mt-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.emailDescription"))}</p></div></div></div><div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" data-v-4c74437d${_scopeId}><div class="flex items-start gap-4" data-v-4c74437d${_scopeId}><div class="contact-icon-container flex-shrink-0 bg-green-600/20 p-4 rounded-lg text-green-400 group-hover:scale-110 transition-transform" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:whatsapp",
              size: "32"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-w-0" data-v-4c74437d${_scopeId}><h4 class="text-xl font-medium text-white mb-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.whatsapp"))}</h4><a href="https://wa.me/77087134055" target="_blank" class="text-neutral-400 hover:text-green-400 transition-colors block overflow-hidden text-ellipsis" data-v-4c74437d${_scopeId}> +7 708 713 4055 </a><p class="text-neutral-500 text-sm mt-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.whatsappDescription"))}</p></div></div></div><div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" data-v-4c74437d${_scopeId}><div class="flex items-start gap-4" data-v-4c74437d${_scopeId}><div class="contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:linkedin",
              size: "32"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-w-0" data-v-4c74437d${_scopeId}><h4 class="text-xl font-medium text-white mb-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.linkedin"))}</h4><a href="https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/" target="_blank" class="text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis" title="linkedin.com/in/meiirzhan-baitangatov-871632248" data-v-4c74437d${_scopeId}><span class="hidden sm:inline" data-v-4c74437d${_scopeId}>linkedin.com/in/meiirzhan-baitangatov-871632248</span><span class="inline sm:hidden" data-v-4c74437d${_scopeId}>Meiirzhan Baitangatov</span></a><p class="text-neutral-500 text-sm mt-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.linkedinDescription"))}</p></div></div></div><div class="contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" data-v-4c74437d${_scopeId}><div class="flex items-start gap-4" data-v-4c74437d${_scopeId}><div class="contact-icon-container flex-shrink-0 bg-purple-600/20 p-4 rounded-lg text-purple-400 group-hover:scale-110 transition-transform" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:github",
              size: "32"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-w-0" data-v-4c74437d${_scopeId}><h4 class="text-xl font-medium text-white mb-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.github"))}</h4><a href="https://github.com/meiirzhan2000" target="_blank" class="text-neutral-400 hover:text-purple-400 transition-colors block overflow-hidden text-ellipsis" title="github.com/meiirzhan2000" data-v-4c74437d${_scopeId}><span class="hidden sm:inline" data-v-4c74437d${_scopeId}>github.com/meiirzhan2000</span><span class="inline sm:hidden" data-v-4c74437d${_scopeId}>meiirzhan2000</span></a><p class="text-neutral-500 text-sm mt-2" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.githubDescription"))}</p></div></div></div></div><div class="mt-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-8" data-v-4c74437d${_scopeId}><div class="flex items-center text-neutral-400" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:map-marker",
              class: "mr-2 text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.location"))}</span></div><div class="h-4 border-l border-neutral-700 hidden md:block" data-v-4c74437d${_scopeId}></div><div class="text-neutral-400 flex items-center" data-v-4c74437d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:clock-time-four-outline",
              class: "mr-2 text-blue-400"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.availableRemote"))}</span></div></div><div class="mt-10 text-center" data-v-4c74437d${_scopeId}><p class="text-neutral-300 mb-4" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.interestedWorking"))}</p><a href="mailto:rikimarubro@gmail.com" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 font-medium" data-v-4c74437d${_scopeId}>${ssrInterpolate(_ctx.$t("contact.talkProject"))} `);
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-right",
              class: "ml-2"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg" }, [
                createVNode("div", { class: "p-8 md:p-10" }, [
                  createVNode("div", { class: "mb-10 text-center" }, [
                    createVNode("h3", { class: "text-2xl md:text-3xl text-white font-semibold mb-4" }, toDisplayString(_ctx.$t("contact.letsConnect")), 1),
                    createVNode("p", { class: "text-neutral-300 leading-relaxed max-w-2xl mx-auto" }, toDisplayString(_ctx.$t("contact.connectDescription")), 1)
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8 mt-10" }, [
                    createVNode("div", { class: "contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" }, [
                      createVNode("div", { class: "flex items-start gap-4" }, [
                        createVNode("div", { class: "contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform" }, [
                          createVNode(_component_Icon, {
                            name: "mdi:email",
                            size: "32"
                          })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("h4", { class: "text-xl font-medium text-white mb-2" }, toDisplayString(_ctx.$t("contact.email")), 1),
                          createVNode("a", {
                            href: "mailto:rikimarubro@gmail.com",
                            class: "text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis"
                          }, " rikimarubro@gmail.com "),
                          createVNode("p", { class: "text-neutral-500 text-sm mt-2" }, toDisplayString(_ctx.$t("contact.emailDescription")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-green-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" }, [
                      createVNode("div", { class: "flex items-start gap-4" }, [
                        createVNode("div", { class: "contact-icon-container flex-shrink-0 bg-green-600/20 p-4 rounded-lg text-green-400 group-hover:scale-110 transition-transform" }, [
                          createVNode(_component_Icon, {
                            name: "mdi:whatsapp",
                            size: "32"
                          })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("h4", { class: "text-xl font-medium text-white mb-2" }, toDisplayString(_ctx.$t("contact.whatsapp")), 1),
                          createVNode("a", {
                            href: "https://wa.me/77087134055",
                            target: "_blank",
                            class: "text-neutral-400 hover:text-green-400 transition-colors block overflow-hidden text-ellipsis"
                          }, " +7 708 713 4055 "),
                          createVNode("p", { class: "text-neutral-500 text-sm mt-2" }, toDisplayString(_ctx.$t("contact.whatsappDescription")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" }, [
                      createVNode("div", { class: "flex items-start gap-4" }, [
                        createVNode("div", { class: "contact-icon-container flex-shrink-0 bg-blue-600/20 p-4 rounded-lg text-blue-400 group-hover:scale-110 transition-transform" }, [
                          createVNode(_component_Icon, {
                            name: "mdi:linkedin",
                            size: "32"
                          })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("h4", { class: "text-xl font-medium text-white mb-2" }, toDisplayString(_ctx.$t("contact.linkedin")), 1),
                          createVNode("a", {
                            href: "https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/",
                            target: "_blank",
                            class: "text-neutral-400 hover:text-blue-400 transition-colors block overflow-hidden text-ellipsis",
                            title: "linkedin.com/in/meiirzhan-baitangatov-871632248"
                          }, [
                            createVNode("span", { class: "hidden sm:inline" }, "linkedin.com/in/meiirzhan-baitangatov-871632248"),
                            createVNode("span", { class: "inline sm:hidden" }, "Meiirzhan Baitangatov")
                          ]),
                          createVNode("p", { class: "text-neutral-500 text-sm mt-2" }, toDisplayString(_ctx.$t("contact.linkedinDescription")), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "contact-card bg-neutral-900/50 rounded-xl p-6 border border-neutral-700 hover:border-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group" }, [
                      createVNode("div", { class: "flex items-start gap-4" }, [
                        createVNode("div", { class: "contact-icon-container flex-shrink-0 bg-purple-600/20 p-4 rounded-lg text-purple-400 group-hover:scale-110 transition-transform" }, [
                          createVNode(_component_Icon, {
                            name: "mdi:github",
                            size: "32"
                          })
                        ]),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("h4", { class: "text-xl font-medium text-white mb-2" }, toDisplayString(_ctx.$t("contact.github")), 1),
                          createVNode("a", {
                            href: "https://github.com/meiirzhan2000",
                            target: "_blank",
                            class: "text-neutral-400 hover:text-purple-400 transition-colors block overflow-hidden text-ellipsis",
                            title: "github.com/meiirzhan2000"
                          }, [
                            createVNode("span", { class: "hidden sm:inline" }, "github.com/meiirzhan2000"),
                            createVNode("span", { class: "inline sm:hidden" }, "meiirzhan2000")
                          ]),
                          createVNode("p", { class: "text-neutral-500 text-sm mt-2" }, toDisplayString(_ctx.$t("contact.githubDescription")), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 md:space-x-8" }, [
                    createVNode("div", { class: "flex items-center text-neutral-400" }, [
                      createVNode(_component_Icon, {
                        name: "mdi:map-marker",
                        class: "mr-2 text-blue-400"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("contact.location")), 1)
                    ]),
                    createVNode("div", { class: "h-4 border-l border-neutral-700 hidden md:block" }),
                    createVNode("div", { class: "text-neutral-400 flex items-center" }, [
                      createVNode(_component_Icon, {
                        name: "mdi:clock-time-four-outline",
                        class: "mr-2 text-blue-400"
                      }),
                      createVNode("span", null, toDisplayString(_ctx.$t("contact.availableRemote")), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-10 text-center" }, [
                    createVNode("p", { class: "text-neutral-300 mb-4" }, toDisplayString(_ctx.$t("contact.interestedWorking")), 1),
                    createVNode("a", {
                      href: "mailto:rikimarubro@gmail.com",
                      class: "inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 font-medium"
                    }, [
                      createTextVNode(toDisplayString(_ctx.$t("contact.talkProject")) + " ", 1),
                      createVNode(_component_Icon, {
                        name: "mdi:arrow-right",
                        class: "ml-2"
                      })
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});

const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ContactSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ContactSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4c74437d"]]);

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { translateArray, translateObject } = useTranslation();
    const projects = ref([]);
    const loading = ref(true);
    const error = ref(false);
    const selectedCategory = ref(null);
    const selectedProject = ref(null);
    const currentImageIndex = ref(0);
    const translatedProjects = computed(() => {
      return translateArray(filteredProjects.value);
    });
    const categories = computed(() => {
      const allTechnologies = projects.value.flatMap((project) => project.technologies || []);
      const uniqueTechnologies = [...new Set(allTechnologies)];
      return uniqueTechnologies.slice(0, 6);
    });
    const filteredProjects = computed(() => {
      if (!selectedCategory.value) {
        return projects.value;
      }
      return projects.value.filter(
        (project) => {
          var _a;
          return (_a = project.technologies) == null ? void 0 : _a.includes(selectedCategory.value);
        }
      );
    });
    const formatDate = (dateString, style = "short") => {
      if (!dateString) return "";
      const date = new Date(dateString);
      if (style === "short") {
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
      }
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      });
    };
    const openProjectDetails = (project) => {
      selectedProject.value = translateObject(project);
      currentImageIndex.value = 0;
      (void 0).body.style.overflow = "hidden";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$b;
      const _component_Icon = __nuxt_component_1;
      const _component_client_only = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "section bg-neutral-900 py-16"
      }, _attrs))} data-v-15111764><div class="container-custom" data-v-15111764>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("projects.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(ssrRenderComponent(SectionTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap justify-center mb-10 gap-2" data-v-15111764${_scopeId}><button class="${ssrRenderClass([selectedCategory.value === null ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-lg text-sm font-medium transition-colors"])}" data-v-15111764${_scopeId}>${ssrInterpolate(_ctx.$t("projects.allProjects"))}</button><!--[-->`);
            ssrRenderList(categories.value, (category) => {
              _push2(`<button class="${ssrRenderClass([selectedCategory.value === category ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-lg text-sm font-medium transition-colors"])}" data-v-15111764${_scopeId}>${ssrInterpolate(category)}</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap justify-center mb-10 gap-2" }, [
                createVNode("button", {
                  class: ["px-4 py-2 rounded-lg text-sm font-medium transition-colors", selectedCategory.value === null ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"],
                  onClick: ($event) => selectedCategory.value = null
                }, toDisplayString(_ctx.$t("projects.allProjects")), 11, ["onClick"]),
                (openBlock(true), createBlock(Fragment, null, renderList(categories.value, (category) => {
                  return openBlock(), createBlock("button", {
                    key: category,
                    class: ["px-4 py-2 rounded-lg text-sm font-medium transition-colors", selectedCategory.value === category ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"],
                    onClick: ($event) => selectedCategory.value = category
                  }, toDisplayString(category), 11, ["onClick"]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (loading.value) {
        _push(`<div class="flex justify-center py-12" data-v-15111764><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400" data-v-15111764></div></div>`);
      } else if (error.value) {
        _push(`<div class="text-center py-12" data-v-15111764><p class="text-red-400" data-v-15111764>Error loading projects. Please try again later.</p></div>`);
      } else if (filteredProjects.value.length === 0) {
        _push(`<div class="text-center py-12" data-v-15111764><p class="text-neutral-400" data-v-15111764>No projects found for the selected category.</p></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-v-15111764><!--[-->`);
        ssrRenderList(translatedProjects.value, (project, index) => {
          _push(ssrRenderComponent(SectionTransition, {
            key: project.id,
            delay: index * 100
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="project-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col" data-v-15111764${_scopeId}><div class="project-image-container relative overflow-hidden group" data-v-15111764${_scopeId}>`);
                if (project.image_url) {
                  _push2(ssrRenderComponent(_component_NuxtImg, {
                    src: project.image_url,
                    alt: project.title,
                    width: "500",
                    height: "300",
                    format: "webp",
                    quality: "80",
                    class: "w-full h-48 object-cover object-center transition-transform duration-700 group-hover:scale-110",
                    loading: "lazy"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4" data-v-15111764${_scopeId}>`);
                if (project.technologies && project.technologies.length) {
                  _push2(`<div class="flex flex-wrap gap-1" data-v-15111764${_scopeId}><!--[-->`);
                  ssrRenderList(project.technologies.slice(0, 3), (tech) => {
                    _push2(`<span class="text-xs bg-blue-800/70 text-blue-100 px-2 py-1 rounded-full" data-v-15111764${_scopeId}>${ssrInterpolate(tech)}</span>`);
                  });
                  _push2(`<!--]-->`);
                  if (project.technologies.length > 3) {
                    _push2(`<span class="text-xs bg-neutral-700/80 text-neutral-300 px-2 py-1 rounded-full" data-v-15111764${_scopeId}> +${ssrInterpolate(project.technologies.length - 3)}</span>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="p-5 flex-1 flex flex-col" data-v-15111764${_scopeId}><h3 class="text-xl font-semibold text-white mb-2" data-v-15111764${_scopeId}>${ssrInterpolate(project.title)}</h3><p class="text-neutral-400 text-sm mb-4 line-clamp-3 flex-1" data-v-15111764${_scopeId}>${ssrInterpolate(project.description)}</p><div class="flex justify-between items-center mt-auto pt-2 border-t border-neutral-700/50" data-v-15111764${_scopeId}>`);
                if (project.completion_date) {
                  _push2(`<span class="text-xs text-neutral-500" data-v-15111764${_scopeId}>${ssrInterpolate(formatDate(project.completion_date))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1" data-v-15111764${_scopeId}>${ssrInterpolate(_ctx.$t("projects.viewDetails"))} `);
                _push2(ssrRenderComponent(_component_Icon, { name: "mdi:arrow-right" }, null, _parent2, _scopeId));
                _push2(`</button></div></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "project-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col" }, [
                    createVNode("div", { class: "project-image-container relative overflow-hidden group" }, [
                      project.image_url ? (openBlock(), createBlock(_component_NuxtImg, {
                        key: 0,
                        src: project.image_url,
                        alt: project.title,
                        width: "500",
                        height: "300",
                        format: "webp",
                        quality: "80",
                        class: "w-full h-48 object-cover object-center transition-transform duration-700 group-hover:scale-110",
                        loading: "lazy"
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true),
                      createVNode("div", { class: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4" }, [
                        project.technologies && project.technologies.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex flex-wrap gap-1"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(project.technologies.slice(0, 3), (tech) => {
                            return openBlock(), createBlock("span", {
                              key: tech,
                              class: "text-xs bg-blue-800/70 text-blue-100 px-2 py-1 rounded-full"
                            }, toDisplayString(tech), 1);
                          }), 128)),
                          project.technologies.length > 3 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs bg-neutral-700/80 text-neutral-300 px-2 py-1 rounded-full"
                          }, " +" + toDisplayString(project.technologies.length - 3), 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "p-5 flex-1 flex flex-col" }, [
                      createVNode("h3", { class: "text-xl font-semibold text-white mb-2" }, toDisplayString(project.title), 1),
                      createVNode("p", { class: "text-neutral-400 text-sm mb-4 line-clamp-3 flex-1" }, toDisplayString(project.description), 1),
                      createVNode("div", { class: "flex justify-between items-center mt-auto pt-2 border-t border-neutral-700/50" }, [
                        project.completion_date ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-xs text-neutral-500"
                        }, toDisplayString(formatDate(project.completion_date)), 1)) : createCommentVNode("", true),
                        createVNode("button", {
                          onClick: ($event) => openProjectDetails(project),
                          class: "text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
                        }, [
                          createTextVNode(toDisplayString(_ctx.$t("projects.viewDetails")) + " ", 1),
                          createVNode(_component_Icon, { name: "mdi:arrow-right" })
                        ], 8, ["onClick"])
                      ])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div></section>`);
    };
  }
});

const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/ProjectsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProjectsSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-15111764"]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AchievmentsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const { translateArray } = useTranslation();
    const tabs = [
      { id: "awards", nameKey: "achievements.awardsTab" },
      { id: "certifications", nameKey: "achievements.certificationsTab" }
    ];
    const activeTab = ref("awards");
    const certifications = ref([]);
    const loading = ref(true);
    const certificationGroups = computed(() => {
      const groups = [];
      const organizations = [...new Set(certifications.value.map((cert) => cert.issuing_organization))];
      organizations.forEach((org) => {
        const certs = certifications.value.filter((cert) => cert.issuing_organization === org);
        groups.push({
          organization: org,
          certifications: certs
        });
      });
      return groups;
    });
    const translatedCertificationGroups = computed(() => {
      return certificationGroups.value.map((group) => {
        return {
          organization: group.organization,
          certifications: translateArray(group.certifications)
        };
      });
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      });
    };
    const getIconForOrganization = (organization) => {
      const iconMap = {
        "Microsoft Learning": "mdi:microsoft",
        "Google": "mdi:google",
        "Amazon": "mdi:amazon",
        "Duke University": "mdi:school",
        "Cisco": "mdi:router-network"
      };
      return iconMap[organization] || "mdi:certificate";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "achievements",
        class: "section bg-neutral-800 py-16"
      }, _attrs))} data-v-5baa64f0><div class="container-custom" data-v-5baa64f0>`);
      _push(ssrRenderComponent(AnimatedHeading, {
        text: _ctx.$t("achievements.title"),
        textClass: "text-3xl lg:text-4xl font-bold mb-10 text-white"
      }, null, _parent));
      _push(ssrRenderComponent(SectionTransition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap justify-center mb-10 gap-2" data-v-5baa64f0${_scopeId}><!--[-->`);
            ssrRenderList(tabs, (tab) => {
              _push2(`<button class="${ssrRenderClass([activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-neutral-900 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-lg text-sm font-medium transition-colors"])}" data-v-5baa64f0${_scopeId}>${ssrInterpolate(_ctx.$t(tab.nameKey))}</button>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap justify-center mb-10 gap-2" }, [
                (openBlock(), createBlock(Fragment, null, renderList(tabs, (tab) => {
                  return createVNode("button", {
                    key: tab.id,
                    class: ["px-4 py-2 rounded-lg text-sm font-medium transition-colors", activeTab.value === tab.id ? "bg-blue-600 text-white" : "bg-neutral-900 text-neutral-300 hover:bg-neutral-700"],
                    onClick: ($event) => activeTab.value = tab.id
                  }, toDisplayString(_ctx.$t(tab.nameKey)), 11, ["onClick"]);
                }), 64))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (activeTab.value === "awards") {
        _push(`<div class="space-y-8" data-v-5baa64f0>`);
        _push(ssrRenderComponent(SectionTransition, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="award-card bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg" data-v-5baa64f0${_scopeId}><div class="p-6 md:p-8" data-v-5baa64f0${_scopeId}><div class="flex items-start gap-6" data-v-5baa64f0${_scopeId}><div class="award-badge hidden md:flex shrink-0 w-16 h-16 bg-blue-600/20 rounded-full items-center justify-center" data-v-5baa64f0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:trophy",
                class: "text-blue-400",
                size: "32"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-4" data-v-5baa64f0${_scopeId}><h3 class="text-xl md:text-2xl font-bold text-white" data-v-5baa64f0${_scopeId}>${ssrInterpolate(_ctx.$t("achievements.awardTitle"))}</h3><div class="flex items-center text-neutral-400 text-sm" data-v-5baa64f0${_scopeId}><span class="flex items-center" data-v-5baa64f0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:medal",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("achievements.awardOrganization"))}</span><span class="mx-3" data-v-5baa64f0${_scopeId}>|</span><span class="flex items-center" data-v-5baa64f0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:calendar",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("achievements.awardDate"))}</span><span class="mx-3" data-v-5baa64f0${_scopeId}>|</span><span class="flex items-center" data-v-5baa64f0${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:school",
                class: "mr-1"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("achievements.awardSchool"))}</span></div><p class="text-neutral-300" data-v-5baa64f0${_scopeId}>${ssrInterpolate(_ctx.$t("achievements.awardDescription"))}</p></div></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "award-card bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg" }, [
                  createVNode("div", { class: "p-6 md:p-8" }, [
                    createVNode("div", { class: "flex items-start gap-6" }, [
                      createVNode("div", { class: "award-badge hidden md:flex shrink-0 w-16 h-16 bg-blue-600/20 rounded-full items-center justify-center" }, [
                        createVNode(_component_Icon, {
                          name: "mdi:trophy",
                          class: "text-blue-400",
                          size: "32"
                        })
                      ]),
                      createVNode("div", { class: "space-y-4" }, [
                        createVNode("h3", { class: "text-xl md:text-2xl font-bold text-white" }, toDisplayString(_ctx.$t("achievements.awardTitle")), 1),
                        createVNode("div", { class: "flex items-center text-neutral-400 text-sm" }, [
                          createVNode("span", { class: "flex items-center" }, [
                            createVNode(_component_Icon, {
                              name: "mdi:medal",
                              class: "mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("achievements.awardOrganization")), 1)
                          ]),
                          createVNode("span", { class: "mx-3" }, "|"),
                          createVNode("span", { class: "flex items-center" }, [
                            createVNode(_component_Icon, {
                              name: "mdi:calendar",
                              class: "mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("achievements.awardDate")), 1)
                          ]),
                          createVNode("span", { class: "mx-3" }, "|"),
                          createVNode("span", { class: "flex items-center" }, [
                            createVNode(_component_Icon, {
                              name: "mdi:school",
                              class: "mr-1"
                            }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("achievements.awardSchool")), 1)
                          ])
                        ]),
                        createVNode("p", { class: "text-neutral-300" }, toDisplayString(_ctx.$t("achievements.awardDescription")), 1)
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "certifications") {
        _push(`<div class="space-y-8" data-v-5baa64f0>`);
        if (loading.value) {
          _push(`<div class="flex justify-center py-12" data-v-5baa64f0><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400" data-v-5baa64f0></div></div>`);
        } else {
          _push(`<!--[-->`);
          ssrRenderList(translatedCertificationGroups.value, (group, groupIndex) => {
            _push(ssrRenderComponent(SectionTransition, {
              key: group.organization,
              delay: groupIndex * 100
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="mb-4" data-v-5baa64f0${_scopeId}><div class="flex items-center mb-4" data-v-5baa64f0${_scopeId}><div class="h-1 w-6 bg-blue-500 rounded-full mr-2" data-v-5baa64f0${_scopeId}></div><h3 class="text-xl font-bold text-blue-400" data-v-5baa64f0${_scopeId}>${ssrInterpolate(group.organization)}</h3></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" data-v-5baa64f0${_scopeId}><!--[-->`);
                  ssrRenderList(group.certifications, (cert) => {
                    _push2(`<div class="bg-neutral-900 rounded-lg border border-neutral-700 p-5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/5" data-v-5baa64f0${_scopeId}><div class="flex items-start gap-4" data-v-5baa64f0${_scopeId}><div class="certification-icon shrink-0 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center" data-v-5baa64f0${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_Icon, {
                      name: getIconForOrganization(cert.issuing_organization),
                      class: "text-blue-400",
                      size: "24"
                    }, null, _parent2, _scopeId));
                    _push2(`</div><div class="space-y-2" data-v-5baa64f0${_scopeId}><h4 class="text-lg font-semibold text-white" data-v-5baa64f0${_scopeId}>${ssrInterpolate(cert.name)}</h4><div class="text-neutral-400 text-sm" data-v-5baa64f0${_scopeId}>${ssrInterpolate(formatDate(cert.issue_date))}</div>`);
                    if (cert.skills && cert.skills.length) {
                      _push2(`<div class="flex flex-wrap gap-1 mt-2" data-v-5baa64f0${_scopeId}><!--[-->`);
                      ssrRenderList(cert.skills.slice(0, 3), (skill) => {
                        _push2(`<span class="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full" data-v-5baa64f0${_scopeId}>${ssrInterpolate(skill)}</span>`);
                      });
                      _push2(`<!--]-->`);
                      if (cert.skills.length > 3) {
                        _push2(`<span class="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full" data-v-5baa64f0${_scopeId}> +${ssrInterpolate(cert.skills.length - 3)}</span>`);
                      } else {
                        _push2(`<!---->`);
                      }
                      _push2(`</div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    if (cert.credential_url) {
                      _push2(`<div class="mt-2" data-v-5baa64f0${_scopeId}><a${ssrRenderAttr("href", cert.credential_url)} target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 text-sm inline-flex items-center" data-v-5baa64f0${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_Icon, {
                        name: "mdi:certificate",
                        class: "mr-1"
                      }, null, _parent2, _scopeId));
                      _push2(` ${ssrInterpolate(_ctx.$t("achievements.viewCredential"))} `);
                      _push2(ssrRenderComponent(_component_Icon, {
                        name: "mdi:open-in-new",
                        class: "ml-1",
                        size: "14"
                      }, null, _parent2, _scopeId));
                      _push2(`</a></div>`);
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div></div></div>`);
                  });
                  _push2(`<!--]--></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("div", { class: "flex items-center mb-4" }, [
                        createVNode("div", { class: "h-1 w-6 bg-blue-500 rounded-full mr-2" }),
                        createVNode("h3", { class: "text-xl font-bold text-blue-400" }, toDisplayString(group.organization), 1)
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(group.certifications, (cert) => {
                          return openBlock(), createBlock("div", {
                            key: cert.id,
                            class: "bg-neutral-900 rounded-lg border border-neutral-700 p-5 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/5"
                          }, [
                            createVNode("div", { class: "flex items-start gap-4" }, [
                              createVNode("div", { class: "certification-icon shrink-0 w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center" }, [
                                createVNode(_component_Icon, {
                                  name: getIconForOrganization(cert.issuing_organization),
                                  class: "text-blue-400",
                                  size: "24"
                                }, null, 8, ["name"])
                              ]),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode("h4", { class: "text-lg font-semibold text-white" }, toDisplayString(cert.name), 1),
                                createVNode("div", { class: "text-neutral-400 text-sm" }, toDisplayString(formatDate(cert.issue_date)), 1),
                                cert.skills && cert.skills.length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "flex flex-wrap gap-1 mt-2"
                                }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(cert.skills.slice(0, 3), (skill) => {
                                    return openBlock(), createBlock("span", {
                                      key: skill,
                                      class: "text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full"
                                    }, toDisplayString(skill), 1);
                                  }), 128)),
                                  cert.skills.length > 3 ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full"
                                  }, " +" + toDisplayString(cert.skills.length - 3), 1)) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                cert.credential_url ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "mt-2"
                                }, [
                                  createVNode("a", {
                                    href: cert.credential_url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    class: "text-blue-400 hover:text-blue-300 text-sm inline-flex items-center"
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "mdi:certificate",
                                      class: "mr-1"
                                    }),
                                    createTextVNode(" " + toDisplayString(_ctx.$t("achievements.viewCredential")) + " ", 1),
                                    createVNode(_component_Icon, {
                                      name: "mdi:open-in-new",
                                      class: "ml-1",
                                      size: "14"
                                    })
                                  ], 8, ["href"])
                                ])) : createCommentVNode("", true)
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});

const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/AchievmentsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AchievmentsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5baa64f0"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(CareerSection, null, null, _parent));
      _push(ssrRenderComponent(SkillsSection, null, null, _parent));
      _push(ssrRenderComponent(ProjectsSection, null, null, _parent));
      _push(ssrRenderComponent(AchievmentsSection, null, null, _parent));
      _push(ssrRenderComponent(InterestsSection, null, null, _parent));
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
