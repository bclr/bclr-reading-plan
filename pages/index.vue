<template>
  <div>
    <nav id="header" class="navbar fixed-top navbar-light navbar-expand-lg navbar-template">
      <a class="navbar-brand" href="/">
        <logo />
        BCLR Reading Plan
      </a>
      <div class="d-flex flex-row order-2 order-lg-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburger">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div id="hamburger" class="collapse navbar-collapse order-3 order-lg-2">
        <social />
      </div>
    </nav>
    <full-page :options="options">
      <weeks-slider />
    </full-page>
  </div>
</template>

<script>
import WeeksSlider from '~/components/schedule/WeeksSlider'
import Logo from '~/components/Logo'
import Social from '~/components/Social'

export default {
  components: {
    WeeksSlider,
    Logo,
    Social
  },
  data () {
    return {
      options: {
        licenseKey: 'YOUR KEY HERE',
        controlArrows: true,
        verticalCentered: false,
        css3: true
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
#header {
  z-index:9;
  background-color: #EDEDED;
  color: #003366;
}
.title {
  font-size: 2rem;
}
.serif {
  font-family: 'Playfair Display', serif;
}
.fp-controlArrow {
    position: absolute;
    z-index: 4;
    top: 50%;
    cursor: pointer;
    width: 0;
    height: 0;
    border-style: solid;
    margin-top: -38px;
}
.fp-controlArrow.fp-prev {
    left: 15px;
    width: 0;
    border-width: 38.5px 34px 38.5px 0;
    border-color: transparent rgba(255, 255, 255, 0.5) transparent transparent;
}
.fp-controlArrow.fp-next {
    right: 15px;
    border-width: 38.5px 0 38.5px 34px;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
}
</style>
