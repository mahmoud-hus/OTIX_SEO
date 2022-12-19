<template>
  <header class="main-header d-flex align-items-center">
    <b-container class="d-flex align-items-center justify-content-between">
      <!-- {/* links  */} -->
      <div class="d-flex align-items-center">
        <!-- {/* logo  */} -->
        <nuxt-link :to="localePath('/')">
          <img
            src="~/assets/imgs/global/logo.png"
            alt="logo"
            class="img-fluid"
          />
        </nuxt-link>
        <div class="links d-none d-lg-flex">
          <NavLinks />
        </div>
      </div>
      <!-- {/* sign  */} -->
      <div class="d-flex align-items-center">
        <SignBtn
          classes="d-none"
          url="https://trade.otix.exchange/registration"
          type="url"
          title="link_login"
          :styles="{
            minWidth: '127px',
          }"
        />
        <SignBtn
          classes="d-none"
          url="https://trade.otix.exchange/registration"
          type="url"
          title="link_register"
          :styles="{
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--bs-white)',
            minWidth: '100px',
          }"
        />
        <LangSwitcher />
        <button
          class="bg-transparent border-0 p-0 menu-btn d-lg-none"
          @click="toggleMenu"
        >
          <i class="las la-bars"></i>
        </button>
      </div>
    </b-container>
    <div class="menu-mobile d-lg-none" :class="menuIsOPen ? 'active' : ''">
      <div
        class="menu-mobile-inner"
        @click="
          (e) => {
            e.stopPropagation()
            toggleMenu()
          }
        "
      ></div>
      <div class="content d-flex flex-column">
        <div>
          <NavLinks
            :styles="{
              display: 'block',
              color: 'var(--dark)',
              marginBottom: 'var(--space-md)',
              borderBottom: '1px solid rgba(0, 0, 0, .07)',
              paddingBottom: 'var(--space-sm)',
            }"
          />
        </div>
        <SignBtn
          classes="d-flex mt-auto"
          :styles="{
            backgroundColor: 'var(--primary)',
            color: 'var(--bs-white)',
          }"
          url="https://trade.otix.exchange/registration"
          type="url"
          title="link_register"
        />
      </div>
    </div>
  </header>
</template>

<script>
import NavLinks from './NavLinks'
import SignBtn from './SignBtn'
export default {
  components: { NavLinks, SignBtn },
  data() {
    return {
      menuIsOPen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOPen = !this.menuIsOPen
    },
  },
}
</script>

<style>
.main-header {
  background-color: var(--primary);
  height: var(--header-height);
}

.main-header .links {
  margin-inline-start: var(--space-lg);
  margin-bottom: -5px;
}

.main-header .menu-btn {
  color: var(--bs-white);
  font-size: 1.4rem;
  margin-inline-start: var(--space-sm);
}

/* menu in mobile  */
.menu-mobile {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  z-index: 9;
  transition: 0.3s;
}

.menu-mobile:lang(en) {
  right: auto;
  left: -100%;
}

.menu-mobile.active:lang(en) {
  left: 0;
}

.menu-mobile.active {
  right: 0;
}

.menu-mobile-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 / 0.2);
}

.menu-mobile .content {
  background-color: var(--bs-white);
  height: 100%;
  max-width: 280px;
  width: 100%;
  position: relative;
  z-index: 10;
  padding: var(--space-md);
}
</style>
