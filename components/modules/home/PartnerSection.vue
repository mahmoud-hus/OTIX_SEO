<template>
  <section>
    <b-container>
      <b-row
        class="partner_section d-flex flex-row pb pt justify-content-center gx-5 gy-5"
        cols="2"
        cols-md="4"
        cols-lg="5"
      >
        <img
          v-for="(item, index) in data"
          :key="index"
          class="partnerImg"
          :src="item.img"
          alt=""
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { img: 'https://bitoasis.net/en/assets/images/press/forbes-logo.svg' },
        {
          img: 'https://bitoasis.net/en/assets/images/press/coindesk-logo.svg',
        },
        {
          img: 'https://bitoasis.net/en/assets/images/press/gulf-news-logo.svg',
        },
        {
          img: 'https://bitoasis.net/en/assets/images/press/tech-crunch-logo.svg',
        },
        // {
        //   img: "https://bitoasis.net/en/assets/images/press/arabian-business-logo.svg",
        // },
        // { img: "https://bitoasis.net/en/assets/images/press/bloomberg-logo.svg" },
        {
          img: 'https://bitoasis.net/en/assets/images/press/cointelegraph-logo.svg',
        },
      ],
    }
  },
}
</script>

<style>
.partner_section .partnerImg {
  max-width: 200px;
}
.partner_section {
  margin-bottom: var(--space-lg);
}
</style>
