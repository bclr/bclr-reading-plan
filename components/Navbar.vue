<template lang="pug">
  b-navbar(toggleable="lg", fixed="top", variant="light")
    b-navbar-brand.navbar-brand(href="/")
      logo
      | {{ $t('title') }}
    b-navbar-toggle(target="nav-collapse")
    b-collapse#nav-collapse(is-nav)
      .nav-item
        nuxt-link.nav-link.px-1(to="/about") {{ $t('about.title') }}
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>
