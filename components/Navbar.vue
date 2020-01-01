<template lang="pug">
  b-navbar(toggleable="lg", fixed="top", variant="light")
    b-navbar-brand.navbar-brand(href="/")
      logo
      | {{ $t('title') }}
    b-navbar-toggle(target="nav-collapse")
    b-collapse#nav-collapse(is-nav)
      .nav-item
        a.nav-link.px-1(href="/about") {{ $t('about.title') }}
      .nav-item
        a.nav-link.px-1(href="https://www.bclr.org/contact/") {{ $t('contact.title') }}
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>
