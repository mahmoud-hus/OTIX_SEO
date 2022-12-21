<template>
  <StaticLayout :title="$t('buy_bitcoin_title')">
    <b-container>
      <section className="pt pb">
        <InnerTitle :title="$t('buy_bitcoin_title')" />
        <p class="terms-content">
          {{ $t('buy_bitcoin_desc') }}
        </p>
        <InnerTitle :title="$t('buy_bitcoin_easily')" />
        <p class="terms-content">
          {{ $t('otix_makes_it_easy_and_safe_for_you_to_buy_bitcoin_today') }}
        </p>
        <InnerTitle :title="$t('how_to_buy_bitcoin')" />
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
        <Listing :list="['buy_bitcoin']" />
        <p class="terms-content">
          {{ $t('buy_bitcoin_with_as_little') }}
        </p>

        <Listing :list="['bitcoin_price']" />
        <p class="terms-content">
          {{
            $t(
              'check_the_current_bitcoin_price_on_Otix_to_help_inform_your_bitcoin_investment'
            )
          }}
        </p>

        <Listing :list="['btc_to_usd_converter']" />
        <p class="terms-content">
          {{ $t('use_our_simple_bitcoin_to_usd_calculator') }}
        </p>
        <InnerTitle :title="$t('why_buy_btc_with_otix')" />

        <Listing
          :list="[
            'pay_for_goods_and_services_without_bank',
            'send_payments_around_the_world_instantly_and_easily',
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
