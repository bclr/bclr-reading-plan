<template lang="pug">
  div
    div(v-for="(week, index) in weeks" :key="week.week" :class="['section', { 'active': isCurrentWeek(week.week) }, 'bg-bclr']")
      div
        .container-fluid
          heading(:number="index + 1")
          div
            week(:week="week" :number="index + 1")
          actions
</template>

<script>
import Week from '~/components/schedule/Week'
import Heading from '~/components/schedule/Heading'
import Actions from '~/components/schedule/Actions'

import weeksData from '~/static/ReadingPlan2020.json'

export default {
  components: {
    Heading,
    Week,
    Actions
  },
  data () {
    return {
      weeks: weeksData
    }
  },
  methods: {
    isCurrentWeek (weekNumber) {
      return this.$moment().week() === parseInt(weekNumber)
    }
  }
}
</script>

<style>

</style>
