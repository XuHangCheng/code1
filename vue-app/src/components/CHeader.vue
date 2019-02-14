<template>
    <div>
        <header>
            <span class="gohome">首页</span>
            电影
        </header>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    header{
        height: 1rem;
        background: #ff0036;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 1rem;
        color: #ffffff;
    }
    .gohome{
        position: absolute;
        left: 0.1rem;
        top: 50%;
        transform: translateY(-50%);
    }
</style>