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

import weeksData from '~/static/ReadingPlan.json'

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
      return this.$moment().isoWeek() === parseInt(weekNumber)
    }
  }
}
</script>

<style>
.container-fluid {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 6rem;
}
.section {
  background-color: #002345;
}
.bg-bclr {
  background-image: url('~assets/bclr.svg');
  background-size: 110%;
  background-position-x: 20%;
  background-position-y: 10%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
@media only screen and (max-width: 768px) {
  .bg-bclr  {
    background-size: auto 110%;
    background-position-x: 20%;
    background-position-y: 10%;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
}
</style>
