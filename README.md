# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

// info from https://www.youtube.com/watch?v=5QV9wVc8c7g&t=208s

// https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557 NPM LINK

// for nuxt
create a file in plugin folder
import LearnVuebutton from 'lv-button';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(LearnVuebutton)
})

<template>
  <div>
    <p>hola aca tengo un boton</p>
    <learn-vue-button>
      holanda!
    </learn-vue-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

// for vue project

import LearnVuebutton from 'lv-button';
import 'lv-button/dist/style.css';
const app = createApp(App);
app.use(LearnVuebutton)

app.mount('#app')



