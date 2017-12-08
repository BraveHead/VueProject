<template>
    <div id="detailItem">
      123123123
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
#detailItem{
  width: 100%;
  height: 800px;
  background-color: red;
}
</style>
