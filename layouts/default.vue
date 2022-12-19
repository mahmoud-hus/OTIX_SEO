<template>
  <div class="main-layout d-flex flex-column">
    <HeaderLayout />
    <Nuxt />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/header/Header.vue'
import FooterLayout from '~/components/layouts/footer/Footer.vue'
export default {
  components: { HeaderLayout, FooterLayout },
  mounted() {
    const root = document.documentElement
    const lang = this.$i18n.localeProperties
    root.setAttribute('lang', lang.code)
    root.setAttribute('dir', lang.dir)
    this.$i18n.setLocale(lang.code)
  },
}
</script>

<style>
.main-layout {
  min-height: 100vh;
}
</style>
