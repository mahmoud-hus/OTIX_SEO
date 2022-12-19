import Vue from 'vue'

import LangSwitcher from '~/components/layouts/LangSwitcher'

import StaticLayout from '~/components/layouts/StaticLayout'

// import { BootstrapVue } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'

// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)

const components = { LangSwitcher, StaticLayout }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
