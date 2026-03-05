<template>

  <div class="card">
    <div class="card-img-hover-wrapper">
      <img :src="imagenUrl" class="card-img-top card-img-main" :alt="nombreProducto" @error="imagenError" />
      <!-- <img :src="imageUrl2" v-bind="imageUrl2" class="card-img-top card-img-hover" :alt="nombreProducto" @error="imagenError" /> -->
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title card-nombre"><strong>{{ nombreProducto }}</strong></h5>
      <p class="card-text card-sabor">{{ sabor }}</p>
      <p class="card-text card-precio"><strong>${{ precio.toLocaleString('es-CL') }}</strong>
      </p>
      <button class="btn btn-primary">Agregar al carrito</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CardProductos',
  props: {
    id: Number,
    sabor: String,
    nombreProducto: String,
    precio: Number,
    img: Number
  },
  data() {
    return {
      imagenUrl: `/img/alimento-perro/${this.img}.png`,
      imageUrl2: `/img/alimento-gato/poema/${this.imgf}.png`
    }
  },
  methods: {
    imagenError() {
      this.imagenUrl = '/img/favicon/noImage.jpg'
    }

  }
}
</script>

<style scoped>
.card{
  width: 306px;
}

.card-title {
  font-size: 1rem;
}

.card-text .card-sabor {
  font-size: 0.95rem;
}

.card-text .card-precio {
  font-size: 1.25rem;
  color: #198754;
}

.card.text-center.mx-auto {
  width: 18rem;
}

.card-title {
  font-size: 0.95rem;
}

.container {
  text-align: start;
  justify-self: anchor-center;
  align-self: anchor-center;
}
</style>
