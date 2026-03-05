<template>
  <div v-if="productos.length === 0">
    <div class="container2 text-center my-5">
      <p class="text-center pt-2">No hay productos disponibles en esta categoría.</p>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-3" v-for="producto in productos" :key="producto.id" :id="producto.id">
          <CardProductos :nombreProducto="producto.nombreProducto" :precio="producto.precio" :sabor="producto.sabor"
            :img="producto.img" />
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import CardProductos from '../components/alimento/CardProductos.vue'
import { recorridoArenas } from '../assets/js/recorrido.js'

export default {
  name: 'ArenasView',
  components: {
    CardProductos
  },
  data() {
    return {
      productos: []
    }
  },
  mounted() {
    recorridoArenas().then(productos => {
      this.productos = productos
    })
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