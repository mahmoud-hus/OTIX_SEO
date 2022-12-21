<template>
  <div class="cookies-card" :class="isShow ? 'active' : 'no-active'">
    <b-container>
      <div class="cookies-card-item">
        <h3 class="cookie-title text-capitalize">{{ $t('allow_cookie') }}</h3>
        <p class="cookie-desc">
          {{ $t('we_use_cookie') }}
          <nuxt-link to="/cookie-policy">{{
            $t('link_otix_cookie_policy')
          }}</nuxt-link>
        </p>
        <div class="d-flex align-items-center justify-content-end gap-3">
          <Btn
            @onClick="handleCookie(true)"
            :name="$t('ok')"
            :style="{
              minWidth: 200,
            }"
          />
          <Btn
            :name="$t('cancel')"
            @onClick="handleCookie"
            :style="{
              backgroundColor: 'transparent',
              minWidth: 200,
              color: 'var(--dark)',
              border: '1px solid var(--dark)',
            }"
          />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      isShow: true,
    }
  },
  methods: {
    handleCookie(status) {
      this.isShow = false
      if (status) {
        Cookies.set('cookie', 'accepted-cookie')
      }
    },
  },
}
</script>

<style>
.cookies-card {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bs-white);
  box-shadow: 0 0 10px rgba(0 0 0 / 0.2);
  padding: var(--space-lg) 0;
  /* color: var(--bs-white); */
  animation: cookieAnimation 1s ease-in-out;
  transition: 0.7s;
}

.cookies-card.no-active {
  bottom: -100%;
}

.cookie-title {
  color: var(--primary);
}

.cookie-desc {
  color: var(--gray);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.cookie-desc a {
  color: var(--bs-primary);
}

@keyframes cookieAnimation {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}
</style>
