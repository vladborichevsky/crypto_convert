
<template>
  <div class="min-h-24 sm:flex sm:justify-center">
    <div class="sm:flex sm:justify-center">
      <input-with-help-btns
        v-model="fromCurrency"
        :helpCurrenciestList="helpCurrenciestList"
        :inputName="inputNameFrom"
        :inputInFocus="inputInFocus"
        :placeholder="placeholderFrom"
        :title="titleCur"
        @click="changeHideHelpBtns"
        @changeInputInFocusFunc="changeInputInFocusFunc"
        @showHelpCurrenciesList="showHelpCurrenciesList(fromCurrency)"
        @setInputValue="setInputValue"/>

      <input-with-help-btns
        v-model="toCurrency"
        :helpCurrenciestList="helpCurrenciestList"
        :inputName="inputNameTo"
        :inputInFocus="inputInFocus"
        :placeholder="placeholderTo"
        :title="titleCur"
        @changeInputInFocusFunc="changeInputInFocusFunc"
        @showHelpCurrenciesList="showHelpCurrenciesList(toCurrency)"
        @setInputValue="setInputValue"/>
    </div>

    <div>
      <input-number
        v-model="sum"
        @sendData="sendData()"
        :placeholder="placeholderSum"
        :title="titleSum"/>

      <convert-button
        @sendData="sendData()"/>
    </div>
  </div>
</template>




<script setup>
  import { ref, watch } from 'vue';
  import InputWithHelpBtns from './InputWithHelpBtns.vue';

  const titleCur = 'Введите криптовалюту'
  const titleSum = 'Введите сумму'
  const placeholderFrom = 'Из какой валюты'
  const placeholderTo = 'В какую валюту'
  const placeholderSum = 'Сумма'
  
  const inputNameFrom = 'from'
  const inputNameTo = 'to'

  const fromCurrency = ref('')
  const toCurrency = ref('')
  const sum = ref('')
  const helpCurrenciestList = ref([])
  const inputInFocus = ref('')

  const props = defineProps({
    convertList: Array,
    isSelectorChoosen: Boolean,
    hideHelpBtns: Boolean
  })

  const emit = defineEmits(['sendData', 'changeHideHelpBtns'])

  watch(
    () => props.isSelectorChoosen,
    () => {
      if(props.isSelectorChoosen) {
        fromCurrency.value = ''
        toCurrency.value = ''
        sum.value = ''
        helpCurrenciestList.value = []
      }
    }
  )

  watch(
    () => props.hideHelpBtns,
    () => {
      if(props.hideHelpBtns) {
        helpCurrenciestList.value = []
      }
    }
  )

  const showHelpCurrenciesList = (val) => {
    changeHideHelpBtns()
    if (val == '') {
      helpCurrenciestList.value = []
    } else {
      helpCurrenciestList.value = props.convertList.filter(item => item.includes(val) )
    }
  }
        
  const sendData = () => {
    emit('sendData', fromCurrency.value, toCurrency.value, sum.value)
  }

  const setInputValue = (id, val) => {
    if(helpCurrenciestList.value.length == 0) {
      return false
    } 

    if(id == 'from') fromCurrency.value = val
    if(id == 'to') toCurrency.value = val

    helpCurrenciestList.value = [] 
  }

  const changeInputInFocusFunc = (inputName) => {
    if(inputName == 'from') inputInFocus.value = 'from'
    if(inputName == 'to') inputInFocus.value = 'to'
  }

  const changeHideHelpBtns = () => {
    emit('changeHideHelpBtns')
  }
</script>
