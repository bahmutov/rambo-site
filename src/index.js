'use strict'

/* global CycleDOM, Cycle */
const {makeDOMDriver, p, div, label} = CycleDOM
const rambo = require('rambo')

// initial input / output
const input = [1, 5, 3]
const output = [4, 8, 6]

function solve ({input, output}) {
  const problem = {input, output}
  const solution = rambo.solve(input, output)
  return {problem, solution}
}

function isUnempty (s) {
  return s && s.length
}

function intent (dom) {
  /* eslint-disable no-eval */
  const input_ = dom.select('#input')
    .events('blur')
    .map((e) => e.target.value)
    .tap((s) => {
      console.log('input source "%s"', s)
    })
    .filter(isUnempty)
    .map(eval)
    .startWith(input)

  const output_ = dom.select('#output')
    .events('blur')
    .map((e) => e.target.value)
    .tap((s) => {
      console.log('output source "%s"', s)
    })
    .filter(isUnempty)
    .map(eval)
    .startWith(output)

  return input_.combineLatest(output_, (i, o) => {
    console.log('merging', i, 'with', o)
    return {
      input: i,
      output: o
    }
  }).startWith({input: undefined, output: undefined})
}

function inputArea ({input, output}) {
  return div('.input', [
    label({for: 'input'}, 'input'),
    CycleDOM.input('#input', {
      name: 'input',
      type: 'text',
      value: JSON.stringify(input)
    }),
    label({for: 'output'}, 'output'),
    CycleDOM.input('#output', {
      name: 'output',
      type: 'text',
      value: JSON.stringify(output)
    })
  ])
}

function couldNotSolve (problem) {
  return div([
    inputArea(problem),
    p(`could not solve ${JSON.stringify(problem.input)} -> ${JSON.stringify(problem.output)}`)
  ])
}

function showSolution ({problem, solution}) {
  return div([
    inputArea(problem),
    p('has solution ' + solution.name)
  ])
}

function view (input_) {
  return input_
    // .tap((i) => {
    //   console.log('view of', i)
    // })
    .map(solve)
    .map(({problem, solution}) => {
      return solution ? showSolution({problem, solution}) : couldNotSolve(problem)
    })
}

// console.time('solve')
// const solution = rambo.solve(i, output)
// console.timeEnd('solve')
// console.log(solution)

function main ({DOM}) {
  // const model_ = Rx.Observable.just({input: i, output})
  return {
    // DOM: view(intent(DOM))
    // DOM: Rx.Observable.just(inputArea())
    DOM: view(intent(DOM))
  }
}
const sources = {
  DOM: makeDOMDriver('#app')
}
Cycle.run(main, sources)
