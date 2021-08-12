import axios from 'axios'
export default {
  state: {
    personInfo: null,
  },
  actions: {
    axiosPersonInfo(ctx) {
      axios
        .get('https://swapi.dev/api/people/1/')
        .then((res) => {
          if (res.status === 200) {
            return res.data
          }
        })
        .then((data) => {
          console.log(data)
          ctx.commit('personInfo', data)
        })
    },
  },
  mutations: {
    personInfo(state, data) {
      state.personInfo = data
    },
  },
  getters: {
    getPersonInfo(state) {
      return state.personInfo
    },
  },
}
