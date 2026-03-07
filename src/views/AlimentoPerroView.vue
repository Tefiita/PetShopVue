<template>
  <div v-if="productos.length === 0">
    <div class="container2 text-center my-5">
      <p class="text-center pt-2">No hay productos disponibles en esta categoría.</p>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="row" v-if="productos.length > 0">
        <div class="col-md-3 mb-3" v-for="producto in productos" :key="producto.id">
          <CardProductos :producto="producto" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CardProductos from '../components/alimento/CardProductos.vue'
import { obtenerProductosPorCategoria } from '../assets/js/recorrido.js'

export default {
  name: 'AlimentoPerroView',
  components: {
    CardProductos
  },
  data() {
    return {
      productos: []
    }
  },
  async mounted() {
    this.productos = await obtenerProductosPorCategoria("alimento perro");
  }

}
</script>

<style scoped>
.text-center .my-5 {
  border: 1px solid green;
  background-color: #c7f2b9;
  padding: 20px;
}
</style>