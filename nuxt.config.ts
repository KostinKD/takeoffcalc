// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "nuxt-primevue"],
    primevue: {
        usePrimeVue: true,
        cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
        options: {
            ripple: true
        },
        components: {
            prefix: 'Prime',
            include: ['Menubar', 'Button', 'Avatar', 'Accordion', 'AccordionTab', 'Dialog', 'InputText']
        }
    },
  css: [
      "primevue/resources/themes/lara-light-green/theme.css",
      "primeicons/primeicons.css"
  ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})