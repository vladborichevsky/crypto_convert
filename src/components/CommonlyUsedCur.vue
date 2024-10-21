
<template>
  <div>
    <p class="mt-7 uppercase text-deep_dark_blue font-medium">
      Часто используемые валюты:
    </p>

    <div class="mt-3 mb-3.5 mx-auto sm:flex sm:justify-center sm:items-center lg:mt-5">
      <div class="flex flex-col justify-center items-center sm:flex-row ">
        <commonly-used-cur-btn
            v-for="([from, to], index) in commonlyUsedCurrenciesUpCase"
            :key="index"
            :class="{ 'bg-deep_dark_blue': activeSelector == index, 'text-white': activeSelector == index }"
            @click.stop="activateSelector(from, to, index)">
              {{ from }} &#10132; {{ to }}
          </commonly-used-cur-btn>
      </div>

      <input-number
        v-model="sum"
        @click.stop
        @sendData="sendDataFromSelectors()"
        placeholder="Сумма"
        title="Введите сумму"/>

      <convert-button
        @click.stop="sendDataFromSelectors()"/>
    </div>
  </div>
</template>
  
  
<script setup>
  import { ref, computed, watch } from 'vue'

  // массив с часто используемыми конвертациями криптовалют
  const commonlyUsedCurrenciesArr = [['btc', 'usdt'], ['btc', 'eth'], ['eth', 'btc'], ['eth', 'usdt']]
  const sum = ref('')
  const fromCurrency = ref('')
  const toCurrency = ref('')
  const activeSelector = ref(-1)

  const props = defineProps({
    isSelectorChoosen: Boolean,
  })

  const emit = defineEmits(['activatedSelector', 'sendDataFromSelectors'])

  const commonlyUsedCurrenciesUpCase = computed(() => {
    return commonlyUsedCurrenciesArr.map(item => [item[0].toUpperCase(), item[1].toUpperCase()])
  }) 


  const activateSelector = (from, to, index) => {
    fromCurrency.value = from
    toCurrency.value = to
    activeSelector.value = index
    emit('activatedSelector')
  }
      
  const sendDataFromSelectors = () => {
    emit('sendDataFromSelectors', fromCurrency.value, toCurrency.value, sum.value)
  }
    
  watch(
    () => props.isSelectorChoosen,
    () => {
      if(!props.isSelectorChoosen) {
        sum.value = ''
        fromCurrency.value = ''
        toCurrency.value = ''
        activeSelector.value = -1
      }
    }
  )
</script>