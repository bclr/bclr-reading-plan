const fs = require('fs')
const plan = require('./ReadingPlan.json')
// eslint-disable-next-line no-var
var days = []

// Offset anything over 5 days into the next week and continue down the line
const newPlan = plan.map((week) => {
  if (week.days.length <= 3) {
    return week
  }
  week.days = days.concat(week.days)
  days = week.days.slice(5)
  week.days = week.days.slice(0, 5)

  return week
})
// console.log(newPlan)
const data = JSON.stringify(newPlan)
fs.writeFileSync('ReadingPlanNew.json', data)
