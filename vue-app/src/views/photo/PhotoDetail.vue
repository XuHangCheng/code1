<template>
    <div>
        {{photos[$route.param.index]}}
        <div class="bg" :style="{background:'url('+photos[$route.params.index].src+')'}">

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(['photos'])
        }
    }
</script>

<style scoped>

</style>