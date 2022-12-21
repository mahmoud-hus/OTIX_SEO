<template>
  <StaticLayout :title="$t('buy_etherum_title')">
    <b-container>
      <section className="pt pb">
        <InnerTitle :title="$t('buy_etherum_title')" />
        <p class="terms-content">
          {{ $t('buy_etherum_desc') }}
        </p>
        <InnerTitle :title="$t('buy_etherum_easily')" />
        <p class="terms-content">
          {{ $t('otix_makes_it_easy_and_safe_for_you_to_buy_etherum_today') }}
        </p>
        <InnerTitle :title="$t('how_to_buy_etherum')" />
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
        <Listing :list="['buy_etherum']" />
        <p class="terms-content">
          {{ $t('buy_etherum_with_as_little') }}
        </p>

        <Listing :list="['etherum_price']" />
        <p class="terms-content">
          {{
            $t(
              'check_the_current_etherum_price_on_Otix_to_help_inform_your_bitcoin_investment'
            )
          }}
        </p>

        <Listing :list="['etherum_to_usd_converter']" />
        <p class="terms-content">
          {{ $t('use_our_simple_etherum_to_usd_calculator') }}
        </p>
        <InnerTitle :title="$t('why_buy_eth_with_otix')" />

        <Listing
          :list="[
            'diversify_your_long_term_investment_strategy',
            'execute_smart_contracts_in_the_ethereum_blockchain',
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
