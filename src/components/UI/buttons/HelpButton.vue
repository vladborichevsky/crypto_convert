<template>
  <button
    class="help-btn h-8 cursor-pointer bg-grey_color text-xs my-1.5 mr-1.5 px-2 py-2 lg:hover:text-white lg:hover:bg-deep_dark_blue lg:focus:text-white lg:focus:bg-deep_dark_blue"
    @click="setInputVal()"
    @mouseenter="removeFocus()"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelpButton',
  setup(props, { emit }) {
    const setInputVal = () => {
      emit('setInputVal')
    }

    const removeFocus = () => {
      document.querySelectorAll('.help-btn')?.forEach((item) => {
        item.blur()
      })
    }

    return { setInputVal, removeFocus }
  },
})
</script>
