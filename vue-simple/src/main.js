import Vue from 'vue'
import App from './App.vue'
import header from './components/header.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
    el: '#pageFar',
    render: h => h(header)
})