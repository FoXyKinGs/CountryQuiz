<template>
  <div class="home">
    <div v-if="data.length == 0">Loading generate data..</div>
    <div v-else>
      <h1>COUNTRY QUIZ</h1>
      <div class="box">
        <Question :data='data'/>
      </div>
    </div>
  </div>
</template>

<script>
import Question from '../components/Question'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Question
  },
  methods: {
    ...mapActions({
      getData: 'getData'
    })
  },
  computed: {
    ...mapGetters({
      data: 'exData'
    })
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
  .home{
    line-height: 1em;
  }

  h1{
    color: #FFF;
  }

  .box{
    position: relative;
    width: 350px;
    height: 100%;
    background-color: #FFF;
    border-radius: 25px;
    padding: 40px 10px 20px 10px;
  }

</style>
