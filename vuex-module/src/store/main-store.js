export default {
  namespaced: true,
  state: {
    // 現在の時刻で初期化
    updated: (new Date()).toTimeString(),
  },
  getters: {
    // updatedを取得
    localUpdated(state) {
      return state.updated
    },
    // eslint-disable-next-line
    hoge(state, getters, rootState,rootGetters) {
      return rootState.hoge
    }   
  },  
  mutations: {
    // updatedを現在時刻で更新
    setUpdated(state) {
      state.updated = (new Date()).toTimeString()
    }
  },
  actions: {
    hogeAction(context) {
      // ルートモジュールのhogeミューテーションをコミット
      context.commit('hoge', null, { root: true });
    }    
  }  
}