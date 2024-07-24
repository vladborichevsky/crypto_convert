<template>
  <button 
    @click="setInputVal()" 
    class="help_button">
      <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'help-button',

    emits:{
      setInputVal: null
    },

    methods: {
      setInputVal() {
        this.$emit('setInputVal')
      },
    }
    
  }
</script>

<style scoped>
  .help_button {
    cursor: pointer;
    padding: 2px 3px;
    margin: 0 3px;
  }

  .help_button:hover {
    background-color: var(--deep-dark-blue);
    color: var(--white-color);
  }
</style>