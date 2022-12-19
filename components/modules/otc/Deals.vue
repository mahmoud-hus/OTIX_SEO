<template>
  <section class="get-started-section pt pb">
    <Title :title="$t('deals_title')" :subtitle="$t('deals_subtitle')" />
    <div>
      <b-container>
        <b-row class="gy-4 get-started-cards row-cards">
          <b-col lg="4">
            <FeatureCard
              :title="$t('big_deal')"
              :desc="$t('big_deal_desc')"
              icon="las la-hand-holding-usd"
            />
          </b-col>
          <b-col lg="4">
            <FeatureCard
              :title="$t('competitive_prices')"
              :desc="$t('competitive_prices_desc')"
              icon="las la-people-carry"
            />
          </b-col>
          <b-col lg="4">
            <FeatureCard
              :title="$t('custom_support')"
              :desc="$t('custom_support_desc')"
              icon="las la-headset"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
