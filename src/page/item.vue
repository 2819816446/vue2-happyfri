<template>
    <div class="item_container">
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
    import itemcontainer from '../components/itemcontainer.vue'

    export default {
        name: 'item',
        components: {
            itemcontainer
        },
        created(){
           //进入题目页面，开始计时
            this.$store.commit('REMBER_TIME');
        }
    }
</script>


<style>
    .item_container{
        
    }
</style>