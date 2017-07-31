<template>
    <div id="app">
        <ul>
            <li v-for="item in items">我的名字是 {{item.name}}, 我今年{{item.age}}岁了!</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                items: [
                    {"name":"xiaozhang1","age":10},
                    {"name":"xiaozhang2","age":11},
                    {"name":"xiaozhang3","age":12},
                ]
            }
        }
    }
</script>
<style>
    #app{
        width:200px;
        height: 200px;
        background: red;
        color: white;
    }
</style>