<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand mx-3" href="/"><img src="/img/favicon/golpetFavicon.ico" alt="GolPet Logo" height="50"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="d-none d-lg-flex align-items-center gap-2 ms-3 text-muted small">
      <span data-bs-toggle="tooltip" title="Asesoría nutricional y productos seleccionados">
        Asesoría especializada
      </span>
      <span class="opacity-50">·</span>
      <span>Despachos locales sin costo mínimo</span>
    </div>


    <div>
      <RouterLink to="/carritoView" class="nav-link carrito-header d-flex align-items-center gap-2 ms-3 px-3 py-1">
        <i class="carrito-header bi bi-basket"></i>
        <span>Carrito</span>
        <span id="contadorCarrito">{{ cantidadCarrito }}</span>
        <span class="mx-1">/</span>
        <span>${{ totalCarrito.toLocaleString('es-CL') }}</span>
      </RouterLink>
    </div>

  </nav>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Alimentos
          </a>
          <ul class="dropdown-menu">
            <li>
              <RouterLink class="dropdown-item" to="/alimentoPerroView">
                Perros</RouterLink>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/alimentoGatoView">Gatos</RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Zee.Dog
          </a>
          <ul class="dropdown-menu">
            <li>
              <RouterLink class="dropdown-item" to="/zeeDogView">
                Zee.Dog</RouterLink>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/zeeCatView">Zee.Cat</RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/arenasView">Arenas</RouterLink>
        </li>

        <li class="nav-item">
          <RouterLink class="nav-link" to="/snacksView">Snacks</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/juguetesView">Juguetes</RouterLink>
        </li>
        <!-- <li class="nav-item">
          <RouterLink class="nav-link" to="/accesoriosView">Accesorios</RouterLink>
        </li> -->

        <li class="nav-item">
          <RouterLink class="nav-link" to="/nosotrosView">Sobre Nosotros</RouterLink>
        </li>
      </ul>
      <form class="d-flex" @submit.prevent="buscar">
        <input class="form-control me-2" type="search" placeholder="Buscar productos" v-model="busqueda">

        <button class="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HeaderView',

  computed: {
    ...mapGetters(["cantidadCarrito", "totalCarrito"])
  },
  data(){
    return {
      busqueda: ""
    }
  },
  methods:{
    buscar(){
      if(!this.busqueda.trim()) return;
      this.$router.push({ name: "searchView", query: { q: this.busqueda } });
    }
  }

}

</script>

<style scoped>
.carrito-header {
  font-size: 1.1em;
  opacity: 0.8;
  margin-right: 4px;
  color: #ffbd59;

}
</style>