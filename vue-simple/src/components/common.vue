<template>
    <div class="common">
        {{text}}
    </div>
</template>

<style>
    .common{
        width: 100%;
        height: 200px;
        background-color: blue;
    }
</style>


<script>
    export default {
        name: 'common',
        data() {
            return {
                text: '我是 common'
            }
        }
    }
</script>