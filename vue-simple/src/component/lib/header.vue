<template>
    <div id="nav-header">
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/list">项目列表</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "nav-header",
        data() {
          return {
             headerList: [
               {"msg":"首页", "link": "/"},
               {'msg':'项目列表', "link":"/list"},
               {'msg':'关于我们','link':'/about'},
             ]
          }
        }
    }
</script>

<style lang="scss">
    #nav-header{
      width: 100%;
      height: 80px;
    }
    ul{
      float: right;
      width:auto;
      height: 80px;
    }
    li{
      display: block;
      float: left;
      width: auto;
      height: 80px;
      text-align: center;
      line-height: 80px;
    }
</style>
