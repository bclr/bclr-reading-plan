<template lang="pug">
  div
    navbar
    full-page(:options="options")
      weeks-slider
</template>

<script>
import Navbar from '~/components/Navbar'
import WeeksSlider from '~/components/schedule/WeeksSlider'

export default {
  components: {
    Navbar,
    WeeksSlider
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
