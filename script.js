// IBS (FODMAP’s)-FM
// Interstitial Cystitis-IC
// MCAS (low-histamine) -LH

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

console.log(diets)


diets.forEach(diet => {
  let output = `Veggies (good)`
  output += diet.name
  output += diet.data.veggies.good
})

































































