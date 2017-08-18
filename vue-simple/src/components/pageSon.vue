<template>
            
    <div class="mark-data-content clear">
        <ul>
            <li v-for="item in items"  class="item-li">
                <p class="item-title">{{item.title}}</p>
                <select v-model='item.status'>
                    <option v-for="item in arr"  :key="item.id "  :label="item.label"  :value="item.value"></option>
                </select>    
            </li>
        </ul>
     </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        data() {
            return {
                items: [{
                    title: '欧洲人',
                    id: '001',
                    status: '0'
                }, {
                    title: '亚洲人',
                    id: '002',
                    status: '0'
                }],
                arr: [{
                    label: 'YES',
                    value: '0'
                }, {
                    label: 'NO',
                    value: '1'
                }],
                curArr: [],
            }
        },
        created(){
          this.curArr = this.items.copyWithin();
          console.log(this.curArr);
        },
        methods: {
            getDetail(item) {
                this.$router.push('')
            },
        },
        watch: {
           items: {
                handler:(cur) =>{
                    return this.items = cur;
                },
                deep: true
            }

        },
//        computed: {
//            compareArr(cur, old) {
//
//            }
//        }
    }
</script>