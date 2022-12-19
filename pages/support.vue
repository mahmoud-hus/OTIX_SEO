<template>
  <StaticLayout :title="$t('contact_with_us')">
    <ContactSection :noBg="true" />
  </StaticLayout>
</template>

<script>
import ContactSection from '~/components/modules/home/ContactSection.vue'

export default {
  components: {
    ContactSection,
  },
}
</script>

<style></style>
