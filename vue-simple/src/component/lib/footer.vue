<template>
  <div id="nav-footer">
    <ul>
      <li v-for="item in footerList">{{item.msg}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "nav-footer",
    data() {
      return {
        footerList: [
          {"msg":"底部"},
          {'msg':'底部2' },
          {'msg':'底部三' },
        ]
      }
    }
  }
</script>

<style lang="scss">
  #nav-footer{
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
  }
  ul{
    width:auto;
    height: 80px;
    display: flex;
    align-items: left;
    justify-items: center;
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
