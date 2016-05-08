'use strict'

/* global describe, it */
const la = require('lazy-ass')
const is = require('check-more-types')

describe('evaluate input text', () => {
  const evaluate = require('./evaluate')

  it('is a function', () => {
    la(is.fn(evaluate))
  })

  it('evaluates object', () => {
    const o = "{foo: 'bar'}"
    const x = evaluate(o)
    la(is.object(x), 'not an object', x)
    la(x.foo === 'bar', 'has no foo', x)
  })

  it('evaluates list', () => {
    const o = '[1, 2, 3]'
    const x = evaluate(o)
    la(is.array(x), 'not an array', x)
    la(x.length === 3, 'wrong length', x)
  })
})
