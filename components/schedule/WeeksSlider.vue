<template>
  <div>
    <div v-for="(week, index) in weeks" v-bind:key="week.week" class="section bg-bclr">
      <div class="container-fluid">
        <h1 class="pt-1 title">
          Bible Church of Little Rock
        </h1>
        <h2 class="subtitle">
          Weekly Reading Plan
        </h2>
        <week v-bind:week="week" v-bind:number="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
import Week from '~/components/schedule/Week'
import weeksData from '~/static/ReadingPlan.json'

export default {
  components: {
    Week
  },
  data () {
    return {
      weeks: weeksData
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
}

.title {
  display: block;
  /* font-family: 'Playfair Display', serif; */
  font-weight: 300;
  font-size: 3rem;
  color: #F8F9FA;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5rem;
  color: #7e848f;
  word-spacing: 5px;
  padding-bottom: 15px;
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
}

@media only screen and (max-width: 768px) {
  .bg-bclr  {
    background-size: auto 100%;
    background-position-x: 20%;
    background-position-y: 10%;
    background-repeat: no-repeat;
  }
}

</style>
