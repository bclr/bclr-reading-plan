<template>
  <div>
    <h2 class="display-4 text-light">
      Weekly Reading Plan
    </h2>
    <h3 class="text-light">Week {{ number }}</h3>
    <p class="lead text-light">
      <span>{{ startOfIsoWeek(number).format('dddd, MMMM D') }}</span>&nbsp;&ndash;
      <span>{{ startOfIsoWeek(number).add(6, 'days').format('dddd, MMMM D') }}</span>
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
      isoWeekYear: this.$moment().isoWeekYear()
    }
  },
  methods: {
    startOfIsoWeek (weekNumber) {
      return this.$moment()
        .isoWeekYear(this.isoWeekYear)
        .isoWeekday(1)
        .isoWeek(weekNumber)
    }
  }
}
</script>

<style scoped>

</style>
