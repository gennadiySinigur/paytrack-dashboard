import { defineConfig } from "unocss";
import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px"
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
    presetWebFonts({ 
      provider: "google",
      fonts: {
        sans: ["Onest:400,500,700,900"],
      }
    }),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetAttributify(),
  ],
  theme: {
    breakpoints: {
      sm: "320px",
      smPlus: "440px",
      md: "640px",
      mdPlus: "920px",
      lg: "1280px",
      xl2: "1536px",
      xl3: "2560px",
    },
    colors: {
      primary: {
        "blue": {
          3: "rgb(0 76 174)",
          4: "rgb(17 106 204)",
        },
        "light": "rgb(248 250 255)",
        "dark": "rgb(24 34 51)",
      },
      red: {
        500: "#ba0000"
      },
      gray: {
        3: "rgb(75 85 99)",
      },
      receivedColor: "#39ABF8",
      dueColor: "#BEE9FF"
    },
    extends: {
      keyframes: {
        spin: '{ to { transform: rotate(360deg); } }',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    }
  },
  shortcuts: [
    ['spinner', 'w-40 h-40 border-4 border-solid border-gray-200 border-t-primary-blue-4 rounded-full animate-spin'],
  ],
  rules: [
    [/^w-([\.\d]+)$/, ([, num]) => ({ width: `${num}px` })],
    [/^h-([\.\d]+)$/, ([, num]) => ({ height: `${num}px` })],
    [/^max-w-([\.\d]+)$/, ([, num]) => ({ "max-width": `${num}px` })],
    [/^min-w-([\.\d]+)$/, ([, num]) => ({ "min-width": `${num}px` })],

    ["text-xs", { "font-size": '12px', "line-height": "16px" }],
    ["text-sm", { "font-size": '14px', "line-height": "20px" }],
    ["text-base", { "font-size": '16px', "line-height": "24px" }],
    ["text-lg", { "font-size": "18px", "line-height": "28px" }],
    ["text-xl", { "font-size": "20px", "line-height": "30px" }],
    ["text-2xl", { "font-size": "24px", "line-height": "32px" }],
    ["text-3xl", { "font-size": "30px", "line-height": "36px" }],
    ["text-4xl", { "font-size": "36px", "line-height": "40px" }],
    ["text-5xl", { "font-size": "48px", "line-height": "52px" }],
    ["text-6xl", { "font-size": "60px", "line-height": "64px" }],

    ["card-shadow", { "box-shadow": "rgba(0, 0, 0, 0.15) 5.328px 5.328px 19.982px 0px" }]
  ],
})