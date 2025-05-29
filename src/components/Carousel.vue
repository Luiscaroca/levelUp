<template>
  <div
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div
      id="carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../assets/placeholder.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/placeholder.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/placeholder.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </div>
</template>
