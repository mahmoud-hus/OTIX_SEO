<template>
  <StaticLayout :title="$t('blog_title')" :subtitle="$t('blog_subtitle')">
    <section class="pt pb">
      <b-container>
        <b-row class="g-5">
          <b-col md="6" :key="index" v-for="(item, index) in data_blog">
            <nuxt-link :to="item.id" class="blog-item d-block h-100">
              <div class="position-relative" :style="{ height: '220px' }">
                <img
                  :src="require(`~/assets/imgs/blog/${item.image}`)"
                  class="img-fluid"
                />
              </div>
              <div class="blog-item-body">
                <h4 class="blog-item-title">{{ item.title }}</h4>
                <p class="blog-item-desc mb-0">
                  {{ item.desc.substring(0, 100) }}
                </p>
              </div>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </StaticLayout>
</template>

<script>
import { data_blog } from '~/data'
export default {
  data() {
    return {
      data_blog,
    }
  },
}
</script>

<style>
.blog-item {
  background-color: var(--bs-white);
  box-shadow: 0 0 10px rgba(0 0 0 / 0.1);
  border-radius: 10px;
}

.blog-item img {
  border-radius: 10px 10px 0 0;
  min-height: 200px;
  margin-bottom: var(--space-md);
}

.blog-item .blog-item-body {
  padding: var(--space-md);
}

.blog-item .blog-item-title {
  color: var(--dark);
  margin-bottom: var(--space-sm);
}

.blog-item .blog-item-desc {
  color: var(--gray);
  line-height: 1.7;
}
</style>
