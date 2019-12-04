<template>
  <div>
    <h2 class="display-4 text-light">
      Weekly Reading Plan
    </h2>
    <h3 class="text-light">Week {{ number }}</h3>
    <p class="lead text-light">
      <span>{{ startOfWeek(number).format('dddd, MMMM D') }}</span>&nbsp;&ndash;
      <span>{{ startOfWeek(number).add(6, 'days').format('dddd, MMMM D') }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      default: () => 0,
      type: Number
    }
  },
  data () {
    return {
      year: this.$moment().year()
    }
  },
  methods: {
    startOfWeek (weekNumber) {
      return this.$moment()
        .year(this.year)
        .weekday(1)
        .week(weekNumber)
        .subtract(1, 'day')
    }
  }
}
</script>

<style scoped>

</style>
