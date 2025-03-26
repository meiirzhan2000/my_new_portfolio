import { defineComponent, computed, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { parse, icon, config } from '@fortawesome/fontawesome-svg-core';

function transformIsMeaningful(transform) {
  const meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0
  };
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: (value) => [true, false, "horizontal", "vertical", "both"].includes(value)
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: void 0
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: void 0,
      validator: (value) => ["right", "left"].includes(value)
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: void 0,
      validator: (value) => [90, 180, 270].includes(Number.parseInt(value, 10))
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].includes(
        value
      )
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: void 0
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: void 0
    },
    titleId: {
      type: String,
      default: void 0
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const icon$1 = computed(() => normalizeIconArgs(props.icon));
    const mask = computed(() => normalizeIconArgs(props.mask));
    const transform = computed(() => {
      if (props.transform) {
        const transform2 = typeof props.transform !== "object" ? parse.transform(props.transform) : props.transform;
        if (transform2 && transformIsMeaningful(transform2)) {
          return transformForSvg(transform2);
        }
      }
      return void 0;
    });
    const parsedIcon = computed(() => {
      return icon(icon$1.value, {
        classes: classes.value,
        title: props.title,
        titleId: props.titleId
      });
    });
    const parsedMask = computed(() => icon(mask.value));
    const properties = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const properties2 = {
        "aria-hidden": true,
        "data-prefix": (_a = parsedIcon.value) == null ? void 0 : _a.prefix,
        "data-icon": (_b = parsedIcon.value) == null ? void 0 : _b.iconName,
        class: classes.value,
        focusable: false,
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${(_c = parsedIcon.value) == null ? void 0 : _c.icon[0]} ${(_d = parsedIcon.value) == null ? void 0 : _d.icon[1]}`
      };
      if (props.symbol) {
        properties2.id = [(_e = parsedIcon.value) == null ? void 0 : _e.prefix, "fa", (_f = parsedIcon.value) == null ? void 0 : _f.iconName].join("-");
      }
      if (props.title) {
        properties2["aria-labelledby"] = uniqueId.value;
      }
      return properties2;
    });
    const htmlTag = computed(() => {
      const svg = getSVG();
      if (parsedMask.value) {
        const id = props.maskId || parsedMask.value.iconName;
        return `<defs>
      <clipPath id="clip-${id}">
        <path fill="currentColor" d="${parsedMask.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${id}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${svg}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${id})" mask="url(#mask-${id})" x="0" y="0" width="100%" height="100%"></rect>`;
      }
      return svg;
    });
    const classes = computed(() => {
      const classes2 = {
        "fa-spin": props.spin,
        "fa-pulse": props.pulse,
        "fa-fw": props.fixedWidth,
        "fa-border": props.border,
        "fa-li": props.listItem,
        "fa-inverse": props.inverse,
        "fa-flip": props.flip === true,
        "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
        "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
        [`fa-${props.size}`]: props.size !== void 0,
        [`fa-rotate-${props.rotation}`]: props.rotation !== void 0,
        [`fa-pull-${props.pull}`]: props.pull !== void 0,
        "fa-swap-opacity": props.swapOpacity,
        "fa-bounce": props.bounce,
        "fa-shake": props.shake,
        "fa-beat": props.beat,
        "fa-fade": props.fade,
        "fa-beat-fade": props.beatFade,
        "fa-spin-pulse": props.spinPulse,
        "fa-spin-reverse": props.spinReverse
      };
      const active = Object.keys(classes2).map((key) => classes2[key] ? key : null).filter((key) => key);
      return [config.replacementClass, ...active];
    });
    const uniqueId = computed(() => {
      return config.replacementClass + "-title-" + (props.titleId || nextUniqueId());
    });
    function normalizeIconArgs(icon2) {
      if (icon2) {
        if (typeof icon2 === "string") {
          const styles = {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab"
          };
          let prefix = styles[config.styleDefault] || "fas";
          let iconName = icon2.replace(/\bfa-/g, "");
          if (iconName.includes(" ")) {
            const tmp = iconName.split(/\s+/);
            if (tmp[0] in styles) {
              prefix = styles[tmp[0]];
            }
            iconName = tmp[1];
          }
          return { prefix, iconName };
        }
        if (Array.isArray(icon2) && icon2.length === 2) {
          return { prefix: icon2[0], iconName: icon2[1] };
        }
        if (typeof icon2 === "object" && "prefix" in icon2 && "iconName" in icon2) {
          return icon2;
        }
      }
      return void 0;
    }
    function transformForSvg(transform2) {
      var _a;
      const containerWidth = 512;
      const iconWidth = ((_a = parsedIcon.value) == null ? void 0 : _a.icon[0]) || 512;
      const x = transform2.x || 0;
      const y = transform2.y || 0;
      const size = transform2.size || 0;
      const rotate = transform2.rotate || 0;
      const flipX = transform2.flipX || 0;
      const flipY = transform2.flipY || 0;
      const outer = "translate(".concat(String(containerWidth / 2), " 256)");
      const innerTranslate = "translate(".concat(String(x * 32), ", ").concat(String(y * 32), ") ");
      const innerScale = "scale(".concat(String(size / 16 * (flipX ? -1 : 1)), ", ").concat(String(size / 16 * (flipY ? -1 : 1)), ") ");
      const innerRotate = "rotate(".concat(String(rotate), " 0 0)");
      const inner = "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate);
      const path = "translate(".concat(String(iconWidth / 2 * -1), " -256)");
      return { outer, inner, path };
    }
    function nextUniqueId() {
      const idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let size = 12;
      let id = "";
      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }
      return id;
    }
    function getSVG() {
      const fill = parsedMask.value ? "black" : "currentColor";
      const svg = [];
      let path = parsedIcon.value.icon[4];
      if (!Array.isArray(path)) {
        path = [path];
      }
      path.forEach((i) => {
        svg.push(
          `<path fill="${fill}"${transform.value ? ' transform="' + transform.value.path + '"' : ""} d="${i}"></path>`
        );
      });
      if (transform.value) {
        svg.unshift(`<g transform="${transform.value.outer}">`, `<g transform="${transform.value.inner}">`);
        svg.push("</g>", "</g>");
      }
      if (props.title) {
        svg.unshift(`<title id="${uniqueId.value}">${props.title}</title>`);
      }
      return svg.join("");
    }
    if (props.icon && !parsedIcon.value) {
      console.info("Could not find main icon", icon$1.value);
    }
    if (props.mask && !parsedMask.value) {
      console.info("Could not find mask icon", mask.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (parsedIcon.value && __props.symbol) {
        _push(`<svg${ssrRenderAttrs(mergeProps({ style: { "display": "none" } }, _attrs))}><symbol${ssrRenderAttrs(properties.value)}>${htmlTag.value ?? ""}</symbol></svg>`);
      } else if (parsedIcon.value) {
        _push(`<svg${ssrRenderAttrs(mergeProps(properties.value, _attrs))}>${htmlTag.value ?? ""}</svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=icon.vue2.mjs.map
