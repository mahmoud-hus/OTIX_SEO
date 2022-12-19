<template>
  <StaticLayout :title="$t('about_title')" :subtitle="$t('about_subtitle')">
    <AboutSection />
    <InfoSection
      :title="$t('our_mission_title')"
      :desc="$t('our_mission_desc')"
    />
    <InfoSection
      :title="$t('our_vision_title')"
      :desc="$t('our_vision_desc')"
    />
    <PartnerSection />
  </StaticLayout>
</template>

<script>
import AboutSection from '~/components/modules/home/AboutSection.vue'
import InfoSection from '~/components/modules/home/InfoSection.vue'
import PartnerSection from '~/components/modules/home/PartnerSection.vue'
export default {
  name: 'About',
  components: { AboutSection, InfoSection, PartnerSection },
}
</script>

<style></style>
