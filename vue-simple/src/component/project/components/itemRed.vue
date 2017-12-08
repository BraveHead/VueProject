<template>
    <ul id="itemRed">
        <li v-for="item in redMsg">
          <p>{{item.title}}</p>
          <h3>{{item.number}}</h3>
        </li>
    </ul>
</template>
<script>
    export default {
        name: "itemRed",
        data() {
          return {
            redMsg: [
              {'title':'red1', 'number':'100'},
              {'title':'red2', 'number':'140'},
              {'title':'red3', 'number':'500'},
              {'title':'red4', 'number':'7800'},
              {'title':'red5', 'number':'1200'},
            ]
          }
        }
    }
</script>

<style scoped>
  #itemRed{
    margin-top: 100px;
  }
  li{
    width: 200px;
    height: 150px;
    display: block;
    float: left;
    margin-left: 20px;
  }
  p{
    color: #494949;
  }
  h3 {
    color: red;
    font-size: 20px;
  }
</style>
