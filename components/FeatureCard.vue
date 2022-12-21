<template>
  <div
    class="border-0 text-center feature-card position-relative"
    :class="classes"
    :style="styles"
  >
    <img
      v-if="img"
      :src="require(`~/assets/imgs/global/${img}`)"
      alt="feature icon"
      class="img-fluid started_icon"
    />
    <span v-else-if="icon" class="icon"><i :class="icon"></i></span>
    <span v-else class="icon">{{ number }}</span>
    <span class="step d-block">{{ step }}</span>
    <h2 class="title">{{ title }}</h2>
    <b-card-text
      class="text-center text-muted"
      v-if="desc"
      v-html="$t(desc).substring(0, 50).replaceAll('/n', '<br />')"
    >
    </b-card-text>
    <b-card-text
      class="text-center text-muted the-desc-hover"
      v-if="desc"
      v-html="$t(desc).replaceAll('/n', '<br />')"
    >
    </b-card-text>
    <ul v-if="list" class="list-unstyled m-0 p-0">
      <li class="" v-for="(item, index) in list" :key="index">
        <p class="text-center text-muted text-muted-list">
          {{ $t(item) }}
        </p>
      </li>
    </ul>
    <img
      v-if="imgArrow"
      :src="require(`~/assets/imgs/global/${imgArrow}`)"
      alt="img"
      class="position-absolute imgArrow"
    />
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'desc',
    'styles',
    'classes',
    'img',
    'icon',
    'step',
    'imgArrow',
    'list',
    'number',
  ],
}
</script>

<style>
.feature-card {
  padding: var(--space-md);
}

.row-cards > div:nth-child(odd) .feature-card {
  /* box-shadow: 0 0 10px rgba(0 0 0 / 0.2); */
}

.feature-card .started_icon {
  margin-bottom: var(--space-md);
  max-height: 65px;
  height: 65px;
}

.feature-card .icon {
  font-size: 2.5rem;
  color: var(--primary);
}

.feature-card .step {
  font-size: 2rem;
  margin-bottom: var(--space-sm);
}

.feature-card .card-title {
  color: var(--dark);
  margin-bottom: var(--space-sm);
}

.feature-card .card-text {
  margin-bottom: 0;
  color: var(--dark);
}

.feature-card .imgArrow {
  top: 100px;
  left: 100%;
  transform: translateX(-40%);
}

.feature-card .imgArrow:lang(ar) {
  right: 100%;
  left: auto;
  transform: translateX(50%);
}

.feature-card .text-muted {
  /* font-size: 1.1rem;/ */
}

.the-desc-hover {
  position: absolute;
  top: 100%;
  z-index: 2;
  background: #fff;
  min-height: calc(100% - 110px);
  box-shadow: 0 0 10px rgba(0 0 0 / 0.1);
  padding: var(--space-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}

.feature-card:hover .the-desc-hover {
  top: 110px;
  opacity: 1;
  visibility: visible;
}
</style>
