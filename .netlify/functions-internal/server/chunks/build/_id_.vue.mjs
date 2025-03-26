import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_1 from './index2.mjs';
import { _ as __nuxt_component_3 } from './client-only.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { a as useTranslation, b as useRoute, u as useHead } from './server.mjs';
import { _ as _sfc_main$1 } from './NuxtImg.vue2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { translate, translateObject } = useTranslation();
    const route = useRoute();
    route.params.id;
    const rawProject = ref(null);
    const loading = ref(true);
    const error = ref(false);
    ref(false);
    ref(0);
    const project = computed(() => {
      if (!rawProject.value) return {};
      return translateObject(rawProject.value);
    });
    useHead({
      title: computed(() => project.value.title ? `${project.value.title} | ${t("projects.projectDetails")}` : t("projects.projectDetails")),
      meta: [
        {
          name: "description",
          content: computed(() => {
            const desc = project.value.description;
            if (typeof desc === "string") {
              return desc.substring(0, 160);
            }
            return t("projects.projectDetails");
          })
        }
      ]
    });
    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_NuxtImg = _sfc_main$1;
      const _component_client_only = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-detail-page bg-neutral-900 min-h-screen" }, _attrs))} data-v-961be832>`);
      if (loading.value) {
        _push(`<div class="h-screen flex items-center justify-center" data-v-961be832><div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-400" data-v-961be832></div></div>`);
      } else if (error.value) {
        _push(`<div class="container-custom py-20 text-center" data-v-961be832><h1 class="text-3xl font-bold text-white mb-4" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.notFound"))}</h1><p class="text-neutral-400 mb-8" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.notFoundMessage"))}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#projects",
          class: "inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:arrow-left",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("projects.backToProjects"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "mdi:arrow-left",
                  class: "mr-2"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("projects.backToProjects")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!--[--><div class="relative" data-v-961be832><div class="bg-neutral-800" data-v-961be832><div class="absolute inset-0 opacity-20 overflow-hidden" data-v-961be832>`);
        if (project.value.image_url) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: project.value.image_url,
            alt: unref(translate)(project.value.title),
            class: "w-full h-full object-cover object-center filter blur-md",
            loading: "lazy"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900" data-v-961be832></div><div class="container-custom relative z-10 pt-24 pb-16" data-v-961be832><div class="mb-8" data-v-961be832>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/#projects",
          class: "inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "mdi:arrow-left",
                class: "mr-2"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(_ctx.$t("projects.backToProjects"))}`);
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "mdi:arrow-left",
                  class: "mr-2"
                }),
                createTextVNode(" " + toDisplayString(_ctx.$t("projects.backToProjects")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex flex-col md:flex-row gap-8" data-v-961be832><div class="md:w-2/3" data-v-961be832><h1 class="text-3xl md:text-4xl font-bold text-white mb-4" data-v-961be832>${ssrInterpolate(unref(translate)(project.value.title))}</h1>`);
        if (project.value.technologies && project.value.technologies.length) {
          _push(`<div class="flex flex-wrap gap-2 mb-4" data-v-961be832><!--[-->`);
          ssrRenderList(project.value.technologies, (tech) => {
            _push(`<span class="text-sm bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full" data-v-961be832>${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (project.value.completion_date) {
          _push(`<div class="text-neutral-400 mb-6" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.completed"))}: ${ssrInterpolate(formatDate(project.value.completion_date))}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="md:w-1/3" data-v-961be832><div class="rounded-lg overflow-hidden shadow-lg" data-v-961be832>`);
        if (project.value.image_url) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: project.value.image_url,
            alt: unref(translate)(project.value.title),
            width: "500",
            height: "300",
            format: "webp",
            quality: "90",
            class: "w-full object-cover object-center"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div></div><div class="container-custom py-12" data-v-961be832><div class="grid grid-cols-1 lg:grid-cols-12 gap-12" data-v-961be832><div class="lg:col-span-7 space-y-6" data-v-961be832><h2 class="text-2xl font-bold text-white mb-4" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.overview"))}</h2><div class="text-neutral-300 space-y-4" data-v-961be832><p data-v-961be832>${ssrInterpolate(unref(translate)(project.value.description))}</p></div></div><div class="lg:col-span-5" data-v-961be832><div class="bg-neutral-800 rounded-xl p-6 shadow-lg" data-v-961be832><h3 class="text-xl font-bold text-white mb-4" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.projectDetails"))}</h3><div class="space-y-4" data-v-961be832><div data-v-961be832><h4 class="text-sm font-medium text-neutral-400 mb-1" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.completed"))}</h4><p class="text-white" data-v-961be832>${ssrInterpolate(formatDate(project.value.completion_date))}</p></div>`);
        if (project.value.technologies && project.value.technologies.length) {
          _push(`<div data-v-961be832><h4 class="text-sm font-medium text-neutral-400 mb-1" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.technologies"))}</h4><div class="flex flex-wrap gap-2" data-v-961be832><!--[-->`);
          ssrRenderList(project.value.technologies, (tech) => {
            _push(`<span class="text-sm bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full" data-v-961be832>${ssrInterpolate(tech)}</span>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
        if (project.value.images && project.value.images.length > 1) {
          _push(`<div class="mt-16" data-v-961be832><h2 class="text-2xl font-bold text-white mb-6" data-v-961be832>${ssrInterpolate(_ctx.$t("projects.projectGallery"))}</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-961be832><!--[-->`);
          ssrRenderList(project.value.images, (image, index) => {
            _push(`<div class="gallery-item rounded-lg overflow-hidden shadow-md cursor-pointer" data-v-961be832>`);
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: image,
              alt: `${unref(translate)(project.value.title)} - Image ${index + 1}`,
              width: "400",
              height: "300",
              format: "webp",
              quality: "80",
              class: "w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-110",
              loading: "lazy"
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-961be832"]]);

export { _id_ as default };
//# sourceMappingURL=_id_.vue.mjs.map
