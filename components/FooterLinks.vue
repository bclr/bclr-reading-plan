
<template lang="pug">
  footer.footer-links.fixed-bottom.bg-secondary.text-light
    .justify-content-center.pt-2
      social
      small &copy; Copyright 2020,&nbsp;
        abbr(title="The Bible Church of Little Rock") BCLR
</template>

<script>
import Social from '~/components/Social'

export default {
  components: {
    Social
  }
}
</script>

<style>
  .footer-links {
    height: 3rem;
  }
</style>
