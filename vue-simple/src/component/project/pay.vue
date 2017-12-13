<template>
    <div>
      <h1>{{msg}}</h1>
      <button>
        <router-link :to="{name:'home'}">购买完成，回到首页！</router-link>
      </button>
    </div>
</template>

<script>
    export default {
        name: "pay",
        data() {
          return {
            msg: '购买'
          }
        }
    }
</script>

<style scoped>
  h1{
    width: 100%;
    height: 300px;
    background-color: burlywood;
    color: #ffffff;
  }
</style>
