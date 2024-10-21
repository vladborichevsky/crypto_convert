<template>
  <div class="min-h-24 flex flex-col justify-center items-center lg:min-h-32">
    <p
      v-if="!result" 
      class="text-xl text-red-800">
        {{ errorMes }}
    </p>

    <div
      v-if="!errorMes"  
      class="text-2xl font-black text-deep_dark_blue sm:text-4xl md:text-5xl lg:text-6xl">
        {{ result }}
    </div>

    <div 
      v-if="!errorMes"
      class="text-base font-medium text-deep_dark_blue md:text-xl">
        {{ resultDescr }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    result: [ Number, String ],
    resultDescr: String,
    errorMes: String
  })
</script>