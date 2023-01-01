<template>
  <section class="about-section pb pt">
    <b-container>
      <Title :title="$t('about_us')" />
      <b-row class="gx-5 gy-4">
        <b-col lg="6">
          <div class="about-img position-relative">
            <img src="~/assets/imgs/global/about.png" class="img-fluid w-100" />
          </div>
        </b-col>
        <b-col lg="6">
          <h5 class="about-title fw-bold text-center text-lg-start">{{ $t('get_started_subtitle') }}</h5>
          <p class="about-desc m-0 text-center text-lg-justify">
            {{ $t('about_content_desc') }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.about-desc {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-top: var(--space-md) !important;
}
</style>
