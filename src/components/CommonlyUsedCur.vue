
<template>
  <p className="description">Часто используемые валюты:</p>
  <div class="component_wrapper">
    <ul>
      <li 
        v-for="([from, to], index) in commonlyUsedCurrenciesUpCase"
        :key="index" 
        @click.stop="activateSelector(from, to, index)"
        :class="{ active: activeSelector == index}">
          {{ from }} &#10132; {{ to }}
      </li>
    </ul>

    <input-number
      v-model="sum"
      @click.stop
      @sendData="sendDataFromSelectors()"
      placeholder="Сумма"
      title="Введите сумму"/>

    <convert-button
      @click.stop="sendDataFromSelectors()"/>
  </div>
</template>
  
  
  
  
<script>
  // массив с часто используемыми конвертациями криптовалют
  const commonlyUsedCurrenciesArr = [['btc', 'usdt'], ['btc', 'eth'], ['eth', 'btc'], ['eth', 'usdt']]

  export default {
    props: {
      isSelectorChoosen: {
        type: Boolean,
        required: true
      }
    },

    emits:{
      activatedSelector: null,
      sendDataFromSelectors: null
    },

    data() {
      return {
        sum: '',
        fromCurrency: '',
        toCurrency: '',
        activeSelector: -1
      }
    },

    computed: {
      commonlyUsedCurrenciesUpCase() {
        return commonlyUsedCurrenciesArr.map(item => [item[0].toUpperCase(), item[1].toUpperCase()])
      }
    },

    methods: {
      activateSelector(from, to, index) {
        this.fromCurrency = from
        this.toCurrency = to
        this.activeSelector = index
        this.$emit('activatedSelector')
      },
      
      sendDataFromSelectors() {
        this.$emit('sendDataFromSelectors', this.fromCurrency, this.toCurrency, this.sum)
      }
    },
    
    watch: {
      isSelectorChoosen() {
        if(!this.isSelectorChoosen) {
          this.sum = ''
          this.fromCurrency = ''
          this.toCurrency = ''
          this.activeSelector = -1
        }
      }
    }
  }
</script>



<style scoped>
  .component_wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    width: 85%;
  }

  .description {
    margin-top: 150px;
    color: var(--white-color);
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style: none;
    width: 90%;
    padding: 0;
  }

  li {
    width: 110px;
    margin: 5px;
    display: block;
    padding: 12px 10px;
    color: var(--dark-blue);
    font-weight: 500;
    background-color: var(--white-color);
    text-align: center;
    border: 3px solid var(--deep-dark-blue);
    border-radius: var(--border-radius-btn);
  }

  li:hover, .active {
    cursor: pointer;
    background-color: var(--deep-dark-blue);
    color: var(--white-color);
  }
</style>