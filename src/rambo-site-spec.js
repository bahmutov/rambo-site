'use strict'

/* global describe, it */
const rambo = require('rambo')
const la = require('lazy-ass')
const is = require('check-more-types')

describe('simple solution using rambo', () => {
  it('has solve method', () => {
    la(is.fn(rambo.solve))
  })

  it('finds R.map(R.add(4))', () => {
    const i = [1, 2, 3, 4]
    const o = [5, 6, 7, 8]
    const solution = rambo.solve(i, o)
    la(is.object(solution))
    la(is.unemptyString(solution.name), solution)
  })
})
