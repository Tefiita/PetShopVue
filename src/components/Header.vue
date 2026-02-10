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
      <RouterLink id="botonCarrito" to="/carritoView" class="d-flex align-items-center gap-2 ms-3 px-3 py-1">
        <i class="bi bi-basket" style="font-size: 1.1em; opacity: 0.8; margin-right: 4px;"></i>
        <span>Carrito</span>
        <span id="contadorCarrito">0</span>
        <span class="mx-1">/</span>
        <span id="totalCarritoHeader">$0</span>
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
              <RouterLink class="dropdown-item" to="/perrosView">
                Perros</RouterLink>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <RouterLink class="dropdown-item" to="/gatosView">Gatos</RouterLink>
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
              <RouterLink class="dropdown-item" to="/zeeCarView">Zee.Car</RouterLink>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/juguetesView">Juguetes</RouterLink>
        </li>
        <!-- <li class="nav-item"> -->
        <li class="nav-item">
          <RouterLink class="nav-link" to="/snacksView">Snacks</RouterLink>
        </li>
        <!-- <li class="nav-item"> -->
        <li class="nav-item">
          <RouterLink class="nav-link" to="/accesoriosView">Accesorios</RouterLink>
        </li>
        <!-- <li class="nav-item"> -->
        <li class="nav-item">
          <RouterLink class="nav-link" to="/nosotrosView">Sobre Nosotros</RouterLink>
        </li>
      </ul>
      <form class="d-flex me-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search" />
        <button id="botonBuscar" class="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderView',

}

</script>
