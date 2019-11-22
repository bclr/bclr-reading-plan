<template>
  <full-page :options="options">
    <weeks-slider />
  </full-page>
</template>

<script>
import WeeksSlider from '~/components/schedule/WeeksSlider'

export default {
  components: {
    WeeksSlider
  },
  data () {
    return {
      options: {
        licenseKey: 'YOUR KEY HERE',
        controlArrows: true,
        scrollBar: true,
        scrollHorizontally: true
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
</style>
