<template>
  <div className="input_wrapper">   
      
    <input-text
      :modelValue="modelValue" 
      @updateModelValue="updateModelValue"
      @showHelpCurrenciesList="showHelpCurrenciesList"
      @setInputVal="setInputValue(inputName, helpCurrenciestList[0])"
      @changeInputInFocus="changeInputInFocusFunc(inputName)"
      :placeholder="placeholder"
      :title="title"/>

    <div className="help_btns_wrapper">
      <div 
        v-show="inputInFocus == inputName"
        v-for="(item, index) in helpCurrenciestList.slice(0, 3)" 
        :key="index">
          <help-button 
            @setInputVal="setInputValue(inputName, item)">
              {{ item }}
          </help-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type: String,
        required: true
      },

      helpCurrenciestList: {
        type: Array,
        required: true
      },

      inputInFocus: {
        type: String,
        required: true
      },

      inputName: {
        type: String,
        required: true
      },

      placeholder: {
        type: String,
        required: true
      },

      title: {
        type: String,
        required: true
      }
    },

    emits:[
      'update:modelValue', 'showHelpCurrenciesList', 'setInputValue', 'changeInputInFocusFunc'
    ],

    methods: {
      updateModelValue(value) {
        this.$emit('update:modelValue', value)
      },

      showHelpCurrenciesList() {
        this.$emit('showHelpCurrenciesList')
      },

      setInputValue(inputInFocus, val) {
        this.$emit('setInputValue', inputInFocus, val)
      },

      changeInputInFocusFunc(unputName) {
        this.$emit('changeInputInFocusFunc', unputName)
      }
    }
  }
</script>

<style scoped>
  .input_wrapper{
    display: flex;
    flex-direction: column;
  }

  .help_btns_wrapper {
    height: 50px;
    display: flex;
    justify-content: left;
    padding-left: 8px;
  }
</style>