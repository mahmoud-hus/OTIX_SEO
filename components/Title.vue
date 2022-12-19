<template>
  <div
    :style="containerStyle"
    class="main-title position-relative text-center"
    :class="classes"
  >
    <h2 class="main-title-title text-capitalize" :style="styles">
      {{ title }}
    </h2>
    <h5 class="main-title-subtitle" :style="subtitleStyle">{{ subtitle }}</h5>
  </div>
</template>

<script>
export default {
  props: [
    'styles',
    'containerStyle',
    'title',
    'subtitle',
    'subtitleStyle',
    'classes',
  ],
}
</script>

<style>
.main-title {
  padding-bottom: var(--space-md);
  margin-bottom: var(--space-lg);
}

.main-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 4px;
  background-color: var(--primary);
  border-radius: 50%;
}

.main-title.no-decoration::after {
  display: none;
}

.main-title-title {
  margin-bottom: var(--space-sm);
  color: var(--dark);
}

.main-title-subtitle {
  margin-bottom: 0;
  color: var(--dark);
}
</style>
