'use strict'

/* global Rx, CycleDOM, Cycle */

const {makeDOMDriver, h} = CycleDOM

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
