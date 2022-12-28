<template>
  <footer class="mt-auto">
    <div class="custom-shape-divider-bottom-1665400122">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="footer-content">
      <b-container>
        <b-row class="g-4">
          <b-col sm="6" lg="3" :key="index" v-for="(item, index) in links">
            <div class="links">
              <img
                v-if="item.logo"
                :src="require('~/assets/imgs/global/' + item.logo)"
                alt="logo"
                class="img-fluid head-logo"
              />
              <h4 v-else class="links-title text-capitalize">
                {{ $t(item.title) }}
              </h4>

              <div class="links-items">
                <template v-for="(link, idx) in item.links">
                  <a
                    v-if="link.type === 'url'"
                    :href="link.path"
                    :key="idx"
                    class="d-block link-item text-capitalize"
                    target="_blank"
                  >
                    {{ $t(link.name) }}
                  </a>
                  <nuxt-link
                    v-else
                    :to="localePath(link.path)"
                    :key="idx + 't'"
                    class="d-block link-item text-capitalize"
                  >
                    {{ $t(link.name) }}
                  </nuxt-link>
                </template>
              </div>
            </div>
          </b-col>
          <b-col md="6" lg="3">
            <h4 class="links-title text-capitalize">{{ $t('our_apps') }}</h4>
            <div class="apps-links d-flex align-items-center">
              <a href="http://test.com" class="app-link flex-fill">
                <img
                  src="~/assets/imgs/global/ios.svg"
                  alt="apple app store"
                  class="img-fluid"
                />
              </a>
              <a href="http://test.com" class="app-link flex-fill">
                <img
                  src="~/assets/imgs/global/android.svg"
                  alt="google play store"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="social-links">
              <a href="http://test.com" class="social-link">
                <i class="lab la-facebook-f"></i>
              </a>
              <a href="http://test.com" class="social-link">
                <i class="lab la-twitter"></i>
              </a>
              <a href="http://test.com" class="social-link">
                <i class="lab la-linkedin-in"></i>
              </a>
            </div>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col md="10" lg="8">
            <div class="about">
              <img
                src="~/assets/imgs/global/logo.png"
                alt="logo"
                class="img-fluid logo"
              />
              <h6 class="about-desc">{{ $t('about') }}</h6>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'link_otix_title',
          logo: 'logo.png',
          links: [
            // {
            //   path: "/about",
            //   name: "link_otix_about",
            // },
            {
              path: '/terms-and-conditions',
              name: 'link_otix_terms',
            },
            {
              path: '/privacy-policy',
              name: 'link_otix_privacy',
            },
            {
              path: '/gdpr-policy',
              name: 'link_otix_gdpr',
            },
            {
              path: '/aml-policy',
              name: 'link_otix_aml',
            },
            {
              path: '/risk-warning',
              name: 'link_otix_risk_warning',
            },
            {
              path: '/conflict-policy',
              name: 'link_otix_conflict_policy',
            },
            {
              path: '/complaints-policy',
              name: 'link_otix_complaints_policy',
            },
            {
              path: '/code-ethics',
              name: 'link_otix_code_ethics',
            },
            // {
            //   path: "/security",
            //   name: "link_otix_security",
            // },
          ],
        },
        {
          title: 'link_services_title',
          links: [
            {
              path: 'https://trade.otix.exchange',
              name: 'link_services_trade',
              type: 'url',
            },
            {
              path: 'https://trade.otix.exchange/buysell',
              name: 'link_services_quick_trade',
              type: 'url',
            },
            // {
            //   path: '/market',
            //   name: 'link_services_market',
            // },
            {
              path: '/referral',
              name: 'link_services_referral',
            },
            {
              path: '/affiliate',
              name: 'link_services_affiliate',
            },
            {
              path: '/vip',
              name: 'link_services_vip_trade',
            },
            {
              path: '/otc',
              name: 'link_services_otc',
            },
            {
              path: 'https://trade.otix.exchange/account/api',
              name: 'link_services_api',
              type: 'url',
            },
          ],
        },
        {
          title: 'link_learn_title',
          links: [
            {
              path: '/faq',
              name: 'link_learn_faq',
            },
            {
              path: '/blog',
              name: 'link_learn_blog',
            },
            {
              path: '/support',
              name: 'link_learn_support',
            },
            {
              path: '/fees',
              name: 'link_learn_fees',
            },
            {
              path: '/supported-token',
              name: 'link_learn_supported_token',
            },
            {
              path: '/buy-bitcoin',
              name: 'link_learn_supported_buy_bitcoin',
            },
            {
              path: '/buy-etherum',
              name: 'link_learn_supported_buy_ethereum',
            },
            {
              path: '/buy-otix-token',
              name: 'link_learn_supported_buy_otix_token',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
.custom-shape-divider-bottom-1665400122 {
  line-height: 0;
}

.custom-shape-divider-bottom-1665400122 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 50px;
}

.custom-shape-divider-bottom-1665400122 .shape-fill {
  fill: var(--primary);
}

.footer-content {
  background-color: var(--primary);
  padding: var(--space-lg) 0;
}

.footer-content .logo {
  margin-bottom: var(--space-sm);
}

.footer-content .about-desc {
  line-height: 1.6;
  color: var(--bs-gray-200);
}

.footer-content .links-title {
  color: var(--bs-white);
  margin-bottom: var(--space-md);
  height: 40px;
}

.footer-content .head-logo {
  height: 40px;
  margin-bottom: var(--space-md);
}

.footer-content .link-item {
  color: var(--bs-gray-200);
  transition: 0.3s;
}

.footer-content .link-item:not(:last-child) {
  margin-bottom: var(--space-sm);
}

.footer-content .link-item:hover {
  color: var(--bs-white);
}

.footer-content .apps-links {
  gap: var(--space-md);
}

.footer-content .social-links {
  margin-top: var(--space-md);
}

.footer-content .social-link {
  font-size: 2.4rem;
  color: var(--bs-gray-300);
  margin-inline-end: var(--space-md);
}
</style>
