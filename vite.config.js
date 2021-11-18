import autoprefixer from 'autoprefixer'
import postcssVariables from 'postcss-css-variables'
import postcssMediaVariables from 'postcss-media-variables'
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        postcssMediaVariables(),
        postcssVariables(),
        postcssMediaVariables(),
      ],
    },
  },
})
