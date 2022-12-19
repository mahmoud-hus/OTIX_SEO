<template>
  <section class="foreign-how-section pt pb">
    <b-container>
      <b-row class="align-items-center">
        <b-col lg="4" class="pt pb">
          <div class="how-title">
            <Title
              :title="$t('how_title')"
              :subtitle="$t('how_subtitle')"
              :styles="{ textAlign: 'start', fontSize: '3rem' }"
              :subtitleStyle="{ textAlign: 'start', lineHeight: '1.7' }"
              classes="no-decoration"
            />
          </div>
        </b-col>

        <b-col
          class="pt pb"
          lg="8"
          :style="{
            backgroundImage: `url(${require('~/assets/imgs/lines.svg')})`,
            backgroundSize: 'cover',
          }"
        >
          <b-row class="row-cards">
            <b-col v-for="(item, index) in data" lg="4" :key="index">
              <FeatureCard
                :title="$t(item.title)"
                :desc="$t(item.desc)"
                :number="item.id"
                :style="{ '--i': index * 40 + 'px' }"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: '01',
          title: 'how_contact_us',
          desc: 'how_contact_us_desc',
        },
        {
          id: '02',
          title: 'how_verification',
          desc: 'how_verification_desc',
        },
        {
          id: '03',
          title: 'how_trade',
          desc: 'how_trade_desc',
        },
      ],
    }
  },
}
</script>

<style>
.foreign-how-section {
  background-color: var(--bs-gray-100);
}

.foreign-how-section .feature-card {
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  margin-top: var(--i);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--bs-white);
}

.foreign-how-section .feature-card .card-body {
  flex: none !important;
}

.foreign-how-section .feature-card .title {
  font-size: 1.4rem;
}
</style>
