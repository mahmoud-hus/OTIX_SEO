<template>
  <ul class="list-unstyled m-0 p-0 listing">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="listing-item d-flex gap-3"
    >
      <a href="{item}" v-if="link">{{ $t(item) }}</a>
      <span v-else>{{ $t(item) }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list', 'link'],
}
</script>

<style>
.listing {
  margin-bottom: var(--space-md) !important;
}

.listing-item {
  color: var(--gray);
}

.listing-item:not(:last-child) {
  margin-bottom: var(--space-sm);
}

.listing-item::before {
  content: '';
  min-width: 7px;
  height: 7px;
  background-color: var(--dark);
  border-radius: 50%;
  display: block;
  margin-top: 7px;
}
</style>
