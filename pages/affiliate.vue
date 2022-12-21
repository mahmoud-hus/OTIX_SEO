<template>
  <StaticLayout :title="$t('affiliate_title')">
    <section class="pt pb">
      <b-container>
        <InnerTitle :title="$t('affiliate_subtitle')" />
        <InnerTitle :title="$t('affiliate_benefits_and_services')" />
        <Listing
          :list="[
            'up_to_long_term_commissions_on_spot',
            'additional_on_affiliates_total_commissions',
            'one_to_one_professional_account_manager',
            'contract_bonus_and_campaign_support',
            'up_to_month_base_salary',
            'exclusive_affiliate_management_system',
            'otix_peripheral_pack',
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
