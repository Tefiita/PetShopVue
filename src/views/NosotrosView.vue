<template>
  <section class="py-5 text-center section-bg mb-5">
    <h1 class="fw-bold">GolPet Chillán</h1>
    <p class="lead text-muted">
      Alimentos y productos premium y super premium para el bienestar de tu mascota
    </p>
  </section>

  <main class="container my-4">
    <div class="row g-4 mt-3">
      <div class="col-md-6">
        <div class="card card-custom h-100">
          <div class="card-body">
            <h5 class="card-title">Nuestra Misión</h5>
            <p id="mision" class="card-text">
              En Gol Pet Chillán, estamos dedicados a mejorar la calidad de vida
              de las mascotas y fortalecer el vínculo con sus tutores.
              Ofrecemos productos de alta calidad y un servicio personalizado,
              mientras fomentamos una comunidad comprometida con el bienestar
              animal y la educación responsable, para que cada tutor se sienta
              respaldado en el cuidado de su mascota.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card card-custom h-100">
          <div class="card-body">
            <h5 class="card-title">Nuestra Visión</h5>
            <p id="vision" class="card-text">
              Ser reconocidos como la tienda líder en productos y servicios
              para mascotas en Chillán, destacándonos por nuestra dedicación al bienestar animal,
              innovación y compromiso con la comunidad. Aspiramos a ser un referente
              en educación y cuidado responsable de mascotas, promoviendo relaciones
              saludables y felices entre las mascotas y sus tutores.
            </p>
          </div>
        </div>
      </div>
    </div>


    <section class="mt-5">
      <h3 class="mb-4 text-center">¿Por qué elegir GolPet?</h3>

      <div class="row text-center g-4">
        <div class="col-md-4">
          <h5>🐾 Productos seleccionados</h5>
          <p class="text-muted">
            Solo trabajamos con marcas premium y super premium.
          </p>
        </div>

        <div class="col-md-4">
          <h5>💬 Asesoría especializada</h5>
          <p class="text-muted">
            Te ayudamos a elegir el mejor alimento para tu mascota.
          </p>
        </div>

        <div class="col-md-4">
          <h5>📍 Comercio local</h5>
          <p class="text-muted">
            Somos de Chillán y atendemos de forma cercana y personalizada.
          </p>
        </div>
      </div>
    </section>
    <section class="mt-5">
      <h3 class="mb-4">Encuéntranos</h3>

      <div class="row g-4 align-items-center">
        <div class="col-md-6">
          <div id="map" style="height: 350px;" class="rounded"></div>
        </div>

        <div class="col-md-6">
          <h5>📍 Dirección</h5>
          <p class="text-muted">
            Schleyer 225, Chillán, Región de Ñuble
          </p>

          <h5 class="mt-3">🕒 Horario</h5>
          <p class="text-muted">
            Lunes a Viernes: 7:00 – 19:00<br>
            Sábado: 7:00 – 18:00
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css"

import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})

export default {
  name: "NosotrosView",

  mounted() {

    const direccion = "Schleyer 225, Chillán, Chile"

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`)
      .then(res => res.json())
      .then(data => {

        const lat = data[0].lat
        const lon = data[0].lon

        const map = L.map("map").setView([lat, lon], 15)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors"
        }).addTo(map)

        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(direccion)
          .openPopup()

      })

  }
}
</script>

<style scoped>
#map {
  height: 400px;
  width: 100%;
  border-radius: 10px;
}
</style>