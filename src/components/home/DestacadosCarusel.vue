<template>
  <div
    id="carouselDestacados"
    class="carousel-dark carousel slide mb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(producto, index) in productos"
        :key="producto.id"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <div class="card text-center mx-auto" style="width: 18rem;">
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p class="card-text">${{ producto.precio }}</p>
            <button class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselDestacados"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Anterior</span>
    </button>

    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselDestacados"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DestacadosCarousel',
  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: 'Producto 1',
          precio: 9990,
          imagen: '/img/productos/producto1.jpg'
        },
        {
          id: 2,
          nombre: 'Producto 2',
          precio: 12990,
          imagen: '/img/productos/producto2.jpg'
        },
        {
          id: 3,
          nombre: 'Producto 3',
          precio: 15990,
          imagen: '/img/productos/producto3.jpg'
        }
      ]
    }
  }
}
</script>
