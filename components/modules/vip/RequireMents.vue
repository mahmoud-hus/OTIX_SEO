<template>
  <section class="foreign-requirements pt pb">
    <b-container>
      <Title
        :title="$t('requirements_title')"
        :subtitle="$t('requirements_subtitle')"
      />

      <b-row class="row-cards gy-5">
        <b-col sm="12">
          <FeatureCard
            number="01"
            :title="$t('requirement_one')"
            classes="flex-row d-flex"
          />
        </b-col>
        <b-col sm="12">
          <FeatureCard
            number="02"
            :title="$t('requirement_two')"
            classes="flex-row d-flex no-shadow"
          />
        </b-col>
        <b-col sm="12">
          <FeatureCard
            number="03"
            :title="$t('requirement_three')"
            classes="flex-row d-flex"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>

<style>
.foreign-requirements .feature-card .card-body {
  flex: none;
}

.foreign-requirements .feature-card .card-body .card-title {
  margin: 0 !important;
}

.foreign-requirements .feature-card:not(.no-shadow) {
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  background: var(--bs-white);
}

.foreign-requirements .feature-card .title {
  font-size: 1.25rem;
  margin-bottom: 0;
  padding: 20px;
}
</style>
