import Vue from 'vue'
import header from './../components/header.vue'
import common from './../components/common.vue'

new Vue({
    el: '#pageFar',
    render: h => h(header)
});

new Vue({
    el: '.common-module',
    render: h => h(common)
});