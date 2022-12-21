<template>
  <div class="main-layout d-flex flex-column">
    <HeaderLayout />
    <Nuxt />
    <FooterLayout />
    <CookiesCardLayout v-if="isSetCookie" />
  </div>
</template>

<script>
import HeaderLayout from '~/components/layouts/header/Header.vue'
import FooterLayout from '~/components/layouts/footer/Footer.vue'
import CookiesCardLayout from '~/components/layouts/CookiesCard.vue'
import Cookies from 'js-cookie'
export default {
  components: { HeaderLayout, FooterLayout, CookiesCardLayout },
  data() {
    return {
      isSetCookie: true,
    }
  },
  mounted() {
    // handle cookie
    const getCookie = Cookies.get('cookie')
    if (getCookie) {
      this.isSetCookie = false
    }
    // handle directions
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
