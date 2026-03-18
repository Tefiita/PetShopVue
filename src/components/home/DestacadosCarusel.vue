<template>
  <div id="carouselDestacados" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">

    <div class="carousel-inner">

      <div v-for="(producto, index) in productos" :key="producto.id" class="carousel-item"
        :class="{ active: index === 0 }">

        <div class="card text-center mx-auto producto-card">

          <img :src="`/img/alimento-perro/${producto.img}.png`" class="card-img-top card-img-main"
            :alt="producto.nombreProducto" @error="imagenError" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              {{ producto.nombreProducto }}
            </h5>
            <BotonSelector v-model="variantesSeleccionadas[producto.id]" :variantes="producto.variantes" />
            <p class="card-text precio">
              ${{ precioActual(producto).toLocaleString('es-CL') }}
            </p>
            <BotonVerMas :id="producto.id" />
            <BotonAgregarCarrito :producto="producto"
              :variante="producto.variantes[variantesSeleccionadas[producto.id] || 0]" />
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselDestacados" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselDestacados" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>

  </div>
</template>

<script>
import { Carousel } from "bootstrap"
import BotonAgregarCarrito from "../BotonAgregarCarrito.vue"
import BotonSelector from "../BotonSelector.vue"
import BotonVerMas from "../BotonVerMas.vue"

export default {

  name: "DestacadosCarusel",

  components: {
    BotonAgregarCarrito,
    BotonSelector,
    BotonVerMas
  },

  data() {
    return {
      productos: [],
      variantesSeleccionadas: {}
    }
  },

  methods: {

    precioActual(producto) {
      const index = this.variantesSeleccionadas[producto.id] || 0
      return producto.variantes[index].precio
    },

    imagenError(event) {
      event.target.src = "/img/favicon/noImage.jpg"
    }

  },

  mounted() {
    fetch("/data/productos.json")
      .then(res => res.json())
      .then(data => {

        const prodRandom = [...data].sort(() => Math.random() - 0.5)
        this.productos = prodRandom.slice(0, 5)
        this.$nextTick(() => {
          const carruselElement = document.getElementById("carouselDestacados")
          new Carousel(carruselElement, {
            interval: 5000,
            ride: "carousel"
          })
        })
      })
      .catch(err => console.error("Error al cargar productos:", err))

  }

}
</script>

<style scoped>
.producto-card {
  width: 18rem;
}

.card-title {
  font-size: 0.95rem;
}

.precio {
  font-size: 1.25rem;
  color: var(--verde-marca);
  font-weight: bold;
}
</style>