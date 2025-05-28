<template>
  <div>
    <Carousel_destacados />
    <Productos />
    <Carousel />
  </div>
</template>

<style scoped>
h4 {
  text-align: center;
}

p {
  text-align: justify;
}

small {
  text-align: center;
}
</style>

<script>
import Carousel_destacados from "../components/Carousel_destacados.vue";
import Productos from "../components/Productos.vue";
import Carousel from "../components/Carousel.vue";
export default {
  components: {
    Carousel_destacados,
    Productos,
    Carousel,
  },
};
</script>
