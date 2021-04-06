export default {
  state: {
    orders: []
  },
  mutations: {
    createOrder (state, payload) {
      return state.orders.push(payload)
    }
  },
  actions: {
    async createOrder () {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 4000)
      })
    }
  },
  getters: {}
}
