<template>

  <main class="container my-5">
    <section>
      <div class=" row justify-content-center aling-items-center">
        <div class="card mb-3 border-0">
          <div class="row g-0">
            <div class="col-md-4">
              <img :src="rutaImagen" class=" img-fluid rounded-start" :alt="nombreProducto">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h2 class="card-title">
                  {{ producto.nombreProducto }}
                </h2>
                <h6 class="card-sabor card-text ">{{ producto.sabor }}</h6>

                <p class="card-descripcion ">{{ producto.descripcion }}</p>
              </div>
              <div class="mb-2 ms-3 d-flex align-items-center gap-3">
                <BotonSelector v-model="varianteSeleccionada" :variantes="producto.variantes" />
              </div>
              <p class="card-precio card-text fw-bold ms-3">
                <span v-if="producto.variantes && producto.variantes[varianteSeleccionada]">
                  ${{ precioActual.toLocaleString('es-CL') }}
                </span>
                <span v-else>
                  $0
                </span>
              </p>
              <BotonAgregarCarrito v-if="producto.variantes && producto.variantes[varianteSeleccionada]"
                :producto="producto" :variante="producto.variantes[varianteSeleccionada]" />

            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="mt-5">
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="card p-4 h-100">
            <h3>Composición</h3>
            <p class="ps-3 card-text text-justify">{{ producto.composicion }}</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card p-4 h-100">
            <h3>COMPONENTES ANALÍTICOS:</h3>
            <ul class="ps-3">
              <li v-for="(analitico, index) in producto.analiticos" :key="index">
                {{ analitico }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section v-if="tablaMarca && tablaMarca.marca === producto.marca">
      <div class="container mt-4">
        <div v-for="tabla in tablaMarca.tablas" :key="tabla.tipo">
          <table class="table table-bordered text-center align-middle"
            v-if="(producto.edad && producto.edad.toLowerCase() === tabla.tipo) || (producto.tamañoMascota && producto.tamañoMascota.toLowerCase() === tabla.tipo)">
            <thead>
              <tr>
                <th :colspan="tabla.columnas.length" class="bg-success text-white">
                  <h3><u>{{ tabla.titulo }}</u></h3>
                </th>
              </tr>
              <tr>
                <template v-for="(col, idx) in tabla.columnas" :key="idx">
                  <th class="bg-success text-white">{{ col }}</th>
                </template>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in tabla.datos" :key="idx">
                <td v-for="(cell, cidx) in row" :key="cidx">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import BotonSelector from "../components/BotonSelector.vue";
import BotonAgregarCarrito from "../components/BotonAgregarCarrito.vue";
export default {

  name: "ProductoIndividualView",
  components: {
    BotonSelector,
    BotonAgregarCarrito
  },

  data() {
    return {
      producto: {},
      rutaImagen: "",
      varianteSeleccionada: 0,
      tablaMarca: null
    };
  },

  computed: {
    precioActual() {
      if (
        this.producto &&
        Array.isArray(this.producto.variantes) &&
        this.producto.variantes.length > 0 &&
        typeof this.varianteSeleccionada !== 'undefined' &&
        this.producto.variantes[this.varianteSeleccionada]
      ) {
        return this.producto.variantes[this.varianteSeleccionada].precio;
      }
      return 0;
    }
  },

  async mounted() {
    const id = this.$route.params.id;
    const response = await fetch('/data/productos.json');
    const productos = await response.json();
    const producto = productos.find(p => p.id == id);
    this.producto = producto || {};
    if (this.producto.img) {
      this.rutaImagen = `/img/alimento-perro/${this.producto.img}.png`;
    } else {
      this.rutaImagen = '';
    }

    // Traer tabla de alimentación por marca
    const tablasRes = await fetch('/data/tablasPoema.json');
    const tablasData = await tablasRes.json();
    this.tablaMarca = tablasData.find(t => t.marca === this.producto.marca) || null;
  },

}

</script>

<style scoped>
.card-precio {
  font-size: 1.25rem;
  color: #198754;
}
</style>