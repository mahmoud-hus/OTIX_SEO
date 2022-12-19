<template>
  <StaticLayout :title="$t('fees_title')" :subtitle="$t('fees_subtitle')">
    <b-container>
      <section class="pt pb">
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
