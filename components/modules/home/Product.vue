<template>
  <b-row class="justify-content-center align-items-center">
    <b-col lg="9">
      <b-row class="align-items-center gx-5" :class="reverseRow">
        <b-col md="6">
          <img
            :src="require(`~/assets/imgs/global/${img}`)"
            class="img-fluid h-200"
            alt=""
          />
        </b-col>
        <b-col md="6">
          <div class="d-block align-items-start">
            <h5>{{ title }}</h5>
            <p>{{ desc }}</p>
            <div class="d-flex mt-5" :style="{ gap: 20 }">
              <Btn
                :name="$t('Learn_More')"
                classes="flex-fill"
                :styles="{ maxWidth: 200 }"
              />
              <a target="_blank" :href="link" class="flex-fill d-flex align-items-center justify-content-center main-btn" :style="{
                backgroundColor: 'transparent',
                maxWidth: 200,
                color: 'var(--dark)',
                borderColor: 'var(--dark)',
              }">{{$t("Start_Now")}}</a>
            
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: ['reverseRow', 'img', 'link', 'title', 'desc'],
}
</script>

<style scoped>
img {
  max-height: 400px;
}
</style>
