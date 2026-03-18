<template>

  <div class="container mt-4">

    <h2>Carrito de compras</h2>

    <div v-if="$store.state.carrito.length === 0">
      <p class="text-center my-5">Tu carrito está vacío</p>
    </div>

    <div v-for="item in $store.state.carrito" :key="item.sku" class="card mb-3">

      <div class="card-body d-flex justify-content-between align-items-center">
        <img :src="`/img/alimento-perro/${item.img}.png`" :alt="item.nombre" class="img mb-2 card">
        <div>

          <h5>{{ item.nombre }}</h5>
          <p>{{ item.formato }}</p>
        </div>

        <div>
          <button @click="disminuir(item.sku)">-</button>
          <span class="mx-2">{{ item.cantidad }}</span>
          <button @click="aumentar(item.sku)">+</button>
        </div>

        <div>
          ${{ (item.precio * item.cantidad).toLocaleString('es-CL') }}
        </div>

        <button @click="eliminar(item.sku)" class="btn btn-danger btn-sm">
          Eliminar
        </button>

      </div>

    </div>

    <h3 class="text-end" v-show ="$store.state.carrito.length > 0">
      Total: ${{ $store.getters.totalCarrito.toLocaleString('es-CL') }}
    </h3>
    <div class="d-flex justify-content-end align-items-center gap-3 mb-4 ">
      <BotonFinalizarCompra @abrirCheckout="abrirModal" v-show="$store.state.carrito.length > 0" />
      <CheckoutModal :carrito="$store.state.carrito" />
    </div>
  </div>


</template>

<script>
import BotonFinalizarCompra from "../components/compra/BotonFinalizarCompra.vue"
import CheckoutModal from "../components/compra/CheckoutModal.vue"
import { Modal } from "bootstrap"

export default {
  name: 'CarritoView',
  components: {
    BotonFinalizarCompra,
    CheckoutModal
  },

  computed: {
    carrito() {
      return this.$store.state.carrito
    }
  },

  methods: {
    aumentar(sku) {
      this.$store.commit("AUMENTAR_CANTIDAD", sku)
    },

    disminuir(sku) {
      this.$store.commit("DISMINUIR_CANTIDAD", sku)
    },

    eliminar(sku) {
      this.$store.commit("ELIMINAR_PRODUCTO", sku)
    },

    abrirModal() {
      const modal = new Modal(document.getElementById("checkoutModal"))
      modal.show()
    }
  }
}
</script>

<style scoped>
.text-center.my-5 {
  border: 1px solid green;
  background-color: #c7f2b9;
  padding: 20px;
}

img {
  max-width: 150px;

}
</style>