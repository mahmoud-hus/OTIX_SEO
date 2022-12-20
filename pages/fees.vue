<template>
  <StaticLayout :title="$t('fees_title')" :subtitle="$t('fees_subtitle')">
    <b-container>
      <section class="pt pb fees-page">
        <b-tabs>
          <b-tab :title="$t('fees_flat_deposit')" active>
            <FeesCard
              subtitle="deposit"
              title="wire_transfer"
              desc="wire_desc"
              :notes="[
                'wire_transfer_note_1',
                'wire_transfer_note_2',
                'wire_transfer_note_3',
              ]"
              :countries="[
                'UAE',
                'KSA',
                'Kuwait',
                'Bahrain',
                'Oman',
                'Jordan',
                'Algeria',
                'Egypt',
                'Lebanon',
                'Morocco',
                'Tunisia',
              ]"
              fees="0% - Zero Fees"
            />
            <FeesCard
              subtitle="for_deposit_only"
              title="easy_funding"
              desc="easy_funding_desc"
              :notes="[
                'easy_funding_note_1',
                'easy_funding_note_2',
                'easy_funding_note_3',
              ]"
              :countries="['UAE', 'KSA', 'Kuwait']"
              fees="Max 0.55%"
              icon="las la-coins"
            />
          </b-tab>
          <b-tab :title="$t('fees_lite_pro')">
            <FeesCard
              subtitle="deposit"
              title="wire_transfer"
              desc="wire_desc"
              :notes="[
                'wire_transfer_note_1',
                'wire_transfer_note_2',
                'wire_transfer_note_3',
              ]"
              :countries="[
                'UAE',
                'KSA',
                'Kuwait',
                'Bahrain',
                'Oman',
                'Jordan',
                'Algeria',
                'Egypt',
                'Lebanon',
                'Morocco',
                'Tunisia',
              ]"
              fees="0% - Zero Fees"
            />
            <FeesCard
              subtitle="for_deposit_only"
              title="easy_funding"
              desc="easy_funding_desc"
              :notes="[
                'easy_funding_note_1',
                'easy_funding_note_2',
                'easy_funding_note_3',
              ]"
              :countries="['UAE', 'KSA', 'Kuwait']"
              fees="Max 0.55%"
              icon="las la-coins"
            />
          </b-tab>
          <b-tab :title="$t('fees_crypto_send')">
            <FeesCard
              subtitle="deposit"
              title="wire_transfer"
              desc="wire_desc"
              :notes="[
                'wire_transfer_note_1',
                'wire_transfer_note_2',
                'wire_transfer_note_3',
              ]"
              :countries="[
                'UAE',
                'KSA',
                'Kuwait',
                'Bahrain',
                'Oman',
                'Jordan',
                'Algeria',
                'Egypt',
                'Lebanon',
                'Morocco',
                'Tunisia',
              ]"
              fees="0% - Zero Fees"
            />
            <FeesCard
              subtitle="for_deposit_only"
              title="easy_funding"
              desc="easy_funding_desc"
              :notes="[
                'easy_funding_note_1',
                'easy_funding_note_2',
                'easy_funding_note_3',
              ]"
              :countries="['UAE', 'KSA', 'Kuwait']"
              fees="Max 0.55%"
              icon="las la-coins"
            />
          </b-tab>
        </b-tabs>
      </section>
    </b-container>
  </StaticLayout>
</template>

<script>
import FeesCard from '~/components/modules/fees/FeesCard.vue'
export default {
  components: { FeesCard },
}
</script>

<style>
.fees-page .nav-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border: none;
}

.fees-page .nav-link {
  border: none;
  border-radius: 25px;
  height: 45px;
  background: var(--bs-gray-200);
  color: var(--dark);
  margin-inline-end: var(--space-md);
  padding: 0 20px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fees-page .nav-link.active {
  background: var(--dark);
  color: var(--bs-white);
}
</style>
