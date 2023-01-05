<template>
  <div>
    <template v-for="(link, index) in links">
      <a
        :key="index"
        v-if="link.type === 'url'"
        :href="link.url"
        class="link-item text-capitalize"
        :style="styles"
        target="_blank"
      >
        {{ $t(link.name) }}
      </a>
      <nuxt-link
        v-else
        :key="index + 'other'"
        :to="localePath(link.path)"
        class="link-item text-capitalize"
        :style="styles"
      >
        {{ $t(link.name) }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ['styles'],
  data() {
    return {
      links: [
        {
          path: '/',
          name: 'link_home',
        },
        {
          path: '/about',
          name: 'link_about',
        },
        // {
        //   path: '/support',
        //   name: 'link_contact',
        // },
        {
          path: '/trade',
          name: 'link_trade',
          type: 'url',
          url: 'https://trade.otix.exchange',
        },
        {
          path: '/quick-trade',
          name: 'link_quick_trade',
          type: 'url',
          url: 'https://trade.otix.exchange/buy-crypto',
        },
        // {
        //   path: '/market',
        //   name: 'link_market',
        // },
        {
          path: '/fees',
          name: 'link_fees',
        },
      ],
    }
  },
}
</script>

<style>
.main-header .link-item {
  color: var(--bs-gray-200);
  font-size: 1.1rem;
}

.main-header .link-item:not(:last-child) {
  margin-inline-end: var(--space-md);
}

.main-header .link-item:hover,
.main-header .link-item.nuxt-link-active {
  color: var(--bs-white);
}
</style>
