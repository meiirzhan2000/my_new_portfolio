import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_1 from './index2.mjs';
import { _ as __nuxt_component_3 } from './client-only.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { a as activityData } from './interests.mjs';
import { a as useTranslation } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { translate, setupPageMeta } = useTranslation();
    setupPageMeta("interests.title", "interests.description");
    const transformedActivityData = computed(() => {
      return activityData.map((category) => {
        return {
          categoryKey: category.category.en.toLowerCase().replace(/\s+/g, "-"),
          categoryName: translate(category.category),
          details: category.details.map((detail) => ({
            title: translate(detail.title),
            animation: detail.animation,
            description: translate(detail.description)
          }))
        };
      });
    });
    const translatedCategories = computed(() => {
      return transformedActivityData.value;
    });
    const selectedCategory = ref(null);
    const filteredCategories = computed(() => {
      if (selectedCategory.value === null) {
        return transformedActivityData.value;
      }
      return transformedActivityData.value.filter((category) => category.categoryKey === selectedCategory.value);
    });
    const showBackToTop = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      const _component_client_only = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "interests-page bg-neutral-900 min-h-screen" }, _attrs))} data-v-ba8aa6f5><div class="pt-24 pb-4 bg-gradient-to-b from-neutral-800 to-neutral-900" data-v-ba8aa6f5><div class="container-custom" data-v-ba8aa6f5><div class="mb-4" data-v-ba8aa6f5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#interests",
        class: "text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-left",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("interests.backToHome"))}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:arrow-left",
                class: "mr-2"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("interests.backToHome")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-v-ba8aa6f5>${ssrInterpolate(_ctx.$t("interests.title"))}</h1><p class="text-neutral-400 text-lg max-w-3xl" data-v-ba8aa6f5>${ssrInterpolate(_ctx.$t("interests.description"))}</p></div></div><div class="container-custom py-12" data-v-ba8aa6f5><div class="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar" data-v-ba8aa6f5><button class="${ssrRenderClass([selectedCategory.value === null ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"])}" data-v-ba8aa6f5>${ssrInterpolate(_ctx.$t("interests.allInterests"))}</button><!--[-->`);
      ssrRenderList(translatedCategories.value, (category) => {
        _push(`<button class="${ssrRenderClass([selectedCategory.value === category.categoryKey ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"])}" data-v-ba8aa6f5>${ssrInterpolate(category.categoryName)}</button>`);
      });
      _push(`<!--]--></div><div class="space-y-16" data-v-ba8aa6f5><!--[-->`);
      ssrRenderList(filteredCategories.value, (category) => {
        _push(`<div class="activity-category" data-v-ba8aa6f5><h2 class="text-2xl md:text-3xl font-bold text-blue-400 mb-8 flex items-center" data-v-ba8aa6f5><div class="h-1 w-8 bg-blue-500 rounded-full mr-3" data-v-ba8aa6f5></div> ${ssrInterpolate(category.categoryName)}</h2><div class="grid grid-cols-1 lg:grid-cols-2 gap-8" data-v-ba8aa6f5><!--[-->`);
        ssrRenderList(category.details, (activity) => {
          _push(`<div class="activity-card bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-500" data-v-ba8aa6f5><div class="card-layout" data-v-ba8aa6f5><div class="animation-wrapper" data-v-ba8aa6f5><div class="animation-container" data-v-ba8aa6f5>`);
          _push(ssrRenderComponent(_component_client_only, null, {
            fallback: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-full h-full bg-neutral-700/30 flex items-center justify-center" data-v-ba8aa6f5${_scopeId}><div class="text-neutral-400" data-v-ba8aa6f5${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "mdi:image",
                  size: "48"
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "w-full h-full bg-neutral-700/30 flex items-center justify-center" }, [
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
          }, _parent));
          _push(`</div></div><div class="content-wrapper" data-v-ba8aa6f5><h3 class="text-xl font-semibold text-white mb-3" data-v-ba8aa6f5>${ssrInterpolate(activity.title)}</h3><p class="text-neutral-400 text-sm md:text-base leading-relaxed" data-v-ba8aa6f5>${ssrInterpolate(activity.description)}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="fixed bottom-8 right-8 z-50" data-v-ba8aa6f5><button style="${ssrRenderStyle(showBackToTop.value ? null : { display: "none" })}" class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" aria-label="Back to top" data-v-ba8aa6f5>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:arrow-up",
        size: "24"
      }, null, _parent));
      _push(`</button></div></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/interests/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba8aa6f5"]]);

export { index as default };
//# sourceMappingURL=index.vue3.mjs.map
