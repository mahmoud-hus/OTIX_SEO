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
  methods: {
    langHandler () {
      // handle directions
      const root = document.documentElement
      const lang = this.$i18n.localeProperties
      root.setAttribute('lang', lang.code)
      root.setAttribute('dir', lang.dir)
      this.$i18n.setLocale(lang.code)
    }
  },
  mounted() {
    // handle cookie
    const getCookie = Cookies.get('cookie')
    if (getCookie) {
      this.isSetCookie = false
    }
    this.langHandler()
  },
  computed: {
    headData() {
      const lang = this.$i18n.localeProperties

      return {
        htmlAttrs: {
          lang: lang.code,
          dir: lang.dir,
        },
        title: this.$t('pageTitle'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('pageDescription')
          }
        ],
      }
    }
  },
  head() {
    return this.headData
  }
}
</script>

<style>
.main-layout {
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
