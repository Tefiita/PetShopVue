<template>
  <div class="card h-100 text-center">
    <img :src="rutaImagen" class="card-img-top" :alt="producto.nombreProducto" @error="imagenError" />
    <div class="card-body">
      <h5 class="card-title"><strong>{{ producto.nombreProducto }}</strong></h5>
      <p class="card-sabor card-text"> {{ producto.sabor }} </p>
      <!-- BOTONES DE FORMATO -->
      <div class="mb-2">
        <BotonSelector v-model="varianteSeleccionada" :variantes="producto.variantes" />
      </div>
      <!-- PRECIO DINÁMICO -->
      <p class="card-precio card-text fw-bold"><strong>
          ${{ precioActual.toLocaleString('es-CL') }}</strong>
      </p>
      <div class="d-grid gap-2 mb-3">
        <BotonVerMas :id="producto.id" />
      </div>
      <BotonAgregarCarrito :producto="producto" :variante="producto.variantes[varianteSeleccionada]" />
    </div>
  </div>
</template>

<script>
import BotonAgregarCarrito from "../BotonAgregarCarrito.vue"
import BotonSelector from "../BotonSelector.vue"
import BotonVerMas from "../BotonVerMas.vue"
export default {
  name: "CardProductos",
  components: {
    BotonAgregarCarrito,
    BotonSelector,
    BotonVerMas
  },
  props: {
    producto: Object
  },

  data() {
    return {
      varianteSeleccionada: 0,
      rutaImagen: `/img/alimento-perro/${this.producto.img}.png`,
    }
  },

  computed: {
    precioActual() {
      return this.producto.variantes[this.varianteSeleccionada].precio;
    }
  },

  methods: {
    verDetalle(id) {
      this.$router.push(`/producto/${id}`);
    },

    seleccionarVariante(index) {
      this.varianteSeleccionada = index;
    },

    imagenError() {
      this.rutaImagen = '/img/favicon/noImage.jpg';
    },

    agregar() {
      const variante = this.producto.variantes[this.varianteSeleccionada]

      this.$store.commit("AGREGAR_AL_CARRITO", {
        id: this.producto.id,
        nombre: this.producto.nombreProducto,
        img: this.producto.img,
        sku: variante.sku,
        formato: variante.formato,
        precio: variante.precio
      })
    }
  }
}
</script>

<style scoped>
.card-title {
  font-size: 1.1rem
}

.card-sabor {
  font-size: 0.95rem;
}

.card-precio {
  font-size: 1.25rem;
  color: #198754;
}
</style>