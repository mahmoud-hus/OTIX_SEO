<template>
  <section class="coins-section pt pb d-none">
    <b-container v-if="!notitle">
      <Title :title="$t('market')" />
    </b-container>
    <div class="table-data position-relative">
      <b-container>
        <b-tabs>
          <b-tab title="AED" active>
            <CoinsData />
          </b-tab>
          <b-tab title="SAR">
            <CoinsData />
          </b-tab>
        </b-tabs>
      </b-container>
    </div>
  </section>
</template>

<script>
import CoinsData from './CoinsData.vue'
export default {
  props: ['notitle'],
  components: { CoinsData },
}
</script>

<style>
.coins-section .nav-tabs {
  border: none;
  margin-bottom: var(--space-lg);
}

.coins-section .nav-link {
  border: none;
  font-family: var(--font-regular);
  color: var(--text);
  padding: 0;
  margin-inline-end: var(--space-lg);
  font-size: var(--font-size-md);
}

.coins-section .nav-link.active {
  font-family: var(--font-bold);
  color: var(--dark);
  border-bottom: 2px solid var(--dark) !important;
}

.coins-section .table-data::before {
  content: '';
  position: absolute;
  top: calc(var(--space-md) + 50px);
  left: 0;
  width: 100%;
  height: 1px;
  background-color: rgba(0 0 0 / 0.1);
  z-index: 1;
}

.coins-section .table-data {
  background-color: #fbfbfb;
  padding: var(--space-md) 0;
}

.coins-section table {
  vertical-align: middle;
}

.coins-section th {
  color: var(--text);
  font-size: var(--font-size-md);
  font-family: var(--font-bold);
  text-transform: capitalize;
}

.coins-section td {
  height: 70px;
}

.coins-section .table-data-item .graph {
  max-width: 150px;
}

.coins-section .code {
  color: var(--dark);
}
.coins-section .code small {
  color: var(--text);
}

.coins-section .price {
  color: #509f7e;
  font-size: 18px;
  font-family: var(--font-medium);
}

.coins-section .table-data-item-low .price {
  color: #ff0000;
}

.coins-section .volumn {
  color: var(--dark);
  font-size: 18px;
  font-family: var(--font-medium);
}

.coins-section .rate {
  color: #509f7e;
  font-size: 18px;
  font-family: var(--font-medium);
}

.coins-section .table-data-item-low .rate {
  color: #ff0000;
}
</style>
