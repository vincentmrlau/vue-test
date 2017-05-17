<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-on:click="privIcrement">{{ privCount }}</h2>
    <h2 v-on:click="increment">{{ count }}</h2>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'
  export default {
    name: 'hello',
    data: function () {
      return {
        msg: 'Sweet Dating',
        privCount: 1
      }
    },
    computed: {
      ...mapGetters({
        count: 'count'
      })
    },
    beforeCreate: () => {
      console.log('hello before create')
    },
    created: function () {
      console.log('Hello Created!')
    },
    beforeMount: () => {
      console.log('hello before mount')
    },
    mounted: () => {
      console.log('hello vue mounted!')
    },
    methods: {
      ...mapMutations({
        increment: 'increment'
      }),
      privIcrement: function (state) {
        console.log(state.privCount)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
