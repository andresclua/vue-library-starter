# Vue 3 + Plugin development


## Use

### Vue Projects
```
import LearnVuebutton from 'lv-button';
import 'lv-button/dist/style.css';
const app = createApp(App);
app.use(LearnVuebutton)

app.mount('#app')
```

```
<template>
  <div>
    <p>this is my custom button</p>
    <learn-vue-button>
      hi!
    </learn-vue-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
```
### Nuxt Projects
create a file in plugin folder
```
import LearnVuebutton from 'lv-button';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(LearnVuebutton)
})
```
```
<template>
  <div>
    <p>this is my custom button</p>
    <learn-vue-button>
      hi!
    </learn-vue-button>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
```
## Aditional
For testing it is recomended tu use npm link  [here](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557) 
More info can be found  [here](https://www.youtube.com/watch?v=5QV9wVc8c7g&t=208s) 
