<template>
  <input 
    class="w-32 h-8 outline-none border-0 rounded shadow-base text-xs px-2 py-2 my-1.5 mx-2.5 text-left text-deep_dark_blue md:w-fit lg:h-12 lg:px-4 lg:py-2.5 lg:text-base"
    :value="modelValue"
    type="text"
    @input="[ updateModelValue($event.target.value), showHelpCurrenciesList() ]"
    @keydown.enter="setInputVal"
    @focus="changeInputInFocus">
</template>


<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      modelValue: {
        type: String,
        required: true
      }
    },

    name: 'InputText',

    setup(props, { emit }) {

      const updateModelValue = (value) => {
        emit('updateModelValue', value.toUpperCase())
      }

      const setInputVal = () => {
        if(props.modelValue.length > 0) {
          emit('setInputVal')
        }  
      }

      const showHelpCurrenciesList = () => {
        emit('showHelpCurrenciesList')
      }

      const changeInputInFocus = () => {
        emit('changeInputInFocus')
      }

      return { props, updateModelValue, setInputVal, showHelpCurrenciesList, changeInputInFocus }
    }
  })
</script>
