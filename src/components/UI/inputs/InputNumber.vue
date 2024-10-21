<template>
  <input
    class="w-32 h-8 outline-none border-0 rounded shadow-base text-xs px-2 py-2 my-1.5 mx-2.5 text-left text-deep_dark_blue md:w-fit lg:h-12 lg:px-4 lg:py-2.5 lg:text-base"
    :value="modelValue" 
    type="number"
    min=0
    @input="UpdateModelValue($event.target.value)"
    @keydown.enter="sendData()">
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

    name: 'InputNumber',

    setup(props, { emit }) {

      const UpdateModelValue = (event) => {
        emit('update:modelValue', event)
      }
      
      const sendData = () => {
        emit('sendData')
      }

      return { props, UpdateModelValue, sendData }
    }
  })
</script>
