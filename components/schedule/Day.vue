<template>
  <div class="card">
    <div class="card-body">
      <span class="card-title lead">
        Day {{ number }}
      </span>
    </div>
    <ul class="list-group list-group-flush">
      <li v-for="verse in verses" v-bind:key="verse" class="list-group-item">
        <verse-ref v-bind:reference="verse" />
      </li>
    </ul>
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
  .card-title {
    font-family: 'Playfair Display', serif;
  }
</style>
