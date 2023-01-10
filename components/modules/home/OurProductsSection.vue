<template>
  <section class="our-products-section">
    <b-container class="products_section pt pb mt-5">
      <Title
        :title="$t('products_title')"
        :subtitle="$t('products_subTitle')"
      />
      <b-row class="gy-5">
        <b-col sm="12">

          <Product img="mock1.png" link="https://trade.otix.exchange" :title="$t('product_otix_platform')" :desc="$t('product_otix_platform_desc')"/>
        </b-col>
        <b-col sm="12">

          <Product reverseRow="flex-row-reverse" img="mock2.png" link="https://trade.otix.exchange/buy-crypto" :title="$t('product_quick_trade')" :desc="$t('product_quick_trade_desc')" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Product from './Product.vue'

export default { components: { Product } }
</script>

<style></style>
