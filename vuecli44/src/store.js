import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //存值
  state: {
    count:0,
    a:'xxx',
    b:20
  },
  //修改state中的值
  mutations: {
    add(state,num){
      state.count += num;
    }
  },
  getters:{
    sum:(state)=>{
      return state.count + state.b;
    }
  },
  actions: {
    
  }
})
