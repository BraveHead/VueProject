<template>
  <div id="about">
      <ul>
          <li v-for="item in aboutList">
              <router-link :to="{name:'aboutItem',params:{aboutId: 'aboutItem'},query: {type: item.type} }">{{item.title}}</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "about",
        data() {
          return {
            aboutList: [
              {'title': 'aboutOne','type':'1'},
              {'title': 'aboutTwo','type':'2'},
              {'title': 'aboutThree','type':'3'},
              {'title': 'aboutFour','type':'4'},
              {'title': 'aboutFive','type':'5'},
            ]
          }
        }
    }
</script>

<style scoped>
  ul{
    width: 100%;
    float: none;
    display: flex;
    align-items: center;
  }
  li{
    flex: 1;
  }
</style>
