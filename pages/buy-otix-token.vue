<template>
  <StaticLayout :title="$t('buy_otix_token_title')">
    <b-container>
      <section className="pt pb">
        <InnerTitle :title="$t('buy_otix_token_title')" />
        <p class="terms-content">
          {{ $t('buy_otix_token_desc') }}
        </p>
        <InnerTitle :title="$t('store_or_use_your_otx_in_otix')" />
        <p class="terms-content">
          {{ $t('you_can_store_otx_in_your_personal_crypto_wallet') }}
        </p>
        <InnerTitle :title="$t('buy_otx_easily')" />
        <p class="terms-content">
          {{ $t('otix_makes_it_easy_and_safe_for_you_to_buy_otx_today') }}
        </p>

        <InnerTitle :title="$t('how_to_buy_otx')" />
        <Listing :list="['create_your_free_otix_account']" />
        <p class="terms-content">
          {{ $t('provide_your_email_address') }}
        </p>
        <Listing :list="['connect_your_funding_method']" />
        <p class="terms-content">
          {{
            $t(
              'connect_your_card_or_bank_account_after_Otix_verifies_your_account'
            )
          }}
        </p>
        <Listing :list="['buy_otx']" />
        <p class="terms-content">
          {{ $t('buy_otx_with_as_little') }}
        </p>

        <Listing :list="['otx_price']" />
        <p class="terms-content">
          {{
            $t(
              'check_the_current_otx_price_on_Otix_to_help_inform_your_bitcoin_investment'
            )
          }}
        </p>

        <Listing :list="['otx_to_usd_converter']" />
        <p class="terms-content">
          {{ $t('use_our_simple_otx_to_usd_calculator') }}
        </p>
        <InnerTitle :title="$t('why_buy_otx_with_otix')" />

        <Listing
          :list="[
            'pay_for_goods_and_services',
            'send_payments_around_the_world',
            'invest_in_the_growing_potential_of_crypto',
            'otix_support_team_offers_dedicated_client_services',
            'otix_has_the_desktop_and_mobile_solutions',
            'otix’_security_standards_are_designed_to_keep_your_funds_safe',
          ]"
        />
      </section>
    </b-container>
  </StaticLayout>
</template>

<script>
export default {}
</script>

<style></style>
