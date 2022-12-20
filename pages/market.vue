<template>
  <StaticLayout :title="$t('market_title')" classes="mb-0">
    <CoinsSection :notitle="true" />
  </StaticLayout>
</template>

<script>
import CoinsSection from '~/components/modules/home/CoinsSection.vue'

export default {
  components: { CoinsSection },
}
</script>

<style></style>
