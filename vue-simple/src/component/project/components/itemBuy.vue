<template>
  <div id="itemBuy">
      <span>标的名称：{{msg.title}} </span>
      <span>红包抵扣：{{msg.redNumber}} </span>
      <span>还需支付：{{msg.number}} </span>
      <button>
        <router-link :to="{name:'pay',params:{ itemId:'detailItem'}, query:{payId: msg.number}}">点击支付</router-link>
      </button>
  </div>
</template>

<script>
    export default {
        name: "itemBuy",
        data() {
          return {
            msg: {
              title:'张三',
              redNumber: 100,
              number: 10000,
            }
          }
        }
    }
</script>
<style scoped>
  #itemBuy{
    width: 100%;
    height: auto;
    display: flex;
    align-items: left;
    justify-content: space-between;
  }
  span{
    width: 200px;
  }
  button{
    float: right;
    margin-right: 40px;
    width: 80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #ffffff;
    background-color: #2dafff;
  }
</style>
