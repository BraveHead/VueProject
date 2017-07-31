<template>
  <ul>
    <li v-for="item in items">我是 {{item.name}}, 我的年龄是 {{item.age}}</li>
  </ul>
</template>

<style>
  li{
    color:red;
  }
</style>

<script>
  export default {
    name: 'page1',
    data() {
      return {
        itmes :[
          {'name': 'xiaoming', 'age': 10},
          {'name': 'xiaoming1', 'age': 11},
          {'name': 'xiaoming2', 'age': 12},
          {'name': 'xiaoming3', 'age': 13},
        ]
      }
    }
  }
</script>
