<template>
    <div id="itemContent">
        <h2>{{projectMsg}}</h2>
    </div>
</template>

<script>
    export default {
        name: "itemContent",
        data() {
          return {
            projectMsg: '购买项目！',
          }
        }
    }
</script>

<style scoped>
  #itemContent{
    width: 100%;
    height: 300px;
    text-align: center;
    line-height: 300px;
    color: #ffffff;
    background-color: #2dafff;
    font-size: 28px;
  }
</style>
