<template>
  <StaticLayout :title="$t('faq_title')" :subtitle="$t('faq_subtitle')">
    <b-container>
      <section class="pt pb">
        <b-card
          no-body
          class="mb-0 border-0 p-0"
          v-for="(item, index) in data_faq"
          :key="index"
        >
          <b-card-header header-tag="header" class="p-0 border-0" role="tab">
            <b-button
              block
              v-b-toggle="`accordion-${item.id}`"
              variant="info"
              >{{
                language === 'ar' ? item.question_ar : item.question
              }}</b-button
            >
          </b-card-header>
          <b-collapse
            :id="`accordion-${item.id}`"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <b-card-text>{{
                language === 'ar' ? item.answer_ar : item.answer
              }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </section>
    </b-container>
  </StaticLayout>
</template>

<script>
import { data_faq } from '~/data'
export default {
  data() {
    return {
      data_faq,
    }
  },
  computed: {
    language() {
      return this.$i18n.locale
    },
  },
}
</script>

<style scoped>
.card-header button {
  text-align: start;
  height: 50px;
  background: var(--bs-gray-400);
  color: var(--dark);
  font-weight: bold;
  border-radius: 0;
}

.card-header button:focus {
  box-shadow: none;
  border: 0;
}

.card-header button.not-collapsed {
  background: var(--dark);
  color: var(--bs-white);
}

.card-body {
  background: var(--bs-gray-100);
  font-size: 1.1rem;
}
.card-body p {
  line-height: 1.7;
}
</style>
