/* global describe, it, beforeEach, cy, Cypress, expect */
describe('tiny toast', () => {
  beforeEach(() => {
    cy.visit('dist/index.html')
  })

  it('works', () => {
    expect(true).to.be.true
  })

  it('has header', () => {
    cy
      .get('header')
  })

  it('has header with Rambo text', () => {
    cy.get('h1').contains('Rambo')
  })

  it('has the app itself', () => {
    cy.get('#app')
    cy.get('#input')
    cy.get('#output')
  })

  it('can compute R.map', () => {
    cy
      .get('#input').clear().type('[1, 2, 3]{enter}')
      .get('#output').clear().type('[6, 7, 8]{enter}')
      .blur()
    // todo: check the successful solution
  })
})
