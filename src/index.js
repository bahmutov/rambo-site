'use strict'

/* global Rx, CycleDOM, Cycle */
const {makeDOMDriver, h} = CycleDOM
const rambo = require('rambo')

console.time('solve')
const solution = rambo.solve([1, 2, 3, 4], [5, 6, 7, 8])
console.timeEnd('solve')
console.log(solution)

function main ({DOM}) {
  return {
    DOM: Rx.Observable.interval(1000)
      .map(i => h('h1', '' + i + ' seconds elapsed.'))
  }
}
const sources = {
  DOM: makeDOMDriver('#app')
}
Cycle.run(main, sources)
