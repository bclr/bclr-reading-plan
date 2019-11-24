<template>
  <div class="slide">
    <div class="container">
      <h2 class="day-title">
        Day {{ number }}
      </h2>
      <ul class="list-group">
        <li v-for="verse in verses" v-bind:key="verse" class="list-group-item">
          <verse-ref v-bind:reference="verse" />
        </li>
      </ul>
    </div>
  </div>
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
