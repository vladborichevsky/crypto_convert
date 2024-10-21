<template>
  <div class="flex justify-center sm:flex sm:flex-col">
    <input-text
      :modelValue="modelValue"
      :placeholder="placeholder"
      :title="title"
      @keyup.down.prevent="focusOnHelpBtns"
      @updateModelValue="updateModelValue"
      @showHelpCurrenciesList="showHelpCurrenciesList"
      @setInputVal="setInputValue(inputName, helpCurrenciestList[0])"
      @changeInputInFocus="changeInputInFocusFunc(inputName)"/>

    <div class="w-32 h-12 mx-2.5 flex">
      <help-button 
        v-show="inputInFocus == inputName"
        v-for="(item, index) in helpCurrenciestList.slice(0, 3)" 
        :key="index"
        :tabindex="index + 2"
        @setInputVal="setInputValue(inputName, item)"
        @keyup.right.prevent="changeFocusRight(index)"
        @keyup.left.prevent="changeFocusLeft(index)"
        @keyup.up.prevent="changeFocusUp()">
          {{ item }}
      </help-button>
    </div>

  </div>
</template>

<script setup>  
  const props = defineProps({
    modelValue: String,
    helpCurrenciestList: Array,
    inputInFocus: String,
    inputName: String,
    placeholder: String,
    title: String
  })

  const emit = defineEmits(['update:modelValue', 'showHelpCurrenciesList', 'setInputValue', 'changeInputInFocusFunc'])  

  const updateModelValue = (value) => {
    emit('update:modelValue', value)
  }

  const showHelpCurrenciesList = () => {
    emit('showHelpCurrenciesList')
  }

  const setInputValue = (inputInFocus, val) => {
    emit('setInputValue', inputInFocus, val)
  }

  const changeInputInFocusFunc = (unputName) => {
    emit('changeInputInFocusFunc', unputName)
  }

  // функция, срабатывающая при нажатии клавиши "вниз" на инпутах. Ставит фокус на первой кнопке с подсказками криптовалют
  const focusOnHelpBtns = () => {
    if(props.inputName == 'from') document.querySelector('.help-btn')?.focus()
    if(props.inputName == 'to') document.querySelectorAll('.help-btn')[3]?.focus()
  }

  // функция, срабатывающая при нажатии на клавишу "вправо" на кнопках с подсказками криптовалют 
  const changeFocusRight = (index) => {
    if(props.inputName == 'from' && index <= (document.querySelectorAll('.help-btn').length - 3)) {
        document.querySelectorAll('.help-btn')[index + 1].focus()
    } else {
      if ((index + 3) <= (document.querySelectorAll('.help-btn').length - 2)) {
        document.querySelectorAll('.help-btn')[(index + 3) + 1].focus()
      }
    }
  }

  // функция, срабатывающая при нажатии на клавишу "влево" на кнопках с подсказками криптовалют
  const changeFocusLeft = (index) => {
    if(props.inputName == 'from') {
      index === 0 ? document.querySelector('.help-btn').focus() : document.querySelectorAll('.help-btn')[index - 1].focus()
    } else {
      if ((index + 3) > 3) {
        document.querySelectorAll('.help-btn')[(index + 3) - 1].focus()
      } 
    }
  }

  // функция, срабатывающая при нажатии на клавишу "вверх" на кнопках с подсказками криптовалют. Она возвращает фокус на инпут
  const changeFocusUp = () => {
    if(props.inputName == 'from') document.querySelector('input').focus()
    if(props.inputName == 'to') document.querySelectorAll('input')[1].focus()
  }
</script>