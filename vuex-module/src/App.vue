<template>
  <div id="app">
    メイン：{{mainUpdated}} <br />
    サブ：{{subUpdated}} <br />
    <input type="button" value="更新" v-on:click="setUpdated" />
    <hr>
    ゲッター： {{localUpdated}} {{hoge}}
    <input type="button" value="+" v-on:click="updateHoge" />    
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    // mainモジュールの時刻を取得
    mainUpdated() {
      return this.$store.state.main.updated;
    },
    // subモジュールの時刻を取得
    subUpdated() {
      return this.$store.state.sub.updated;
    },
    localUpdated() {
      // return this.$store.getters.localUpdated;
      return this.$store.getters['main/localUpdated'];
    },    
    hoge(){
      //return this.$store.state.hoge;
      return this.$store.getters['main/hoge'];
    },    
  },
  methods: {
    // main／subモジュールの時刻（updated）を取得
    setUpdated() {
      this.$store.commit('main/setUpdated')
      this.$store.commit('sub/setUpdated')     
    },
    updateHoge() {
      this.$store.dispatch('main/hogeAction');
    }       
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>