<template>
  <div>
    <ul>
      <li v-for="item in msgList">
        <a class="project-name">{{item.project}}</a>
          <button>
            <router-link :to='{name:"detail",params:{itemId: "detailItem" }}'>点击购买</router-link>
          </button>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
        name: "list",
        data() {
          return {
            msgList: [
              {'project':'项目1','id':100},
              {'project':'项目2','id':101},
              {'project':'项目3','id':102},
              {'project':'项目4','id':103},
              {'project':'项目5','id':104},
            ]
          }
        }
    }
</script>

<style scoped lang="scss">
  ul{
    width: 100%;
    display: block;
    height: auto;
  }
  li{
    width: 100%;
    height: 60px;
    margin-top: 20px;
    border-bottom: 1px solid #adadad;
  }
  .project-name{
    display: block;
    float: left;
    width: auto;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #2dafff;
    font-weight: bold;
    font-size: 20px;
  }
  button{
    width: 80px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
    margin-right: 20px;
    margin-top: 14px;
    background-color: #2dafff;
    color: #ffffff;
    font-size: 16px;
  }
  a{
    color: #ffffff;
  }
</style>
