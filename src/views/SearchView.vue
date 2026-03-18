<template>
  <div class="container mt-4">
    <h2>Resultados para: "{{ query }}"</h2>
    <div v-if="productosFiltrados.length === 0" class="text-center my-5">
      No se encontraron productos
    </div>
    <div class="row">
      <div class="col-md-3 mb-3" v-for="producto in productosFiltrados" :key="producto.id">
        <CardProductos :producto="producto" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProductos from "@/components/alimento/CardProductos.vue"

export default {

  components: {
    CardProductos
  },

  data() {
    return {
      productos: [],
      query: ""
    }
  },

  computed: {

    productosFiltrados() {

      return this.productos.filter(p => {

        const q = this.query.toLowerCase()

        return (
          p.nombreProducto.toLowerCase().includes(q) ||
          p.categoria.toLowerCase().includes(q)
        )

      })

    }

  },

  methods: {

    cargarProductos() {

      fetch("/data/productos.json")
        .then(res => res.json())
        .then(data => {
          this.productos = data
        })

    },

    actualizarBusqueda() {

      this.query = this.$route.query.q || ""

    }

  },

  mounted() {

    this.cargarProductos()
    this.actualizarBusqueda()

  },

  watch: {

    "$route.query.q"() {
      this.actualizarBusqueda()
    }

  }

}
</script>