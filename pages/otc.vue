<template>
  <StaticLayout :title="$t('otc_title')" :subtitle="$t('otc_subtitle')">
    <section>
      <Deals />
      <How />
      <RequireMents />
    </section>
  </StaticLayout>
</template>

<script>
import Deals from '~/components/modules/otc/Deals.vue'
import How from '~/components/modules/otc/How.vue'
import RequireMents from '~/components/modules/otc/RequireMents.vue'
export default {
  components: {
    Deals,
    How,
    RequireMents,
  },
}
</script>

<style></style>
