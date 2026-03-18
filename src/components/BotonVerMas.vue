<template>
  <button class="btn btn-secondary mb-2" @click="verMas">Ver más</button>
</template>

<script>
export default {
  name: "BotonVerMas",
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    verMas() {
      this.$router.push(`/producto/${this.id}`);
    }
  }
};
</script>

<style scoped>
.btn {
  font-weight: bold;
}
</style>
