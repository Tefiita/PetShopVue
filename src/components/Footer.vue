<template>
  <footer class="footer-premium bg-dark text-light mt-5">
    <div class="container py-5">
      <div class="row gy-4 align-items-start">

        <!-- Marca -->
        <div class="col-lg-4 col-md-6">
          <img src="/img/favicon/golpetFavicon.ico" alt="GolPet Logo" height="46" class="mb-3">
          <p class="footer-desc">
            Gol Pet es una tienda especializada en alimentos
            <strong>premium, súper premium</strong> y accesorios de
            marcas seleccionadas para el bienestar real de perros y gatos.
          </p>
        </div>

        <!-- Categorías -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-title">Categorías</h6>
          <ul class="footer-links">
            <li><RouterLink to="#">Alimentos Premium</RouterLink></li>
            <li><RouterLink to="#">Snacks Naturales</RouterLink></li>
            <li><RouterLink to="#">Juguetes</RouterLink></li>
            <li><RouterLink to="#">Accesorios</RouterLink></li>
          </ul>
        </div>

        <!-- Marcas -->
        <div class="col-lg-3 col-md-6">
          <h6 class="footer-title">Marcas destacadas</h6>
          <ul class="footer-links">
            <li>Zee.Dog</li>
            <li>Catit</li>
            <li>Oven-Baked Tradition</li>
            <li>Poema</li>
          </ul>
        </div>

        <!-- Contacto -->
        <div class="col-lg-3 col-md-6">
          <h6 class="footer-title">Contacto</h6>
          <p class="footer-text">Chillán, Chile</p>
          <p class="footer-text">+56 9 5777 8975</p>

          <a href="https://wa.me/+56957778975" target="_blank" class="btn btn-outline-success btn-sm mt-2">
            Atención por WhatsApp
          </a>
        </div>

      </div>
    </div>

    <!-- Línea inferior -->
    <div class="footer-bottom text-center py-3">
      <small>
        © 2026 GolPet — Alimentos y accesorios premium para mascotas
      </small>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterView',

}
</script>
