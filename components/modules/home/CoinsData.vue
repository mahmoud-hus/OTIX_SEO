<template>
  <div class="table-responsive">
    <table class="w-100">
      <thead>
        <tr>
          <th class="border-0">{{ $t('market') }}</th>
          <th class="border-0">{{ $t('price') }}</th>
          <th class="border-0">{{ $t('tareding_volume') }}</th>
          <th class="border-0">{{ $t('change') }}</th>
          <th class="border-0"></th>
          <th class="border-0"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data_currencies"
          :key="index"
          class="table-data-item"
          :class="{ 'table-data-item-low': item.low }"
        >
          <td class="border-0">
            <div class="d-flex align-items-center gap-3">
              <img :src="item.imageUrl" alt="" class="img-fluid" />
              <h6 class="code m-0">
                {{ item.code }}
                <small class="name ms-1">{{ item.name }}</small>
              </h6>
            </div>
          </td>
          <td class="border-0">
            <span class="price">
              <span>{{ item.currentExchangeRate.amount }}</span>
              <span class="text-uppercase ms-1">sar</span>
            </span>
          </td>
          <td class="border-0">
            <span class="volumn">
              <span>{{ item.currentUsdExchangeRate.amount }}</span>
              <span class="text-uppercase ms-1">sar</span>
            </span>
          </td>
          <td class="border-0">
            <span class="rate">
              <span>{{ item.low ? '+' : '-' }}</span>
              <span class="text-uppercase ms-1">0.23</span>
              <i :class="`las la-caret-${item.low ? 'down' : 'up'} ms-1`"></i>
            </span>
          </td>
          <td class="border-0">
            <img
              :src="
                require(`/assets/imgs/global/${
                  item.low ? 'graph-down.svg' : 'graph-up.svg'
                }`)
              "
              alt="graph"
              class="img-fluid graph"
            />
          </td>
          <td class="border-0">
            <Btn name="trade" :styles="{ minWidth: '76px', height: '35px' }" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { data_currencies } from '~/data'
'market', 'price', 'tareding_volume', 'change', '', ''
export default {
  data() {
    return {
      data_currencies,
    }
  },
}
</script>

<style></style>
