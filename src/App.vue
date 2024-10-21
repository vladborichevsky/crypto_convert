
<template>
  <!-- Весь проект добавили в один див, и на него повесили обработчик события по клику, который вызывает функцию deactivate. Её суть в том, что она убирает активность у выбранных селекторов, и скрывает кнопки с подсказками валют. Т.е. чтобы можно было нажать на любое место на странице и селектор стал не активным, а также кнопки с подсказками пропали.  -->
  <div 
    class="mx-auto h-full sm:h-screen"
    @click="deactivate($event)">
      <div class="mx-auto h-full w-full flex flex-col justify-between">
        <h1 class="text-4xl font-bold mb-8 text-deep_dark_blue lg:text-6xl xl:text-9xl">crypto</h1>

        <inputs-block 
          :convertList="convertList" 
          :isSelectorChoosen="isSelectorChoosen"
          :hideHelpBtns="hideHelpBtns"
          @sendData="convertFunc"
          @changeHideHelpBtns="changeHideHelpBtns"/>

        <result-block
          :result="result"
          :resultDescr="resultDescr"
          :errorMes="errorMes"/>

        <commonly-used-cur 
          :isSelectorChoosen="isSelectorChoosen"
          @activatedSelector="activateSelectorFunc" 
          @sendDataFromSelectors="convertFunc"/>
      </div>
  </div>
</template>




<script setup>
  import { ref } from 'vue'

  import InputsBlock from '@/components/InputsBlock.vue'
  import CommonlyUsedCur from '@/components/CommonlyUsedCur.vue'
  import ResultBlock from '@/components/ResultBlock.vue'

  // CryptoConvert скачен как npm-пакет
  import CryptoConvert from 'crypto-convert';

  // помещаем результат работы new CryptoConvert() в переменную для удобства
  const convert = new CryptoConvert();

  const errorMes = ref('') 
  const result = ref('')
  const resultDescr = ref('') 
  const convertList = ref([]) // в эту переменную записывается массив со всеми доступными криптовалютами
  const isSelectorChoosen = ref(false)
  const hideHelpBtns = ref(false)

// convertFunc - главная функция приложения, которая и производит конвертацию
  const convertFunc = async (fromCurrency, toCurrency, Sum) => { 
    // проверка на пустые инпуты
    if (fromCurrency.length == 0 || toCurrency.length == 0) {
      errorMes.value = 'Введите валюту'
      result.value = ''
      resultDescr.value = ''
      // благодаря setTimeout через 3 секунды ошибка исчезает
      setTimeout( ()=> {
        errorMes.value = ''
      }, 3000) 
      return false
      // проверка, чтобы нельзя было ввести одну и ту же валюту в двух инпутах
    } else if (fromCurrency == toCurrency) {
      errorMes.value = 'Введите другую валюту'
      result.value = ''
      resultDescr.value = ''
      // благодаря setTimeout через 3 секунды ошибка исчезает
      setTimeout( ()=> {
        errorMes = ''
      }, 3000) 
      return false
      // проверка, чтобы нельзя было ввести в инпуте с суммой число меньше 0
    } else if (Sum <= 0) {
      errorMes.value = 'Введите сумму'
      result.value = ''
      resultDescr.value = ''
      // благодаря setTimeout через 3 секунды ошибка исчезает
      setTimeout( ()=> {
        errorMes.value = ''
      }, 3000) 
      return false
    } 
    // если все проверки пройдены, то очищаем строку с ошибкой
    errorMes.value = ''
    try {
      // вызываем функцию конвертации, её скачали npm-пакетом
      await convert.ready();

      result.value = convert[fromCurrency][toCurrency](Sum).toFixed(2)
      resultDescr.value = `${Sum} ${fromCurrency} → ${toCurrency}`
    } catch (error) {
      // предполагается, что если конвертация не сработала, то пользователь ввёл несуществующие валюты
      errorMes.value = 'Введите другие валюты'
      result.value = ''
      resultDescr.value = ''

      // благодаря setTimeout через 3 секунды ошибка исчезает
      setTimeout( ()=> {
        errorMes.value = ''
      }, 3000) 
    }
  }

  // функция, которая срабатывает при пользовательском событии activateSelector из компонента Selectors
  const activateSelectorFunc = () => {
    result.value = ''
    resultDescr.value = ''
    isSelectorChoosen.value = true
  }

  // функция, которая убирает активность с селектором часто используемых валют, а также скрывает кнопки с подсказками валют
  const deactivate = (event) => {
    document.querySelectorAll('input').forEach(item => {
      if(item != event.target) hideHelpBtns.value = true
    })
    
    isSelectorChoosen.value = false
  }

  const changeHideHelpBtns = () => {
    hideHelpBtns.value = false
  }
    
  // функция, которая делает запрос на сервер, чтобы получить список доступных криптовалют
  const updateConvertList = async () => {
    try {
      await convert.ready()
      convertList.value = convert.list.crypto
    } catch (error) {
      console.log(error)
    }
  }

  updateConvertList()
</script>
