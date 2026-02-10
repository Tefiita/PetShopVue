<template>
  <Header />
  <router-view />
  <div class ="bg-dark text-white text-center mt-auto py-3 w-100">
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
