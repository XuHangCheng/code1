<template>
  <div>
      <img src="" alt="">
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
        this.photo = [...result.data.photoData]
      })
    }
  }
</script>

<style scoped>

</style>