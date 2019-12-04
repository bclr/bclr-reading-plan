<template lang="pug">
  div
    h2.display-4.text-light Weekly Reading Plan
    h3.text-light Week {{ number }}
    p.lead.text-light
      span {{ startOfWeek(number).format('dddd, MMMM D') }}
      span.mx-2 &ndash;
      span {{ startOfWeek(number).add(6, 'days').format('dddd, MMMM D') }}
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
