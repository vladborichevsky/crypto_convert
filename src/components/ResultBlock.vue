<template>
  <div class="result_wrapper">
    <div className="result">{{ result }}</div>
    <div className="result_descr"> {{ resultDescr }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      result: {
        type: [ Number, String ],
        required: true
      },

      resultDescr: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .result_wrapper {
    min-height: 120px;
  }

  .result {
    font-family: 'Nabla', system-ui;
    font-size: 60px;
  }

  .result_descr {
    color:var(--white-color);
  }
</style>