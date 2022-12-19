<template>
  <div>
    <div
      class="sub-layout position-relative d-flex align-items-center"
      :class="classes"
    >
      <img src="~/assets/imgs/lines.svg" alt="" class="img-fluid" />
      <b-container>
        <b-row class="justify-content-center">
          <b-col md="10" lg="8">
            <Title
              classes="mb-0"
              :title="title"
              :subtitle="subtitle"
              :styles="{
                lineHeight: '1.7',
                marginBottom: 'var(--space-md)',
                color: 'var(--bs-white)',
              }"
              :subtitleStyle="{
                color: 'var(--bs-gray-100)',
                textTransform: 'capitalize',
              }"
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'classes'],
}
</script>

<style>
.sub-layout {
  overflow: hidden;
  background-color: var(--primary);
  margin-bottom: var(--space-lg);
  z-index: 1;
  height: 190px;
}

.sub-layout img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5%;
  min-width: 600px;
  opacity: 0.2;
  z-index: -1;
}
</style>
