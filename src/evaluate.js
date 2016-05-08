'use strict'

function evaluate (s) {
  /* eslint-disable no-eval */
  return eval('(' + s + ')')
}
module.exports = evaluate
