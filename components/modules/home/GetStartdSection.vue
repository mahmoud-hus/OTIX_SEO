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
          <a href="https://trade.otix.exchange/" target="_blank" class="main-btn d-flex align-items-center justify-content-center text-capitalize">
            {{ $t('get_started_btn') }}
          </a>
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
.get-started-btn .main-btn {
  min-width: 200px;
  height: 45px;
  font-size: 1.05rem;
  background-color: var(--primary);
  padding: 0 var(--space-md);
  color: #fff;
  border-radius: 5px;

}
</style>
