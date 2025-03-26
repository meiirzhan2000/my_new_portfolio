import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { a as useTranslation } from './server.mjs';
import { _ as _sfc_main$1 } from './icon.vue2.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.mjs';
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
import '@iconify/vue';
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
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const isHeaderVisible = ref(false);
    ref(null);
    const { isEnglish, isTranslating } = useTranslation();
    const navItems = [
      { key: "home", href: "#" },
      { key: "career", href: "#career" },
      { key: "projects", href: "#projects" },
      { key: "skills", href: "#skills" },
      { key: "achievements", href: "#achievements" },
      { key: "interests", href: "#interests" },
      { key: "contact", href: "#contact" }
    ];
    const socialLinks = [
      { platform: "GitHub", url: "https://github.com/meiirzhan2000", icon: ["fab", "github"] },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/meiirzhan-baitangatov-871632248/", icon: ["fab", "linkedin"] }
    ];
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_fa_icon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen bg-neutral-900 text-neutral-50" }, _attrs))} data-v-49592a46><header class="${ssrRenderClass([{ "is-visible": isHeaderVisible.value }, "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-neutral-800 header-animation"])}" data-v-49592a46><div class="container-custom py-4" data-v-49592a46><nav class="flex items-center justify-between" data-v-49592a46>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-xl font-bold text-primary-400 logo-animation"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$t("nav.portfolio"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$t("nav.portfolio")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="${ssrRenderClass([{ "is-visible": isHeaderVisible.value }, "hidden md:flex items-center space-x-8 nav-items-container"])}" data-v-49592a46><!--[-->`);
      ssrRenderList(navItems, (item, index) => {
        _push(`<li class="nav-item" style="${ssrRenderStyle({ "animation-delay": `${index * 0.1 + 0.2}s` })}" data-v-49592a46>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          class: "text-neutral-300 hover:text-primary-400 transition-colors relative group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`nav.${item.key}`))} <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full" data-v-49592a46${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`nav.${item.key}`)) + " ", 1),
                createVNode("span", { class: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 transition-all group-hover:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--><li class="nav-item" style="${ssrRenderStyle({ "animation-delay": "0.9s" })}" data-v-49592a46><button class="${ssrRenderClass([{ "opacity-50": unref(isTranslating) }, "flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all"])}" aria-label="Switch Language"${ssrRenderAttr("title", unref(isEnglish) ? "Переключить на русский" : "Switch to English")} data-v-49592a46><span class="text-sm font-medium" data-v-49592a46>${ssrInterpolate(unref(isEnglish) ? "RU" : "EN")}</span></button></li></ul><div class="md:hidden flex items-center space-x-3" data-v-49592a46><button class="${ssrRenderClass([{ "opacity-50": unref(isTranslating) }, "p-2 rounded-md text-neutral-400 hover:text-neutral-100 transition-colors"])}" aria-label="Switch Language"${ssrRenderAttr("title", unref(isEnglish) ? "Переключить на русский" : "Switch to English")} data-v-49592a46><span class="text-sm font-medium" data-v-49592a46>${ssrInterpolate(unref(isEnglish) ? "RU" : "EN")}</span></button><button class="${ssrRenderClass([{ "rotate-90": isMobileMenuOpen.value }, "p-2 rounded-md text-neutral-400 hover:text-neutral-100 transition-transform duration-300"])}" aria-label="Toggle mobile menu" data-v-49592a46>`);
      if (!isMobileMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-49592a46><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-v-49592a46></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-49592a46><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-49592a46></path></svg>`);
      }
      _push(`</button></div></nav></div><div style="${ssrRenderStyle(isMobileMenuOpen.value ? null : { display: "none" })}" class="md:hidden bg-black border-t border-neutral-800" data-v-49592a46><div class="container-custom py-4" data-v-49592a46><ul class="space-y-4" data-v-49592a46><!--[-->`);
      ssrRenderList(navItems, (item, index) => {
        _push(`<li class="mobile-nav-item" style="${ssrRenderStyle({ "animation-delay": `${index * 0.05}s` })}" data-v-49592a46>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.href,
          onClick: toggleMobileMenu,
          class: "block py-2 text-neutral-300 hover:text-primary-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(_ctx.$t(`nav.${item.key}`))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t(`nav.${item.key}`)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></header><main class="flex-grow" data-v-49592a46>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="bg-black border-t border-neutral-800" data-v-49592a46><div class="container-custom py-8" data-v-49592a46><div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" data-v-49592a46><p class="text-neutral-400" data-v-49592a46> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ${ssrInterpolate(_ctx.$t("footer.copyright"))}</p><div class="flex space-x-4" data-v-49592a46><!--[-->`);
      ssrRenderList(socialLinks, (link, index) => {
        _push(`<a${ssrRenderAttr("href", link.url)} target="_blank" rel="noopener noreferrer" class="footer-icon-animation" style="${ssrRenderStyle({ "animation-delay": `${index * 0.1}s` })}"${ssrRenderAttr("title", _ctx.$t(`social.${link.platform.toLowerCase()}`))} data-v-49592a46>`);
        _push(ssrRenderComponent(_component_fa_icon, {
          icon: link.icon,
          class: "text-xl text-neutral-400 hover:text-primary-400 transition-colors"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div></div></div></footer></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-49592a46"]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
