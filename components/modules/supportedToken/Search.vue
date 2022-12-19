<template>
  <div class="d-flex align-items-center search-group border form-group">
    <label class="search-label m-0">
      <i class="las la-search"></i>
    </label>
    <input
      type="text"
      class="border-0 search-input form-control"
      :placeholder="$t('search_coins')"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['value'],
}
</script>

<style></style>
