import presetIcons from "@unocss/preset-icons";
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        "display": "inline-block",
        "vertical-align": "middle",
        // ...
      },
    }),
    // ...other presets
  ],
})