<template>
  <!--  -->
  <button
    class="bg-transparent border-0 p-0 m-0 lang-btn text-capitalize d-flex align-items-center gap-2"
    @click="changeLang"
  >
    <!-- <img src="~/assets/imgs/global/global.svg" alt="lang" class="img-fluid" /> -->
    <span>{{ locales.name }}</span>
  </button>
</template>

<script>
export default {
  computed: {
    locales() {
      const getOtherLang = this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale
      )[0]
      return getOtherLang
    },
  },
  methods: {
    changeLang() {
      this.$i18n.setLocale(this.locales.code)
      document.documentElement.setAttribute('lang', this.locales.lang)
      document.documentElement.setAttribute('dir', this.locales.dir)
      // window.location.reload()
      // this.$i18n.locale = this.locales.code
    },
  },
}
</script>

<style></style>
