'use strict';

// // const bmi = (person) => {
// //   return person['mass'] / person['height'] ** 2
// // }

// // const mark = {
// //   'height': 1.69,
// //   'mass': 78
// // }

// // const john = {
// //   'height': 1.95,
// //   'mass': 92
// // }

// // const markBMI = bmi(mark)
// // const johnBMI = bmi(john)

// // let markHigherBMI = markBMI > johnBMI

// // if (markHigherBMI) {
// //   console.log(`Mark ${markBMI} has a higher BMI than John ${johnBMI}`)
// // } else {
// //   console.log(`John ${johnBMI} has a higher BMI than  Mark ${markBMI}`)
// // }

// const dolphins = [96, 108, 89]
// const koalas = [88, 91, 110]

// // const average = (scores) => {
// //   scores.reduce((total, num) => total + num) / scores.length;
// // }

// const dolphinAvg = dolphins.reduce((total, num) => total + num) / dolphins.length;
// const koalasAvg = koalas.reduce((total, num) => total + num) / koalas.length;

// if (dolphinAvg > koalasAvg && dolphinAvg > 100) {
//   console.log(`Koalas win ${koalasAvg}`)
// } else if (koalasAvg > dolphinAvg && koalasAvg > 100) {
//   console.log(`Dolphins win it ${koalasAvg}`)
// } else if (dolphinAvg && koalasAvg < 100) {
//   console.log(`neither team wins ${koalasAvg} to ${dolphinAvg}`)
// } else {
//   console.log(`it's a draw ${koalasAvg} to ${dolphinAvg}`)
// }
// let value = 275;
// const percent = value >= 50 && value <= 300 ? 0.15 : 0.20;
// const tip = value * percent;
// const total = value + tip;

// console.log(`bill: ${value}, tip: ${tip}, total: ${total}`)

let hasDriversLicense = false

const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive')
