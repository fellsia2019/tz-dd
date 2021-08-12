import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import personInfo from './modules/personInfo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { personInfo },
})
