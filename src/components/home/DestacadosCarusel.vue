<template>
  <div id="carouselDestacados" class="carousel carousel-dark slide mb-5" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(producto, index) in productos" :key="producto.id" class="carousel-item"
        :class="{ active: index === 0 }">
        <div class="card text-center mx-auto" style="width: 18rem;">
          <img :src="imagenUrl" class="card-img-top card-img-main" :alt="nombreProducto" @error="imagenError" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title" style="font-size: 0.95rem">{{ producto.nombreProducto }}</h5>
            <p class="card-text" style="font-size: 1.25rem; color: var(--verde-marca);"><strong>${{
              producto.precio.toLocaleString() }}</strong></p>
            <button class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselDestacados" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Anterior</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselDestacados" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<script>
import { Carousel } from 'bootstrap'

export default {
  name: 'DestacadosCarusel',
  data() {
    return {
      productos: [],
      imagenUrl: `/img/alimento-perro/${this.img}.png`,
    }
  },
  methods: {
    imagenError() {
      this.imagenUrl = '/img/favicon/noImage.jpg'
    }

  },
  mounted() {
    fetch('/data/productos.json').then(res => res.json()).then(data => {
      //se realiza un random de productos
      const prodRandom = [...data].sort(() => Math.random() - 0.5)
      //se limitan a 5 productos random
      this.productos = prodRandom.slice(0, 5)
      this.$nextTick(() => {
        const carruselElement = document.getElementById('carouselDestacados')
        new Carousel(carruselElement, {
          interval: 5000,
          ride: 'carousel'
        })
      })
    }).catch(err => console.error('Error al cargar productos:', err))
  }
}
</script>
