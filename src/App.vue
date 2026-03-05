<template>
  <Header />
  <router-view />
  <div class="bg-dark text-white text-center mt-auto py-3 w-100">
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

<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: nunito, sans-serif;
}

.container2 {
  border: 1px solid green;
  background-color: #c7f2b9;
  padding: 20px;
}
</style>