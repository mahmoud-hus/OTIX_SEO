<template>
  <b-row class="justify-content-center align-items-center">
    <b-col lg="9">
      <b-row class="align-items-center gx-5" :class="reverseRow">
        <b-col>
          <img
            :src="require(`~/assets/imgs/global/${img}`)"
            class="img-fluid h-200"
            alt=""
          />
        </b-col>
        <b-col>
          <div class="d-block align-items-start">
            <h5>{{ $t('otix_Lite') }}</h5>
            <p>{{ $t('products_details') }}</p>
            <p>{{ $t('products_details2') }}</p>
            <div class="d-flex mt-5" :style="{ gap: 20 }">
              <Btn
                :name="$t('Learn_More')"
                classes="flex-fill"
                :styles="{ maxWidth: 200 }"
              />
              <Btn
                :name="$t('Start_Now')"
                classes="flex-fill"
                :styles="{
                  backgroundColor: 'transparent',
                  maxWidth: 200,
                  color: 'var(--dark)',
                  borderColor: 'var(--dark)',
                }"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['reverseRow', 'img'],
}
</script>

<style scoped>
img {
  max-height: 400px;
}
</style>
