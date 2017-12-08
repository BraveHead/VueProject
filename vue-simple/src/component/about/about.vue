<template>
  <div id="about">
      <ul>
          <li v-for="item in aboutList">
              <router-link :to="item.path">{{item.title}}</router-link>
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
              {'title': 'aboutOne','path':'aboutOne.html'},
              {'title': 'aboutTwo','path':'aboutTwo.html'},
              {'title': 'aboutThree','path':'aboutThree.html'},
              {'title': 'aboutFour','path':'aboutFour.html'},
              {'title': 'aboutFive','path':'aboutFive.html'},
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
