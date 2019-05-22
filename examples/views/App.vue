<template>
    <div class="myapp">
        <div class="type1">
        </div>
        <div class="type2">
        </div>
        <div class="type3">
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"Hello World"
            };
        },
        methods:{
            
        },
        mounted () {
            let myloading1 = this.$kdLoading.show({
                type: 'type1', //loading类型，不传的话默认type2
                target: document.querySelector('.type1'), //loading区域，不传默认整个页面
                contant: 'type1...'
            });	
            let myloading2 = this.$kdLoading.show({
                type: 'type2', //loading类型，不传的话默认type2
                target: document.querySelector('.type2'), //loading区域，不传默认整个页面
                contant: 'type2...'
            });	
            let myloading3 = this.$kdLoading.show({
                type: 'type3', //loading类型，不传的话默认type2
                target: document.querySelector('.type3'), //loading区域，不传默认整个页面
                contant: 'type3...'
            });	
        }
    };
</script>
<style lang="scss" scoped>
    .myapp{
    }
    .type1{
        display: inline-block;
        width: 400px;
        height: 400px;
    }
    .type2{
        display: inline-block;
        width: 400px;
        height: 400px;
    }
    .type3{
        width: 800px;
        height: 800px;
    }
</style>