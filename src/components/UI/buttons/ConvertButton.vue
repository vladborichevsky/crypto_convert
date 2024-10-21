<template>
  <button
    class="min-w-32 h-8 my-1.5 mx-2.5 px-2 py-2 text-xs cursor-pointer text-deep_dark_blue uppercase rounded bg-grey_color transition lg:h-12 lg:px-4 lg:py-2.5 lg:text-base lg:hover:shadow-base lg:hover:text-white" 
    @click="sendData()">
      конвертировать
  </button>
</template>


<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ConvertButton',
    setup(props, { emit }) {

      const sendData = () => {
        emit('sendData')
      }

      return { sendData }
    }
  })
</script>
