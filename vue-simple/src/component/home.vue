<template>
    <div id="home">
        <div>
            {{msg}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
          return {
            msg : '我是首页！'
          }
        }
    }
</script>

<style scoped lang="scss">
  #home{
    display: block;
    width: 100%;
    height: 300px;
    background-color: #2dafff;
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 300px;
  }
</style>
