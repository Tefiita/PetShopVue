<template>
  <button class="btn btn-success w-100" @click="$emit('abrirCheckout')">
    Finalizar Compra
  </button>
</template>

<script>
export default {
  name: "BotonFinalizarCompra"
}
</script>