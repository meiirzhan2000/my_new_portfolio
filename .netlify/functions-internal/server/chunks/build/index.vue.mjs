import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_1 from './index2.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
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
    const { setupPageMeta } = useTranslation();
    const certifications = ref([]);
    const loading = ref(true);
    const selectedOrganization = ref(null);
    setupPageMeta("achievements.certificationsTitle", "achievements.certificationsDescription");
    const organizations = computed(() => {
      return [...new Set(certifications.value.map((cert) => cert.issuing_organization))];
    });
    const filteredCertifications = computed(() => {
      if (!selectedOrganization.value) {
        return certifications.value;
      }
      return certifications.value.filter(
        (cert) => cert.issuing_organization === selectedOrganization.value
      );
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
        "Cisco": "mdi:certificate"
      };
      return iconMap[organization] || "mdi:certificate";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "certifications-page bg-neutral-900 min-h-screen" }, _attrs))} data-v-056f6d4c><div class="py-16 bg-gradient-to-b from-neutral-800 to-neutral-900" data-v-056f6d4c><div class="container-custom" data-v-056f6d4c><div class="mb-4" data-v-056f6d4c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/#achievements",
        class: "text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "mdi:arrow-left",
              class: "mr-2"
            }, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("achievements.backToAchievements"))}`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "mdi:arrow-left",
                class: "mr-2"
              }),
              createTextVNode(" " + toDisplayString(_ctx.$t("achievements.backToAchievements")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><h1 class="text-4xl md:text-5xl font-bold text-white mb-4" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.certificationsTitle"))}</h1><p class="text-neutral-400 text-lg max-w-3xl" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.certificationsDescription"))}</p></div></div><div class="container-custom py-12" data-v-056f6d4c>`);
      if (loading.value) {
        _push(`<div class="flex justify-center py-12" data-v-056f6d4c><div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400" data-v-056f6d4c></div></div>`);
      } else {
        _push(`<!--[--><div class="flex flex-wrap justify-center mb-10 gap-2" data-v-056f6d4c><button class="${ssrRenderClass([selectedOrganization.value === null ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-lg text-sm font-medium transition-colors"])}" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.allOrganizations"))}</button><!--[-->`);
        ssrRenderList(organizations.value, (org) => {
          _push(`<button class="${ssrRenderClass([selectedOrganization.value === org ? "bg-blue-600 text-white" : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700", "px-4 py-2 rounded-lg text-sm font-medium transition-colors"])}" data-v-056f6d4c>${ssrInterpolate(org)}</button>`);
        });
        _push(`<!--]--></div><div class="relative mt-16" data-v-056f6d4c><div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-700 transform -translate-x-1/2" data-v-056f6d4c></div><div class="space-y-16" data-v-056f6d4c><!--[-->`);
        ssrRenderList(filteredCertifications.value, (cert, index) => {
          _push(`<div class="relative" data-v-056f6d4c><div class="hidden md:flex absolute left-1/2 top-0 w-5 h-5 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-neutral-900" data-v-056f6d4c></div><div class="${ssrRenderClass([index % 2 === 0 ? "md:mr-auto md:ml-0 md:pr-10" : "md:ml-auto md:mr-0 md:pl-10", "md:w-5/12 ml-0 md:ml-auto md:mr-auto"])}" data-v-056f6d4c><div class="bg-neutral-800 rounded-lg p-6 shadow-lg border border-neutral-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl" data-v-056f6d4c><div class="flex items-center justify-between mb-4" data-v-056f6d4c><div class="certification-logo-container w-12 h-12 rounded-lg bg-neutral-700 flex items-center justify-center" data-v-056f6d4c>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: getIconForOrganization(cert.issuing_organization),
            class: "text-blue-400",
            size: "28"
          }, null, _parent));
          _push(`</div><div class="text-sm text-neutral-400" data-v-056f6d4c>${ssrInterpolate(formatDate(cert.issue_date))}</div></div><h3 class="text-xl font-bold text-white mb-2" data-v-056f6d4c>${ssrInterpolate(cert.name)}</h3><p class="text-blue-400 text-sm mb-4" data-v-056f6d4c>${ssrInterpolate(cert.issuing_organization)}</p>`);
          if (cert.skills && cert.skills.length) {
            _push(`<div class="mb-4" data-v-056f6d4c><h4 class="text-sm font-medium text-neutral-400 mb-2" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.skills"))}</h4><div class="flex flex-wrap gap-2" data-v-056f6d4c><!--[-->`);
            ssrRenderList(cert.skills, (skill) => {
              _push(`<span class="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full" data-v-056f6d4c>${ssrInterpolate(skill)}</span>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (cert.credential_url) {
            _push(`<div class="mt-4" data-v-056f6d4c><a${ssrRenderAttr("href", cert.credential_url)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors" data-v-056f6d4c>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi:certificate",
              class: "mr-2"
            }, null, _parent));
            _push(` ${ssrInterpolate(_ctx.$t("achievements.viewCredential"))} `);
            _push(ssrRenderComponent(_component_Icon, {
              name: "mdi:open-in-new",
              class: "ml-2",
              size: "14"
            }, null, _parent));
            _push(`</a></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="mt-20" data-v-056f6d4c><h2 class="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center" data-v-056f6d4c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:trophy",
          class: "mr-3 text-blue-400"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("achievements.honorsAndAwards"))}</h2><div class="bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-xl overflow-hidden border border-neutral-700 shadow-lg" data-v-056f6d4c><div class="p-8" data-v-056f6d4c><div class="flex flex-col md:flex-row md:items-start gap-6" data-v-056f6d4c><div class="award-badge md:w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto md:mx-0" data-v-056f6d4c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:trophy",
          class: "text-blue-400",
          size: "40"
        }, null, _parent));
        _push(`</div><div class="space-y-4" data-v-056f6d4c><h3 class="text-2xl font-bold text-white text-center md:text-left" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.awardTitle"))}</h3><div class="flex flex-col md:flex-row md:items-center text-neutral-400 text-sm gap-2 md:gap-0" data-v-056f6d4c><span class="flex items-center justify-center md:justify-start" data-v-056f6d4c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:medal",
          class: "mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("achievements.awardOrganization"))}</span><span class="hidden md:inline mx-3" data-v-056f6d4c>|</span><span class="flex items-center justify-center md:justify-start" data-v-056f6d4c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:calendar",
          class: "mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("achievements.awardDate"))}</span><span class="hidden md:inline mx-3" data-v-056f6d4c>|</span><span class="flex items-center justify-center md:justify-start" data-v-056f6d4c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "mdi:school",
          class: "mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(_ctx.$t("achievements.awardSchool"))}</span></div><p class="text-neutral-300 text-center md:text-left" data-v-056f6d4c>${ssrInterpolate(_ctx.$t("achievements.awardDescription"))}</p></div></div></div></div></div><!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/certifications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-056f6d4c"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
