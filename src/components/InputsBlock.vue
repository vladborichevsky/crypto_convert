
<template>
  <div className="component_wrapper">

    <inputs-block-el
      v-model="fromCurrency"
      :helpCurrenciestList="helpCurrenciestList"
      :inputName="inputNameFrom"
      :inputInFocus="inputInFocus"
      :placeholder="placeholderFrom"
      :title="titleCur"
      @changeInputInFocusFunc="changeInputInFocusFunc"
      @showHelpCurrenciesList="showHelpCurrenciesList(fromCurrency)"
      @setInputValue="setInputValue"/>

    <inputs-block-el
      v-model="toCurrency"
      :helpCurrenciestList="helpCurrenciestList"
      :inputName="inputNameTo"
      :inputInFocus="inputInFocus"
      :placeholder="placeholderTo"
      :title="titleCur"
      @changeInputInFocusFunc="changeInputInFocusFunc"
      @showHelpCurrenciesList="showHelpCurrenciesList(toCurrency)"
      @setInputValue="setInputValue"/>

    <div>
      <input-number
        v-model="sum"
        @sendData="sendData()"
        :placeholder="placeholderSum"
        :title="titleSum"/>
    </div>

    <convert-button
      @sendData="sendData()"/>
      
  </div>
</template>




<script>
  import InputsBlockEl from './InputsBlockEl.vue';

  export default {
    setup() {
      const titleCur = 'Введите криптовалюту'
      const titleSum = 'Введите сумму'
      const placeholderFrom = 'Из какой валюты'
      const placeholderTo = 'В какую валюту'
      const placeholderSum = 'Сумма'
      const inputNameFrom = 'from'
      const inputNameTo = 'to'

      return { titleCur, titleSum, placeholderFrom, placeholderTo, placeholderSum, inputNameFrom, inputNameTo }
    },

    components: {
      InputsBlockEl
    },

    props: {
      convertList: {
        type: Array,
        required: true
        },

      isSelectorChoosen: {
        type: Boolean,
        required: true
      }
    },

    emits:{
      sendData: null
      },

    data() {
      return {
        fromCurrency: '',
        toCurrency: '',
        sum: '',
        helpCurrenciestList: [],
        inputInFocus: ''
        }
      },

      watch: {
        isSelectorChoosen() {
          if(this.isSelectorChoosen) {
            this.fromCurrency = ''
            this.toCurrency = ''
            this.sum = ''
          }
        }
      },

      methods: {
        async showHelpCurrenciesList(val) {
          if (val == '') {
            this.helpCurrenciestList = []
          } else {
            this.helpCurrenciestList = await this.convertList.filter(item => item.includes(val) )
          }
        },
        
        sendData() {
          this.$emit('sendData', this.fromCurrency, this.toCurrency, this.sum)
        },

        setInputValue(id, val) {
          if(this.helpCurrenciestList.length == 0) {
            return false
          } 

          if(id == 'from') this.fromCurrency = val
          if(id == 'to') this.toCurrency = val

          this.helpCurrenciestList = [] 
        },

        changeInputInFocusFunc(inputName) {
          if(inputName == 'from') this.inputInFocus = 'from'
          if(inputName == 'to') this.inputInFocus = 'to'
        }
      }
    }
</script>



<style scoped>
  .component_wrapper {
    display: flex;
    justify-content: center;
  }
</style>