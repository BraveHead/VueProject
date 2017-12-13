<template>
    <div id="detailItem">
      <div class="paramsID">{{ this.$route.params.itemId }}</div>
       <itemContent></itemContent>
       <itemRed></itemRed>
       <itemBuy></itemBuy>
    </div>
</template>
<script>
  import itemContent from './components/itemContent'
  import itemRed from './components/itemRed'
  import itemBuy from './components/itemBuy'
    export default {
        name: "detailItem",
        data() {
          return {
            msg: ''
          }
        },
      components: {
        itemContent,
        itemRed,
        itemBuy
      }
    }
</script>

<style scoped>
  .paramsID{
    width: 100%;
    height: 100px;
    background-color: yellow;
    color: red;
  }
#detailItem{
  position: relative;
  width: 100%;
  height: 800px;
  background-color: red;
}
</style>
