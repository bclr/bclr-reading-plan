<template lang="pug">
  .slide
    .container
      h2.day-title Day {{ number }}
      ul.list-group
        li.list-group-item(v-for="verse in verses" :key="verse")
          verse-ref(:reference="verse")
</template>

<script>
import VerseRef from '~/components/VerseRef'

export default {
  components: {
    VerseRef
  },
  props: {
    day: {
      default: () => '',
      type: String
    },
    number: {
      default: () => 0,
      type: Number
    }
  },
  computed: {
    verses () {
      return this.day.split('; ')
    }
  }
}
</script>

<style scoped>
  .day-title {
    color: #f8f9fa;
    font-weight: 300;
    padding-bottom: 1.875rem;
  }
</style>
