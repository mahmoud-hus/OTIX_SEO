<template>
  <StaticLayout :title="$t('vip_title')" :subtitle="$t('vip_subtitle')">
    <section class="">
      <Deals />
      <How />
      <RequireMents />
    </section>
  </StaticLayout>
</template>

<script>
import Deals from '~/components/modules/vip/Deals.vue'
import How from '~/components/modules/vip/How.vue'
import RequireMents from '~/components/modules/vip/RequireMents.vue'
export default {
  components: {
    Deals,
    How,
    RequireMents,
  },
}
</script>

<style></style>
