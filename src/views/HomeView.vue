<template>
  <main class="container my-4">
    <HeroBanner />

    <h2 id="destacados" class="mb-4">Productos Destacados</h2>

    <DestacadosCarusel />
  </main>
</template>

<script>
import HeroBanner from '@/components/home/HeroBanner.vue'
import DestacadosCarusel from '@/components/home/DestacadosCarusel.vue'

export default {
  name: 'HomeView',
  components: {
    HeroBanner,
    DestacadosCarusel
  }
}
</script>
