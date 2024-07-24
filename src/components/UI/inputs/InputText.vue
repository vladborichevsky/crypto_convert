<template>
  <input 
    :value="modelValue" 
    @input="[ updateModelValue($event.target.value), showHelpCurrenciesList() ]"
    @keydown.enter="setInputVal"
    @focus="changeInputInFocus" 
    type="text">
</template>



<script>
  export default {
    name: 'input-text',

    props: {
      modelValue: {
        type: String,
        required: true
      }
    },

    emits:[
      'updateModelValue', 'setInputVal', 'showHelpCurrenciesList', 'changeInputInFocus'
    ],

    methods: {
      updateModelValue(value) {
        this.$emit('updateModelValue', value.toUpperCase())
      },

      setInputVal() {
        if(this.modelValue.length > 0) {
          this.$emit('setInputVal')
        }  
      },

      showHelpCurrenciesList() {
        this.$emit('showHelpCurrenciesList')
      },

      changeInputInFocus() {
        this.$emit('changeInputInFocus')
      }
    }
  }
</script>



<style scoped>
  input {
    width: 200px;
    outline: none;
    border-radius: var(--border-radius-input);
    border: 0;
    padding: 10px 15px;
    background-color: var(--white-color);
    color: var(--main-color);
    font-size: 18px;
    text-align: left;
    margin: 5px;
  }
  
  label {
    color: var(--white-color);
  }
</style>