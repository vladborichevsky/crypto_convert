<template>
  <input 
    :value="modelValue" 
    @input="UpdateModelValue($event.target.value)"
    @keydown.enter="sendData()"
    type="number" 
    min=0>
</template>



<script>
  export default {
    name: 'input-number',

    props: {
      modelValue: {
        type: String,
        required: true
      }
    },

    emits:[
      'update:modelValue', 'sendData'
    ],

    methods: {
      UpdateModelValue(event) {
        this.$emit('update:modelValue', event)
      },
      
      sendData() {
        this.$emit('sendData')
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