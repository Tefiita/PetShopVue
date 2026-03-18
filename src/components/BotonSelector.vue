<template>
  <div class="mb-2">
    <button
      v-for="(variante, index) in variantes"
      :key="variante.sku"
      class="btn btn-sm me-2"
      :class="index === modelo ? 'btn-dark' : 'btn-outline-dark'"
      @click="$emit('update:modelValue', index)"
    >
      {{ variante.formato }}
    </button>
  </div>
</template>

<script>
export default {
  name: "SelectorVariante",

  props: {
    variantes: Array,
    modelValue: Number
  },

  computed:{
    modelo(){
      return this.modelValue
    }
  }
}
</script>