<template>
  <StaticLayout :title="$t('risk_warning')">
    <section class="pt pb">
      <b-container>
        <InnerTitle :title="$t('risk_warning')" />
        <article>
          <Listing
            :list="[
              'you_signify_acceptance_of_the_terms_of_this_privacy_policy',
              'any_trade_can_be_financially_high_risk',
              'you_conduct_your_analysis_and_research',
              'you_agree_to_assume_any_risks_related_to_or_connected_with_sending',
              'the_company_cannot_remove_all_security_concerns',
              'on_trading_risk_we_do_not_offer_advice',
              'you_will_not_have_any_access_to_the_company',
              'the_company_reserve_the_right_to_correct',
              'acceptance_of_risk_you_understand_and_agree_that_using_and_using_the_services',
              'the_company_may_use_third_party_asset_custody',
            ]"
          />
        </article>
      </b-container>
    </section>
  </StaticLayout>
</template>

<script>
export default {}
</script>

<style></style>
