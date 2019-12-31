<template lang="pug">
  b-dropdown(id="lang-selector" text="locale" class="m-md-2")
    b-dropdown-item(v-for="(lang, i) in locales" :key="`locale${i}`" @click="setLocale(lang)" :value="lang"){{ lang }}
</template>

<script>
import { mutations } from '~/store/index'

export default {
  data () {
    return {
      locale: this.$store.state.locale
    }
  },
  computed: {
    locales () {
      return this.$store.state.locales
    }
  },
  methods: {
    setLocale (locale) {
      return this.$store.commit(mutations.SET_LANG, locale)
    }
  }
}
</script>
