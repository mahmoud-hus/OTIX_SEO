<template>
  <div>
    <a
      v-if="type === 'url'"
      :href="url"
      class="login-btn d-lg-flex align-items-center justify-content-center text-capitalize"
      :class="classes"
      :style="styles"
      target="_blank"
    >
      {{ $t(title) }}
    </a>
    <Link
      v-else
      :to="url"
      class="login-btn d-lg-flex align-items-center justify-content-center text-capitalize"
      :class="classes"
      :style="styles"
    >
      {{ $t(title) }}
    </Link>
  </div>
</template>

<script>
export default {
  props: ['classes', 'styles', 'url', 'type', 'title'],
}
</script>

<style>
.main-header .login-btn {
  background: var(--bs-white);
  height: 45px;
  min-width: 120px;
  padding: 0 var(--space-md) 2px;
  border-radius: 45px;
  color: var(--dark);
  margin-inline-end: var(--space-md);
  border: 1px solid var(--bs-white);
  transition: 0.3s;
}

.main-header .login-btn:hover {
  background: transparent;
  color: var(--bs-white);
}

.main-header .lang-btn {
  color: var(--bs-gray-200);
}
</style>
