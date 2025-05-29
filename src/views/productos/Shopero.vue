<template>
  <div class="container">
    <h1>Shopero</h1>
    <ul class="list-group">
      <li class="list-group-item">
        <h2>{{ shopero.nombre }}</h2>
        <p>{{ shopero.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopero: {
        nombre: "Shopero",
        descripcion: "Shopero",
      },
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.list-group {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-group-item {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.list-group-item:last-child {
  border-bottom: none;
}
</style>
