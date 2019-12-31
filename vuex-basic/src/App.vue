<template>
  <div>
    <input type="button" value="-" v-on:click="minus" />    
    {{count}}
    <input type="button" value="+" v-on:click="plus" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app',

  /*
  computed: {
    // 現在のカウント値を取得
    count() {
      return this.$store.state.count
    }
  },
  */

  computed: mapState(['count']),

  /*
  // 配列／オブジェクト形式のマッピングを統合
  computed: {
    ...mapState([ 'count' ]),
    ...mapState({ countNumber: 'count' })
  },
  */

  methods: {
    minus() {
      this.$store.commit('minus')
      // console.log(this.$store.state.count)
    },
    plus() {
      this.$store.commit('plus')
      // console.log(this.$store.state.count)
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
