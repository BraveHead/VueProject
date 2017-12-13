<template>
  <div>
    <ul id="itemRed">
      <li v-for="item in redMsg">
        <p>{{item.title}}</p>
        <h3>{{item.number}}</h3>
      </li>
    </ul>
  </div>
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

<style scoped lang="scss">
  #itemRed{
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background-color: #ffffff;
    height: auto;
    top: 20px;
  }
  li{
    width: 200px;
    height: 150px;
    display: block;
    float: left;
    margin-left: 20px;
    line-height: 20px;
    border: 1px solid #adadad;
  }
  p{
    color: #494949;
    padding-top: 20px;
  }
  h3 {
    color: red;
    padding: 40px;
    font-size: 20px;
  }
</style>
