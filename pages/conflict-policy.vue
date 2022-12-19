<template>
  <StaticLayout :title="$t('conflict_policy')">
    <section class="pt pb">
      <b-container>
        <InnerTitle :title="$t('introduction')" sub />
        <article>
          <p class="terms-content">
            {{ $t('by_accessing_our_website_or_using_our_services') }}
          </p>
          <p class="terms-content">
            {{ $t('service_virtual_currency_exchange_operator') }}
          </p>

          <InnerTitle :title="$t('definition')" sub />
          <p class="terms-content">
            {{
              $t(
                'definition_of_conflict_of_interest_members_of_the_oversight_committee'
              )
            }}
          </p>
          <InnerTitle
            :title="$t('system_for_managing_conflicts_of_interest')"
            sub
          />
          <p class="terms-content">
            {{
              $t(
                'to_guarantee_that_adequate_conflict_of_interest_management_is_carried_out'
              )
            }}
          </p>
          <p class="terms-content">
            {{
              $t('the_company_keeps_an_internal_log_of_disputes_that_emerge')
            }}
          </p>
          <p class="terms-content">
            {{ $t('where_our_functions_may_cause_internal_conflict') }}
          </p>
          <p class="terms-content">
            {{
              $t(
                'personal_account_dealing_regulations_are_enforced_for_all_employees'
              )
            }}
          </p>
          <p class="terms-content">
            {{
              $t(
                'the_company_does_not_prohibit_our_employees_from_accepting_small_gifts'
              )
            }}
          </p>
          <p class="terms-content">
            {{ $t('by_publishing_this_policy_and_requesting_a_user') }}
          </p>
          <InnerTitle :title="$t('penalties_and_consequences')" sub />

          <p class="terms-content">
            {{
              $t(
                'potential_violations_of_this_policy_will_be_subject_to_investigation_by_the_administrator'
              )
            }}
          </p>
          <InnerTitle :title="$t('annual_acknowledgement')" sub />

          <p class="terms-content">{{ $t('on_an_annual_basis') }}</p>
        </article>
      </b-container>
    </section>
  </StaticLayout>
</template>

<script>
export default {}
</script>

<style></style>
