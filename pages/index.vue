<template>
  <div>
    <nav id="header" class="navbar navbar-expand-lg navbar-light">
      <div class="navbar-nav mx-auto">
        <logo />
        &nbsp;
        <h1 class="display-4 title">
          <span class="d-none d-lg-inline">BCLR Reading Plan</span>
        </h1>
      </div>
      <social />
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
  position:fixed;
  width: 100%;
  height: 3.25em;
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
/*
.title {
  display: block;
  font-family: 'Playfair Display', serif;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 3rem;
  color: #F8F9FA;
}
*/
</style>
