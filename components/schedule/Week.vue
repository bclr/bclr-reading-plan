<template>
  <div class="card-deck">
    <div class="card-body">
      <div class="card-columns">
        <day v-for="(day, index) in week.days" v-bind:key="day" v-bind:day="day" v-bind:number="index + 1" />
      </div>
    </div>
  </div>
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
