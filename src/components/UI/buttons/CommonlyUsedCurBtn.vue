<template>
  <button
    class="cursor-pointer w-32 my-1.5 mx-1.5 p-1 rounded shadow-base text-deep_dark_blue text-sm font-semibold sm:w-fit lg:py-2.5 lg:px-3 lg:text-lg lg:hover:bg-deep_dark_blue lg:hover:text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CommonlyUsedCurBtn',
})
</script>
