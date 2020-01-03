<template>
  <div id="app">
    メイン：{{mainUpdated}} <br />
    サブ：{{subUpdated}} <br />
    <input type="button" value="更新" v-on:click="onclick" />
  </div>
</template>

<script>
// import { mapState } from 'vuex' // 記法その1・その2
// import { mapMutations } from 'vuex' // 記法その1・その2
import { createNamespacedHelpers } from 'vuex'; // 記法その3

const { mapState, mapMutations } = createNamespacedHelpers('main') // 記法その3

export default {
  name: 'app',  
  computed: mapState({
    mainUpdated() {
      return this.$store.state.main.updated;
    },
    subUpdated() {
      return this.$store.state.sub.updated;
    },
    updated: state => state.main.updated
  }),

  methods: {    
    onclick() {
      // this['main/setUpdated']() // 記法その1
      this.setUpdated() // 記法その2・その3
    },
    // ...mapMutations([ 'main/setUpdated', 'sub/setUpdated' ]) // 記法その1
    // ...mapMutations('main', [ 'setUpdated' ]) // 記法その2
    ...mapMutations([ 'setUpdated' ]) // 記法その3     
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
