export default {
  state: {
    // 現在の時刻
    updated: (new Date()).toLocaleTimeString(),
  },
  mutations: {
    // updatedを現在時刻で更新
    setUpdated(state) {
      state.updated = (new Date()).toLocaleTimeString()
    }
  }
}