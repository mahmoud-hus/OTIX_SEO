<template>
  <section class="way-section pt pb">
    <b-container>
      <Title :title="$t('ways_section_title')" />
      <b-tabs class="tabs-wrapper">
        <b-tab
          v-for="(item, index) in items"
          :title="$t(item.title)"
          :active="item.active"
          :key="index"
        >
          <b-row class="align-items-center justify-content-center">
            <b-col lg="9">
              <b-row class="align-items-center">
                <b-col class="d-flex justify-content-center">
                  <img
                    :src="require('~/assets/imgs/global/' + item.img)"
                    class="img-fluid img"
                  />
                </b-col>
                <b-col>
                  <p
                    class="way-section-desc"
                    v-for="(it, idx) in item.list"
                    :key="idx"
                  >
                    {{ $t(it) }}
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          active: true,
          img: 'tab1.png',
          title: 'trade_with_your_currency',
          list: ['AED_and_SAR_are_accepted_for_deposits_and_transactions'],
        },
        {
          active: false,
          img: 'tab2.png',
          title: 'largest_coins_available',
          list: [
            'trade_with_more_than_60_cryptocurrencies',
            'trading_pairings',
          ],
        },
        {
          active: false,
          img: 'tab3.png',
          title: 'safe_secure',
          list: [
            'we_use_the_most_secure_solutions_available_to_store_your_cryptocurrency_in_cold_storage',
          ],
        },
        {
          active: false,
          img: 'tab4.png',
          title: 'rade_wherever_you_are',
          list: [
            'with_our_android_and_ios_apps_you_can_trade_and_invest_while_on_the_go',
          ],
        },
      ],
    }
  },
}
</script>

<style>
.tabs-wrapper > div:not(.tab-content) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.tabs-wrapper .nav-tabs {
  border: none;
  border-bottom: 2px solid rgba(0 0 0 / 0.1);
  margin-bottom: var(--space-lg);
}

.tabs-wrapper .nav-item:not(:last-child) {
  margin-inline-end: 20px;
}

.tabs-wrapper .nav-link {
  color: var(--gray);
  font-size: 1.1rem;
  padding: 10px 4px;
  position: relative;
}

.tabs-wrapper .nav-link.active {
  border: none;
  font-weight: bold;
  color: var(--dark);
}

.tabs-wrapper .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 4px;
  background: var(--dark);
  width: 100%;
}

.tabs-wrapper .img {
  max-height: 400px;
}

.tabs-wrapper .way-section-desc {
  line-height: 1.7;
  font-size: 1.2rem;
  font-weight: bold;
  margin-block: var(--space-md);
}
</style>
