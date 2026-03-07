<template>

  <div class="container mt-4">

    <h2>Carrito de compras</h2>

    <div v-if="$store.state.carrito.length === 0">
      <p class="text-center my-5">Tu carrito está vacío</p>
    </div>

    <div v-for="item in $store.state.carrito" :key="item.sku" class="card mb-3">

      <div class="card-body d-flex justify-content-between align-items-center">
        <img :src="`/img/alimento-perro/${item.img}.png`" :alt="item.nombre" class="img mb-2 card" >
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

    <h3 class="text-end">
      Total: ${{ $store.getters.totalCarrito.toLocaleString('es-CL') }}
    </h3>

  </div>

</template>

<script>
export default {

  name: 'CarritoView',

  methods: {
    aumentar(sku) {
      this.$store.commit("AUMENTAR_CANTIDAD", sku)
    },

    disminuir(sku) {
      this.$store.commit("DISMINUIR_CANTIDAD", sku)
    },

    eliminar(sku) {
      this.$store.commit("ELIMINAR_PRODUCTO", sku)
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