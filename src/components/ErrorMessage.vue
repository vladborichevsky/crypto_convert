<template>
  <p 
    className="error">
      {{ error }}
  </p>
</template>



<script>
  export default {
    props: {
      error: {
        type: String,
        required: true
      }
    }
  }
</script>



<style scoped>
  .error {
    font-size: 20px;
    margin: 5px 0 10px 0;
    min-height: 25px;
    color: var(--red-color);
  }
</style>