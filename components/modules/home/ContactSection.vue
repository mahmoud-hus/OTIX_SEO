<template>
  <section class="portfolio_section" :class="{ 'no-bg': noBg }">
    <b-container>
      <b-row class="align-items-center">
        <div class="col-md-6 pb pt content">
          <img
            src="~/assets/imgs/global/logo-dark.png"
            alt="logo"
            class="img-fluid"
          />
          <h2>
            {{ $t('assistance') }} <br />
            {{ $t('required') }} {{ $t('reach') }}
          </h2>
        </div>
        <div class="col-md-6">
          <Form class="form">
            <b-row>
              <b-col>
                <label>{{ $t('first_name') }}</label>
                <b-form-input class="formControl" />
              </b-col>
              <b-col>
                <label>{{ $t('last_name') }}</label>
                <b-form-input class="formControl" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label>{{ $t('email') }}</label>
                <b-form-input class="formControl" />
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <label>{{ $t('message') }}</label>
                <textarea class="formControl form-control" rows="{3}" />
              </b-col>
            </b-row>
            <div class="justify-content-end d-flex">
              <Btn
                :name="$t('submit')"
                :styles="{
                  width: 150,
                }"
              />
            </div>
          </Form>
        </div>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  props: ['noBg'],
}
</script>

<style>
.portfolio_section {
  margin-bottom: var(--space-lg);
}

.portfolio_section:not(.no-bg) {
  background-color: var(--bs-gray-100);
}

.portfolio_section .form {
  background-color: var(--bs-white);
  padding: var(--space-lg);
}

.portfolio_section.no-bg .form {
  background-color: var(--bs-gray-100);
}

.portfolio_section .formControl {
  margin-bottom: var(--space-md);
  background: var(--bs-gray-100);
  border: none;
  height: 45px;
  border-radius: 5px;
  display: block;
}

.portfolio_section.no-bg .formControl {
  background-color: var(--bs-white);
}

.portfolio_section textarea.formControl {
  resize: none;
  height: 100px;
}

.portfolio_section .content img {
  margin-bottom: var(--space-md);
}
</style>
