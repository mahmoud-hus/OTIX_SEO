<template>
  <b-button
    class="main-btn"
    :class="classes"
    :style="styles"
    @click="$emit('onClick')"
  >
    {{ name }}
  </b-button>
</template>

<script>
export default {
  props: ['name', 'styles', 'classes'],
}
</script>

<style>
.main-btn {
  min-width: 120px;
  height: 45px;
  font-size: 1.05rem;
  background-color: var(--primary);
  padding: 0 var(--space-md);
}
</style>
