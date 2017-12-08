<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view></router-view>
    <footerNav></footerNav>
  </div>
</template>

<script>
  import headerNav from './component/lib/header'
  import footerNav from  './component/lib/footer'
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: { headerNav, footerNav }
  }
</script>

<style lang="scss" itemscope>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
