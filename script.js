// IBS (FODMAP’s)-FM
// Interstitial Cystitis-IC
// MCAS (low-histamine) -LH

const fs = require('fs')

const newline = '\r\n'

let fodmap = require('./diets/fodmap.js').data
let ic = require('./diets/IC.js').data
let lh = require('./diets/low-histamine.js').data

let diets = [
  {
    name: 'FODMAP',
    data: fodmap,
    source: 'https://www.ibsdiets.org/fodmap-diet/fodmap-food-list/'
  },
  {
    name: 'Interstitial Cystitis',
    data: ic,
    source: 'https://www.ichelp.org/wp-content/uploads/2015/07/food-list.pdf'
  },
  {
    name: 'MCAS(low-histamine)',
    data: lh,
    source: 'https://factvsfitness.com/histamine-intolerance-food-list-quickly-relieve-symptoms/'
  },
]




// console.log(fodmap)

// console.log(ic)

// console.log(lh)


// fodmap.veggies.good.forEach(x => {
//   console.log(x)
// })

// console.log(diets)


let output = `Veggies (good)` + newline
output += `----------------------------------------` + newline + newline


diets.forEach(diet => {
  output += diet.name + newline
  output += `----------` + newline
  output += diet.data.veggies.good.join(', ')
  output += newline + newline
})


output += `----------------------------------------` + newline

console.log(output)

// fs.writeFile('./reports/veggies_good.txt', output, err => {
//   if(err) console.log(err)
//   console.log('wrote good veggies to disk')
// })

fs.writeFile('./reports/veggies_good_horizontal.txt', output, err => {
  if(err) console.log(err)
  console.log('wrote good veggies to disk')
})


























































