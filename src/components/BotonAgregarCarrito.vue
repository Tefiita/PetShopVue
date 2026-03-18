<template>
  <button class="btn btn-primary w-100" @click="agregar">
    Agregar al carrito
  </button>
</template>

<script>
export default {
  name: "BotonAgregarCarrito",

  props: {
    producto: Object,
    variante: Object
  },

  methods: {
    agregar() {
      this.$store.commit("AGREGAR_AL_CARRITO", {
        id: this.producto.id,
        nombre: this.producto.nombreProducto,
        img: this.producto.img,
        sku: this.variante.sku,
        formato: this.variante.formato,
        precio: this.variante.precio
      })
    }
  }
}
</script>