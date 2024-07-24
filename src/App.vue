
<template>
  <!-- Весь проект добавили в один див, и на него повесили обработчик события по клику, который вызывает функцию deactivateSelectorFunc. Её суть в том, что она убирает активность у выбранных селекторов. Т.е. чтобы можно было нажать на любое место на странице и селектор стал не активным.  -->
  <div className="main_wrapper" @click="deactivateSelectorFunc">
    <div className="container">
      <h1>crypto</h1>

      <inputs-block 
        :convertList="convertList" 
        :isSelectorChoosen="isSelectorChoosen" 
        @sendData="convertFunc"/>

      <error-message
        :error="error"/>

      <result-block
        :result="result"
        :resultDescr="resultDescr"/>

      <commonly-used-cur 
        :isSelectorChoosen="isSelectorChoosen"
        @activatedSelector="activateSelectorFunc" 
        @sendDataFromSelectors="convertFunc"/>
    </div>
  </div>
</template>




<script>
  import InputsBlock from '@/components/InputsBlock.vue'
  import CommonlyUsedCur from '@/components/CommonlyUsedCur.vue'
  import ResultBlock from '@/components/ResultBlock.vue'
  import ErrorMessage from '@/components/ErrorMessage.vue'

  // CryptoConvert скачен как npm-пакет
  import CryptoConvert from 'crypto-convert';

  // помещаем результат работы new CryptoConvert() в переменную для удобства
  const convert = new CryptoConvert();

  export default {
    components: { 
      InputsBlock, CommonlyUsedCur, ResultBlock, ErrorMessage
    },

    data() {
      return {
        error: '',
        result: '',
        resultDescr: '',
        convertList: [], // в эту переменную в блоке created() записывается массив со всеми доступными криптовалютами
        isSelectorChoosen: false
      }
    },

    methods: {
      // convertFunc - главная функция приложения, которая и производит конвертацию
      async convertFunc(fromCurrency, toCurrency, Sum) { 
          // проверка на пустые инпуты
          if (fromCurrency.length == 0 || toCurrency.length == 0) {
            this.error = 'Введите валюту'
            this.result = ''
            this.resultDescr = ''
            // благодаря setTimeout через 3 секунды ошибка исчезает
            setTimeout( ()=> {
              this.error = ''
            }, 3000) 
            return false
            // проверка, чтобы нельзя было ввести одну и ту же валюту в двух инпутах
          } else if (fromCurrency == toCurrency) {
            this.error = 'Введите другую валюту'
            this.result = ''
            this.resultDescr = ''
            // благодаря setTimeout через 3 секунды ошибка исчезает
            setTimeout( ()=> {
              this.error = ''
            }, 3000) 
            return false
            // проверка, чтобы нельзя было ввести в инпуте с суммой число меньше 0
          } else if (Sum <= 0) {
            this.error = 'Введите сумму'
            this.result = ''
            this.resultDescr = ''
            // благодаря setTimeout через 3 секунды ошибка исчезает
            setTimeout( ()=> {
              this.error = ''
            }, 3000) 
            return false
          } 
          // если все проверки пройдены, то очищаем строку с ошибкой
          this.error = ''
        try {
          // вызываем функцию конвертации, её скачали npm-пакетом
          await convert.ready();

          this.result = convert[fromCurrency][toCurrency](Sum).toFixed(2)
          this.resultDescr = `${fromCurrency} → ${toCurrency}`
        } catch (error) {
          // предполагается, что если конвертация не сработала, то пользователь ввёл несуществующие валюты
          this.error = 'Введите другие валюты'
          console.log(error)
        }
      },

      // функция, которая срабатывает при пользовательском событии activateSelector из компонента Selectors
      activateSelectorFunc() {
        this.result = ''
        this.resultDescr = ''
        this.isSelectorChoosen = true
      },

      // функция, которая срабатывает при нажатии на любую точку в компоненте, кроме самих селекторов
      deactivateSelectorFunc() {
        this.isSelectorChoosen = false
      },
    },
    
    async created() { // сразу же делаем запрос на сервер, чтобы получить список доступных криптовалют
      try {
        await convert.ready()
        this.convertList = convert.list.crypto
      } catch (error) {
        console.log(error)
      }
    }
  }
</script>



<style scoped>
  .main_wrapper {
    margin: 0 auto;
    width: 100%;
  }
  .container {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }

  h1 {
    margin-top: -30px;
    font-family: 'Nabla', system-ui;
    font-size: 120px;
  }
</style>
