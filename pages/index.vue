<template>
  <div class="home-page">
    <LandingSection />
    <CoinsSection />
    <AboutSection />
    <GetStartdSection />
    <InfoSection
      :title="$t('our_mission_title')"
      :desc="$t('our_mission_desc')"
    />
    <WaySection />
    <InfoSection
      :title="$t('our_vision_title')"
      :desc="$t('our_vision_desc')"
    />
    <OurProductsSection />
    <ContactSection />
    <PartnerSection />
  </div>
</template>

<script>
import LandingSection from '~/components/modules/home/LandingSection.vue'
import CoinsSection from '~/components/modules/home/CoinsSection.vue'
import AboutSection from '~/components/modules/home/AboutSection.vue'
import GetStartdSection from '~/components/modules/home/GetStartdSection.vue'
import InfoSection from '~/components/modules/home/InfoSection.vue'
import WaySection from '~/components/modules/home/WaySection.vue'
import ContactSection from '~/components/modules/home/ContactSection.vue'
import PartnerSection from '~/components/modules/home/PartnerSection.vue'
import OurProductsSection from '~/components/modules/home/OurProductsSection.vue'

export default {
  name: 'Home',
  components: {
    LandingSection,
    CoinsSection,
    AboutSection,
    GetStartdSection,
    InfoSection,
    WaySection,
    ContactSection,
    PartnerSection,
    OurProductsSection,
  },
}
</script>
