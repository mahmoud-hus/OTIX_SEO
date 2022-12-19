<template>
  <div class="position-relative fees-card">
    <b-row class="justify-content-between">
      <b-col lg="7">
        <div class="fees-card-inner">
          <h6 class="subtitle text-uppercase">{{ $t(subtitle) }}</h6>
          <h3 class="title d-flex align-items-center gap-3 text-capitalize">
            <span class="icon" v-if="icon"><i :class="icon"></i></span>
            <span class="icon" v-else>
              <i class="las la-hand-holding-usd"></i>
            </span>
            <span class="text">{{ $t(title) }}</span>
          </h3>
          <p class="desc text-muted">{{ $t(desc) }}</p>
          <ul class="list-unstyled m-0 p-0 fees-notes" v-if="notes.length">
            <li class="fees-notes-title text-capitalize">
              {{ $t('additional_notes') }}:
            </li>
            <li
              v-for="(item, index) in notes"
              :key="index"
              class="fees-note-item d-flex text-muted"
            >
              {{ $t(item) }}
            </li>
          </ul>

          <h6
            v-if="countries.length"
            class="fees-supported-countries text-capitalize mb-0"
          >
            <span>{{ $t('supported_countries') }}:</span>
            <template v-if="countries.length > 7">
              <span
                v-for="(item, index) in countries.slice(0, 7)"
                :key="index"
                >{{ item + ', ' }}</span
              >
              {{ $t('and_more') }}
            </template>
            <template v-else>
              <span v-for="(item, index) in countries" :key="index">{{
                item + ', '
              }}</span>
            </template>
          </h6>
        </div>
      </b-col>
      <b-col lg="4">
        <div class="fees-card-fees">
          <h5 class="text-center m-0 fees-card-fees-title text-capitalize">
            {{ $t('deposit_fee') }}
          </h5>
          <h3 class="fees-card-fees-body text-center">{{ fees }}</h3>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['fees', 'subtitle', 'icon', 'title', 'desc', 'notes', 'countries'],
}
</script>

<style>
.fees-card {
  padding: var(--space-lg) var(--space-md);
  background-color: var(--bs-gray-100);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0 0 0 / 0.1);
}

.fees-card:not(:last-child) {
  margin-bottom: var(--space-lg);
}

.fees-card .subtitle {
  margin-bottom: var(--space-sm);
  color: var(--primary);
}

.fees-card .title {
  margin-bottom: var(--space-sm);
  color: var(--dark);
}

.fees-card .title .icon {
  width: 45px;
  height: 45px;
  background-color: var(--primary);
  color: var(--bs-white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.fees-card .desc {
  margin-bottom: var(--space-md);
  /* color: var(--bs-gray-100); */
}

.fees-card .fees-notes-title {
  color: var(--dark);
  margin-bottom: var(--space-sm);
}

.fees-card .fees-notes {
}

.fees-card .fees-note-item {
  margin-inline-start: var(--space-md);
}

.fees-card .fees-note-item:not(:last-child) {
  margin-bottom: var(--space-sm);
}

.fees-card .fees-note-item::before {
  content: '';
  display: block;
  min-width: 8px;
  height: 8px;
  background-color: var(--gray);
  border-radius: 50%;
  margin-inline-end: var(--space-sm);
  margin-top: 8px;
}

.fees-card .fees-supported-countries span {
  margin-inline-end: var(--space-sm);
}

.fees-card .fees-supported-countries {
  margin-top: var(--space-lg);
  color: var(--dark);
}

.fees-card-fees-title {
  background-color: var(--primary);
  padding: var(--space-md) 0;
  color: var(--bs-white);
  border-radius: 10px 10px 0 0;
}

.fees-card-fees-body {
  background-color: var(--bs-white);
  padding: var(--space-md);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0 0 0 / 0.1);
}
</style>
