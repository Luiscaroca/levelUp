<template>
  <div
    id="productos"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <h3 class="mt-5 text-center">Productos</h3>
    <div class="mt-4 mb-5 row row-cols-1 row-cols-md-3 g-4 w-100">
      <!-- Inicio de una tarjeta -->
      <div class="col">
        <div
          class="card h-100 mx-auto"
          style="width: 25rem"
        >
          <img
            src="../assets/productos_img/placeholder.png"
            class="card-img-top"
            alt="Foto tazón"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ tazon.nombre }}</h5>
            <h6 class="card-title fw-bold">{{ tazon.precio }}</h6>
            <p class="card-text">
              {{ tazon.descripcion }}
            </p>
            <a
              href="/productos/tazon"
              class="btn btn-primary mt-auto text-white"
              >{{ boton.texto }}</a
            >
          </div>
        </div>
      </div>
      <!-- Fin de una tarjeta -->
      <!-- Inicio de una tarjeta -->
      <div class="col">
        <div
          class="card h-100 mx-auto"
          style="width: 25rem"
        >
          <img
            src="../assets/productos_img/placeholder.png"
            class="card-img-top"
            alt="Foto botella"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ botella.nombre }}</h5>
            <h6 class="card-title fw-bold">{{ botella.precio }}</h6>
            <p class="card-text">
              {{ botella.descripcion }}
            </p>
            <a
              href="/productos/botella"
              class="btn btn-primary mt-auto text-white"
              >{{ boton.texto }}</a
            >
          </div>
        </div>
      </div>
      <!-- Fin de una tarjeta -->
      <!-- Inicio de una tarjeta -->
      <div class="col">
        <div
          class="card h-100 mx-auto"
          style="width: 25rem"
        >
          <img
            src="../assets/productos_img/placeholder.png"
            class="card-img-top"
            alt="Foto mouse pad"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ mousepad.nombre }}</h5>
            <h6 class="card-title fw-bold">{{ mousepad.precio }}</h6>
            <p class="card-text">
              {{ mousepad.descripcion }}
            </p>
            <a
              href="/productos/mousepad"
              class="btn btn-primary mt-auto text-white"
              >{{ boton.texto }}</a
            >
          </div>
        </div>
      </div>
      <!-- Fin de una tarjeta -->
      <!-- Inicio de una tarjeta -->
      <div class="col">
        <div
          class="card h-100 mx-auto"
          style="width: 25rem"
        >
          <img
            src="../assets/productos_img/placeholder.png"
            class="card-img-top"
            alt="Foto foto roca"
          />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ fotoroca.nombre }}</h5>
            <h6 class="card-title fw-bold">{{ fotoroca.precio }}</h6>
            <p class="card-text">
              {{ fotoroca.descripcion }}
            </p>
            <a
              href="/productos/fotoroca"
              class="btn btn-primary mt-auto text-white"
              >{{ boton.texto }}</a
            >
          </div>
        </div>
      </div>
      <!-- Fin de una tarjeta -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boton: {
        texto: "Ver productos",
      },
      tazon: {
        nombre: "Tazón 11 oz",
        precio: "$4.000",
        descripcion: "lorem ipsum dolor sit amet",
      },
      botella: {
        nombre: "Botella deportiva",
        precio: "$7.000",
        descripcion: "lorem ipsum dolor sit amet",
      },
      mousepad: {
        nombre: "Mouse pad",
        precio: "$5.000",
        descripcion: "lorem ipsum dolor sit amet",
      },
      fotoroca: {
        nombre: "Foto roca",
        precio: "$10.000",
        descripcion: "lorem ipsum dolor sit amet",
      },
    };
  },
};
</script>
