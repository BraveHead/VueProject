<template>
    <div id="page1">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "page1",
        data() {
          return {
            msg: '我是page1'
          }
        }
    }
</script>

<style scoped>
#page1{
  width： 100%;
  height: 100px;
  background-color: red;
}
</style>
