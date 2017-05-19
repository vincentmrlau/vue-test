<template>
  <transition name="hello">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2 v-on:click="privIcrement">{{ privCount }}</h2>
      <h2 v-on:click="increment">{{ count }}</h2>
      <h2 @click="changePort">{{ a }}</h2>
      <h3 @click="navTo">store.state.a.port:{{ port }}</h3>
      <button @click="actA">action A</button>
    </div>
  </transition>

</template>

<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  import store from './../store'
  import * as types from './../store/type'

  export default {
    name: 'hello',
    data: function () {
      return {
        msg: 'Sweet Dating',
        privCount: 1,
        port: store.state.a.port
      }
    },
    computed: {
      ...mapGetters({
        count: 'count',
        a: 'getPort'
      })
    },
    beforeCreate: () => {
      console.log('hello before create')
      console.log(1, store.getters)
    },
    created: function () {
      console.log('Hello Created!')
    },
    beforeMount: () => {
      console.log('hello before mount')
    },
    mounted: () => {
      console.log('hello vue mounted!')
      store.commit('increment')
      store.commit('increment')
      store.commit('changePort', {port: 900})
    },
    methods: {
      ...mapMutations({
        increment: 'increment',
        changePort: 'changePort'
      }),
      privIcrement: function () {
        console.log(this.privCount)
        this.privCount++
        console.log(this.privCount)
      },
      ...mapActions({
        navTo: 'CHANGE_NAV',
        actA: [types.ACTION_B]
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color: aquamarine;
  }
  /*.hello-enter-active, .hello-leave{*/
    /*transition: all 2s;*/
  /*}*/
  /*.hello-enter, .hello-leave-active{*/
    /*opacity: 0;*/
  /*}*/


</style>
