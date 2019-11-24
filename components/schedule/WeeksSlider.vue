<template>
  <div>
    <div v-for="(week, index) in weeks" v-bind:key="week.week" v-bind:class="['section', { 'active': isCurrentWeek(week.week) }, 'bg-bclr']">
      <div>
        <div class="container-fluid">
          <heading v-bind:number="index + 1" />
          <div>
            <week v-bind:week="week" v-bind:number="index + 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Week from '~/components/schedule/Week'
import Heading from '~/components/schedule/Heading'
import weeksData from '~/static/ReadingPlan.json'

export default {
  components: {
    Heading,
    Week
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
