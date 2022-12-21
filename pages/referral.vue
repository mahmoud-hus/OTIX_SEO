<template>
  <StaticLayout :title="$t('referral_title')">
    <section class="pt pb">
      <b-container>
        <InnerTitle :title="$t('referral_subtitle')" />
        <InnerTitle :title="$t('how_to_refer')" />
        <Listing :list="['get_referral_link']" />
        <p class="terms-content">
          {{ $t('sign_up_or_log_in_to_get_your_crypto_referral_link') }}
        </p>
        <Listing :list="['invite_your_friends']" />
        <p class="terms-content">
          {{ $t('share_your_referral_link_with_your_friends_and_followers') }}
        </p>
        <Listing :list="['start_earning']" />
        <p class="terms-content">
          {{ $t('Youll_share_up_to') }}
        </p>
        <InnerTitle :title="$t('referral_program_rules')" />
        <Listing
          :list="[
            'no_limit_on_how_many_friends_a_referrer_can_invite',
            'when_a_referee_conducts_a_trade_in_spot_market',
            'the_referral_is_not_considered_eligible',
            'otix_will_cancel_any_referral_benefit_if_any_user_is_found',
            'otix_reserves_the_right_to_finally_interpret_the_Referral_Program',
          ]"
        />
      </b-container>
    </section>
  </StaticLayout>
</template>

<script>
export default {}
</script>

<style></style>
