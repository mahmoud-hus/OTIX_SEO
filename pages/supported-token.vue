<template>
  <StaticLayout :title="$t('tokens_title')" :subtitle="$t('tokens_subtitle')">
    <b-container>
      <section class="pt pb">
        <Search :value="search" @input="onChange" />
        <b-row cols="5" class="g-5">
          <b-col :key="index" v-for="(item, index) in data">
            <div class="token-item d-flex align-items-center gap-4">
              <img :src="item.imageUrl" alt="icon" class="img-fluid" />
              <div>
                <h6 class="token-title m-0">{{ item.code }}</h6>
                <span class="token-subtitle">{{ item.name }}</span>
              </div>
            </div>
          </b-col>
        </b-row>
      </section>
    </b-container>
  </StaticLayout>
</template>

<script>
import { data_currencies } from '~/data'
import Search from '~/components/modules/supportedToken/Search.vue'
export default {
  components: {
    Search,
  },
  data() {
    return {
      search: '',
      data: data_currencies,
    }
  },
  methods: {
    onChange(v) {
      this.search = v
      const filter_data = data_currencies.filter((item) =>
        item.name.toLowerCase().includes(v.toLowerCase())
      )
      this.data = filter_data
    },
  },
}
</script>

<style>
.search-group {
  margin-bottom: var(--space-lg);
  border-color: var(--border) !important;
  height: 50px;
  border-radius: 50px;
  max-width: 500px;
}

.search-input {
  background-color: transparent;
  padding: 0;
}

.search-label {
  padding: 0 20px;
}

.token-title {
  color: var(--dark);
}

.token-subtitle {
  color: var(--gray);
}
</style>
