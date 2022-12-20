<template>
  <section class="get-started-section pb">
    <Title
      :title="$t('get_started_title')"
      :subtitle="$t('get_started_subtitle')"
    />
    <div>
      <b-container>
        <b-row class="row gy-4 get-started-cards row-cards">
          <b-col lg="3">
            <FeatureCard
              :title="$t('get_started_register')"
              img="started_signup.png"
              step="1"
              imgArrow="long-arrow.svg"
              desc="get_started_register_desc"
            />
          </b-col>
          <b-col lg="3">
            <FeatureCard
              :title="$t('get_started_verfiy')"
              desc="get_started_verify_desc"
              img="started_verify.png"
              step="2"
              imgArrow="long-arrow.svg"
            />
          </b-col>
          <b-col lg="3">
            <FeatureCard
              :title="$t('get_started_deposit')"
              desc="get_started_deposit_desc"
              img="started_deposit.png"
              step="3"
              imgArrow="long-arrow.svg"
            />
          </b-col>
          <b-col lg="3">
            <FeatureCard
              desc="get_started_buy_desc"
              :title="$t('get_started_buy')"
              img="started_buy.png"
              step="4"
            />
          </b-col>
        </b-row>
        <div class="get-started-btn d-flex justify-content-center">
          <Btn :name="$t('get_started_btn')" :styles="{ minWidth: '200px' }" />
        </div>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.get-started-btn {
  margin-top: var(--space-lg);
}
</style>
