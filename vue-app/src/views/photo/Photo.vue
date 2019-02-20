<template>
  <div class='photo'>
      <img v-for="(photoSrc,index) in photo" :key="index" :src="photoSrc.src" @click="goDetail" alt="">
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        photo:[]
      }
    },
    created(){
      axios.get('/data/photodata.json')
      .then((result)=>{
        // this.photo = [...result.data.photoData]
        this.$store.commit('addPhoto',result.data.photoData)
      })
    },
      methods:{
          goDetail(index){
              this.$router.push('/photodetail/'+index);
          }
      }
    }
  
</script>

<style scoped>

</style>