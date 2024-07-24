<template>
  <button 
    @click="sendData()" 
    className="convert_btn">
      конвертировать
  </button>
</template>



<script>
  export default {
    name: 'convert-button',

    emits:{
      sendData: null
    },

    methods: {
      sendData() {
        this.$emit('sendData')
      }
    }
  }
</script>



<style scoped>
  .convert_btn {
    width: 200px;
    height: 52px;
    padding: 10px 15px;
    color: var(--yellow-color);
    text-transform: uppercase;
    cursor: pointer;
    border: 3px solid var(--deep-dark-blue);
    border-radius: var(--border-radius-btn);
    background-color: var(--deep-dark-blue);
    font-size: 16px;
  }

  .convert_btn:hover {
    color: var(--white-color);
  }
</style>