<template>
  <section class="landing-section">
    <div class="landing-content pt">
      <b-container class="position-relative">
        <b-row class="justify-content-between">
          <b-col lg="6">
            <div class="landing-inner">
              <h1 class="landing-title">{{ $t('landing_main_title') }}</h1>
              <h3 class="landing-sub-title">{{ $t('landing_sub_title') }}</h3>
              <div class="landing-join">
                <b-form>
                  <h6 class="landing-join-title">{{ $t('landing_join') }}</h6>
                  <div class="mb-3 d-flex align-items-center">
                    <b-form-input
                      :placeholder="$t('landing_join_holder')"
                      aria-label="email"
                      aria-describedby="landing-join"
                      type="email"
                      class="landing-inp"
                    />
                    <button class="landing-btn">
                      {{ $t('landing_start_now') }}
                    </button>
                  </div>
                </b-form>
                <div class="landing-apps d-flex align-items-center">
                  <a href="#" class="app-link">
                    <img
                      src="~/assets/imgs/global/ios.svg"
                      alt="apple app store"
                      class="img-fluid"
                    />
                  </a>
                  <a href="#" class="app-link">
                    <img
                      src="~/assets/imgs/global/android.svg"
                      alt="google play store"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="5" class="d-none d-lg-block">
            <div class="landing-imgs position-relative h-100 w-100">
              <div class="d-flex l-img-tablet">
                <img
                  src="~/assets/imgs/global/ltablet.png"
                  alt="tablet"
                  class="img-fluid"
                />
              </div>
              <div class="landing-img landing-img-phone">
                <img
                  src="~/assets/imgs/global/lphone.png"
                  alt="mobile"
                  class="img-fluid"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <!-- {/* wavy  */} -->
    <div class="custom-shape-divider-top-1665473795">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.landing-content {
  background: var(--primary);
}

.landing-content .landing-title {
  color: var(--bs-white);
  margin-bottom: var(--space-sm);
  font-weight: bold;
  line-height: 1.3;
}

.landing-content .landing-sub-title {
  color: var(--bs-gray-200);
  margin-bottom: var(--space-lg);
}

.landing-content .landing-join-title {
  margin-bottom: var(--space-sm);
  color: var(--bs-gray-200);
}

.landing-content .landing-inp {
  height: 50px;
  border: 1px solid var(--bs-white);
  background: transparent;
  border-radius: 0 10px 10px 0 !important;
  box-shadow: 0 0 10px rgb(0 0 0 / 30%);
  color: var(--bs-white);
}

.landing-content .landing-inp:lang(en) {
  border-radius: 10px 0 0 10px !important;
}

.landing-content .landing-inp::placeholder {
  color: var(--bs-gray-100);
  text-transform: capitalize;
}

.landing-content .landing-btn {
  height: 50px;
  min-width: 120px;
  border-radius: 10px 0 0 10px !important;
  background-color: var(--bs-white);
  color: var(--dark);
  text-transform: capitalize;
  border: 1px solid var(--bs-white);
}

.landing-content .landing-btn:lang(en) {
  border-radius: 0 10px 10px 0 !important;
}

.landing-content .landing-apps {
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.landing-content .landing-apps img {
  width: 180px;
}

.l-img-tablet img {
  max-width: 350px;
  margin-inline-start: auto;
}

.landing-content .landing-img {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9;
}

.landing-content .landing-img-phone:lang(en) {
  right: auto;
  left: 0;
}

.landing-content .landing-img.landing-img-phone img {
  position: relative;
  left: -120px;
  bottom: -100px;
  max-height: 450px;
}

.landing-content .landing-img.landing-img-phone:lang(ar) img {
  right: -195px;
  left: auto;
}

/* wavy  */
.custom-shape-divider-top-1665473795 {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-1665473795 svg {
  position: relative;
  display: block;
  width: calc(130% + 1.3px);
  height: 120px;
}

.custom-shape-divider-top-1665473795 .shape-fill {
  fill: var(--primary);
}
</style>
