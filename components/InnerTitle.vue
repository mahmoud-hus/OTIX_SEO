<template>
  <div class="inner-title-container">
    <h4 v-if="sub && !sub2" class="inner-title-sub inner-title text-capitalize">
      {{ $t(title) }}
    </h4>
    <h5 v-else-if="sub2" class="inner-title-sub2 inner-title text-capitalize">
      {{ $t(title) }}
    </h5>
    <h3 v-else class="inner-title text-capitalize">{{ $t(title) }}</h3>
  </div>
</template>

<script>
export default {
  props: ['sub', 'sub2', 'title'],
}
</script>

<style>
.inner-title {
  color: var(--dark);
  margin-bottom: var(--space-md);
}

.inner-title-sub,
.inner-title-sub2 {
  margin-bottom: var(--space-sm);
}
</style>
