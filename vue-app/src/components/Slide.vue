<template>
    <div class="slide-wrapper">
        <ul class="slide">
            <transition-group name='fade'>
            <li v-for='(value,index) in imgs' :key='index' v-show="index == iNow"> 
                <img :src="value" alt="">
            </li>
            </transition-group>
        </ul>
        <ul class="btns">
            <li v-for='(i,index) in imgs.length' :key="index" :class='{active:index==iNow}' ></li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imgs:[
                     "http://localhost:8080/img/4.jpg",
                     "http://localhost:8080/img/5.jpg",
                     "http://localhost:8080/img/6.jpg",
                ],
                iNow:0

            }
        },
        props:[],
        created(){
            setInterval(()=>{
                this.iNow++;
                if(this.iNow == this.imgs.length){
                    this.iNow = 0
                }
            },2000)
        }
    }
</script>

<style scoped>
.slide img{
    width: 100%;
    height: 4rem;
}
.slide li{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.slide-wrapper{
    position: relative;
    height:4rem;
    overflow: hidden;
}
.btns{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0.2rem;
    z-index: 1;
}
.btns li{
    width:0.2rem;
    height:0.2rem;
    background: #f00;
    border-radius: 50%;
    float: left;
    margin-right:0.1rem;
}
.btns li.active{
    background: #0f0;
}
.fade-enter{
    transform: translateX(100%)
}
.fade-enter-active{
    transition: transform 2s ease;

}
.fade-enter-to{
    transform: translateX(0)

}
.fade-leave{
    transform: translateX(0)
}
.fade-leave-active{
    transition: transform 2s ease;
}
.fade-leave-to{
    transform: translateX(-100%)

}
</style>