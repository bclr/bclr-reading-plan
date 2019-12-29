<template lang="pug">
  b-navbar(toggleable="lg", fixed="top", variant="light")
    b-navbar-brand.navbar-brand(href="/")
      logo
      | {{ $t('title') }}
    b-navbar-toggle(target="nav-collapse")
    b-collapse#nav-collapse(is-nav)
      social
    ul.navbar-nav.flex-row
      li.nav-item
        a.nav-link.px-1(href="#") {{ $t('about.title') }}
</template>

<script>
import Logo from '~/components/Logo'
import Social from '~/components/Social'

export default {
  components: {
    Logo,
    Social
  }
}
</script>
