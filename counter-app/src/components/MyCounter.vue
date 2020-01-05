<template>
  <div>
    Count: {{ count }}
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count'])
    // count() {
    //   return this.$store.state.count;
    // }    
  },    
  methods: {
     ...mapActions(['incrementAsync']),   
    // incrementAsync () {
    //   this.$store.dispatch({
    //     type: 'incrementAsync'
    //   })
    // },
    ...mapMutations(['increment'])
    // onclick () {
    //   this.$store.commit('increment')
    // }    
  }
}
</script>