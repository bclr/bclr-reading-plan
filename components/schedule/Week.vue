<template lang="pug">
  div
    day(v-for="(day, index) in week.days" :key="day" :day="day" :number="index + 1")
</template>

<script>
import Day from '~/components/schedule/Day'

export default {
  components: {
    Day
  },
  props: {
    week: {
      default: () => {},
      type: Object
    },
    number: {
      default: () => 0,
      type: Number
    }
  }
}
</script>

<style scoped>
  .card-columns {
    column-count: 5;
  }
  .card-deck {
    min-height: 50%;
  }
</style>
