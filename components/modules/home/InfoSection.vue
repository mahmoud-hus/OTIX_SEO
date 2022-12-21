<template>
  <section class="position-relative info-section pb pt">
    <b-container>
      <Title :title="title" />
      <b-row class="justify-content-center align-items-center">
        <b-col md="8">
          <p class="about-desc m-0 mt-0 text-center">
            {{ desc }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['title', 'desc'],
}
</script>

<style>
.info-section {
  margin-bottom: var(--space-lg);
}

.info-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-gray-100);
  transform-origin: left;
  transform: skewY(2deg);
  z-index: -1;
}
</style>
