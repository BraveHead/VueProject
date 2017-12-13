<template>
    <div class="about-content">
        <p>{{renderItem(this)}}</p>
    </div>
</template>

<script>
    export default {
        name: "aboutItem",
        data() {
          return {
            msg: [
              {'content':'我是内容1','type':'1'},
              {'content':'我是内容2','type':'2'},
              {'content':'我是内容3','type':'3'},
              {'content':'我是内容4','type':'4'},
              {'content':'我是内容5','type':'5'},
            ]
          }
        },
        computed: {

        },
        methods: {
          choiceType : (self)=>{
            return self.$route.query.type;
          },
          renderItem: (self)=>{
            let type = self.choiceType(self);
            for(let i=0;i< self.msg.length;i++){
              if(self.msg[i].type === type){
                return self.msg[i].content;
              }
            }
          }

        }
    }
</script>


<style scoped>
  .about-content{
    width: 100%;
    height: 400px;
    border: 1px solid #dedede;
  }
</style>
