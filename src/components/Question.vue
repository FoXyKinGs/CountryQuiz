<template>
  <div>
    <div v-if="no < 10">
      <img class="icon" src="../assets/icon.svg" width="110">
      <div class="question">
        <div v-if="questions.length !== 0">
          <img v-if="questions[no].flag != null"
          class="flag"
          :src="questions[no].flag"
          width="90">
        </div>
        <p
        v-if="questions.length !== 0"
        class="question-text">
        {{questions[no].question}}
        </p>
      </div>
      <div v-if="questions.length !== 0">
        <button
        v-for="(item, index) in questions[no].answers"
        :key="index" class="answer-box"
        :id='`myBtn${item.title}`'
        @click="insertAnswer(item.status, item.title)"
        :value="item.title">
          <div class="answer">
            <p class="title">{{item.title}}</p>
            <p class="txt">{{item.answer}}</p>
          </div>
          <div>
            <img src="" :id='`check${item.title}`' class="check">
          </div>
        </button>
      </div>
      <div v-if="no < 9" class="btn">
        <button v-if="isTrue" class="s" @click="nextQuestion">Next</button>
      </div>
      <div v-else class="btn">
        <button v-if="isTrue" class="s" @click="nextQuestion">Finish</button>
      </div>
    </div>
    <div class="result" v-else>
      <div class="center">
        <img src="../assets/congrats.svg" width="250" height="200">
      </div>
      <h1>Result</h1>
      <div>
        <p
        class="center"
        style="color: #5256a0;"
        >You got
        <span class="score">{{score}}</span>
        correct answers
        </p>
      </div>
      <div class="center">
        <button class="reset" @click="reset">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['data'],
  data () {
    return {
      isTrue: false,
      datas: this.data,
      questions: []
    }
  },
  methods: {
    ...mapActions({
      changeQuestion: 'changeQuestion',
      resetQuestion: 'resetQuestion',
      addScore: 'addScore',
      resetScore: 'resetScore',
      resetFirstTime: 'isFirstTime'
    }),
    nextQuestion () {
      this.changeQuestion()
      this.isTrue = false
      this.resetFirstTime(true)
      const reset = ['A', 'B', 'C', 'D']
      reset.forEach(item => {
        const element = document.getElementById(`myBtn${item}`)
        element.classList.remove('green')
        element.classList.remove('red')
        element.disabled = false
        document.getElementById(`check${item}`).src = ''
      })
    },
    insertAnswer (data, title) {
      const reset = ['A', 'B', 'C', 'D']
      if (this.checkFirstTime) {
        if (data === true) {
          this.isTrue = true
          this.addScore(1)
          this.resetFirstTime(false)
          const element = document.getElementById(`myBtn${title}`)
          element.classList.add('green')
          element.classList.remove('red')
          document.getElementById(`check${title}`).src = '../assets/icons/correct.svg'
          reset.forEach(item => {
            const elem = document.getElementById(`myBtn${item}`)
            elem.disabled = true
          })
        } else {
          this.isTrue = false
          this.addScore(0)
          this.resetFirstTime(false)
          const element = document.getElementById(`myBtn${title}`)
          element.classList.add('red')
          document.getElementById(`check${title}`).src = '../assets/icons/wrong.svg'
        }
      } else {
        if (data === true) {
          this.isTrue = true
          const element = document.getElementById(`myBtn${title}`)
          element.classList.add('green')
          element.classList.remove('red')
          document.getElementById(`check${title}`).src = '../assets/icons/correct.svg'
          reset.forEach(item => {
            const elem = document.getElementById(`myBtn${item}`)
            elem.disabled = true
          })
        } else {
          this.isTrue = false
          const element = document.getElementById(`myBtn${title}`)
          element.classList.add('red')
          document.getElementById(`check${title}`).src = '../assets/icons/wrong.svg'
        }
      }
    },
    reset () {
      this.resetQuestion()
      this.resetScore()
    },
    makeQuestion () {
      this.questions.push(
        {
          no: 1,
          question: `${this.datas[135].capital} is the capital of?`,
          answers: [
            { title: 'A', answer: `${this.datas[100].name}`, status: false },
            { title: 'B', answer: `${this.datas[135].name}`, status: true },
            { title: 'C', answer: `${this.datas[15].name}`, status: false },
            { title: 'D', answer: `${this.datas[35].name}`, status: false }
          ]
        },
        {
          no: 2,
          question: `${this.datas[100].capital} is the capital of?`,
          answers: [
            { title: 'A', answer: `${this.datas[100].name}`, status: true },
            { title: 'B', answer: `${this.datas[122].name}`, status: false },
            { title: 'C', answer: `${this.datas[90].name}`, status: false },
            { title: 'D', answer: `${this.datas[25].name}`, status: false }
          ]
        },
        {
          no: 3,
          flag: `${this.datas[176].flag}`,
          question: 'Which country does this flag belong to?',
          answers: [
            { title: 'A', answer: `${this.datas[67].name}`, status: false },
            { title: 'B', answer: `${this.datas[2].name}`, status: false },
            { title: 'C', answer: `${this.datas[140].name}`, status: false },
            { title: 'D', answer: `${this.datas[176].name}`, status: true }
          ]
        },
        {
          no: 4,
          flag: `${this.datas[20].flag}`,
          question: 'Which country does this flag belong to?',
          answers: [
            { title: 'A', answer: `${this.datas[43].name}`, status: false },
            { title: 'B', answer: `${this.datas[54].name}`, status: false },
            { title: 'C', answer: `${this.datas[55].name}`, status: false },
            { title: 'D', answer: `${this.datas[20].name}`, status: true }
          ]
        },
        {
          no: 5,
          question: `${this.datas[56].capital} is the capital of?`,
          answers: [
            { title: 'A', answer: `${this.datas[35].name}`, status: false },
            { title: 'B', answer: `${this.datas[56].name}`, status: true },
            { title: 'C', answer: `${this.datas[15].name}`, status: false },
            { title: 'D', answer: `${this.datas[78].name}`, status: false }
          ]
        },
        {
          no: 6,
          question: `${this.datas[210].capital} is the capital of?`,
          answers: [
            { title: 'A', answer: `${this.datas[35].name}`, status: false },
            { title: 'B', answer: `${this.datas[67].name}`, status: false },
            { title: 'C', answer: `${this.datas[4].name}`, status: false },
            { title: 'D', answer: `${this.datas[210].name}`, status: true }
          ]
        },
        {
          no: 7,
          flag: `${this.datas[240].flag}`,
          question: 'Which country does this flag belong to?',
          answers: [
            { title: 'A', answer: `${this.datas[240].name}`, status: true },
            { title: 'B', answer: `${this.datas[242].name}`, status: false },
            { title: 'C', answer: `${this.datas[235].name}`, status: false },
            { title: 'D', answer: `${this.datas[225].name}`, status: false }
          ]
        },
        {
          no: 8,
          flag: `${this.datas[180].flag}`,
          question: 'Which country does this flag belong to?',
          answers: [
            { title: 'A', answer: `${this.datas[220].name}`, status: false },
            { title: 'B', answer: `${this.datas[210].name}`, status: false },
            { title: 'C', answer: `${this.datas[180].name}`, status: true },
            { title: 'D', answer: `${this.datas[211].name}`, status: false }
          ]
        },
        {
          no: 9,
          flag: `${this.datas[129].flag}`,
          question: 'Which country does this flag belong to?',
          answers: [
            { title: 'A', answer: `${this.datas[249].name}`, status: false },
            { title: 'B', answer: `${this.datas[129].name}`, status: true },
            { title: 'C', answer: `${this.datas[7].name}`, status: false },
            { title: 'D', answer: `${this.datas[31].name}`, status: false }
          ]
        },
        {
          no: 10,
          question: `${this.datas[105].capital} is the capital of?`,
          answers: [
            { title: 'A', answer: `${this.datas[5].name}`, status: false },
            { title: 'B', answer: `${this.datas[2].name}`, status: false },
            { title: 'C', answer: `${this.datas[59].name}`, status: false },
            { title: 'D', answer: `${this.datas[105].name}`, status: true }
          ]
        }
      )
    }
  },
  computed: {
    ...mapGetters({
      no: 'exNo',
      score: 'exScore',
      checkFirstTime: 'exFirst'
    })
  },
  mounted () {
    if (this.data !== 0) {
      this.makeQuestion()
    }
  }
}
</script>

<style scoped>
  .question .question-text{
    font-size: 22px;
    color: #5256a0;
    line-height: 1;
  }

  .green{
    background-color: #60be89 !important;
    color: #FFFFFF !important;
  }

  .red{
    background-color: #ea8281 !important;
    color: #FFFFFF !important;
  }

  .answer-box{
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    height: 50px;
    width: 100%;
    outline: none;
    cursor: pointer;
    padding: 0 10px;
    border: 1px solid #aaabc5;
    color: #aaabc5;
    margin-top: 15px;
    border-radius: 15px;
  }

  .answer-box:hover{
    background: #F9A826;
    color: #FFFFFF;
    border: none;
  }

  .answer{
    width: 100%;
    display: flex;
  }

  .answer p.txt{
    margin-left: 25px;
    transform: translateY(2px);
  }

  .answer p.title{
    font-size: 16px;
  }

  .btn{
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .btn .s{
    margin-left: auto;
    margin-top: 25px;
    width: 80px;
    height: 35px;
    border: none;
    background-color: #F9A826;
    color: #FFFFFF;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    font-weight: bolder;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .icon {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-55px);
  }

  h1 {
    display: flex;
    justify-content: center;
    color: #5256a0;
  }

  .score{
    font-size: 26px;
    color: #6ac190;
    margin: 0 5px;
    transform: translateY(-3px)
  }

  .reset{
    border: 2px solid #5256a0;
    background-color: #FFFFFF;
    font-weight: bold;
    width: 140px;
    height: 40px;
    color:#5256a0;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
  }

  .flag{
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
  }

  .check{
    transform: translateY(10px);
  }
</style>
