/// <reference types="cypress" />

it('runs asynchronously', () => {
  cy.visit('https://walmyr.dev')
  cy.wait(5000) // Estou usando este wait de 5 segundos só para demonstrar a assincronicidade do Cypress. NÃO USE ISSO EM TESTES DE VERDADE!
  cy.scrollTo('bottom').then(() => console.log('Rodei depois do wait.'))
  console.log('Hey! Did you know that, although I am the last cmd in this list,')
  console.log('I will run before cy.wait and cy.scrollTo?')
})

it('marca cada tipo de atendimento', () => {
  cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')

  cy.get('input[type="radio"]')
    .should('have.length', 3)
    .then($radioButtons => {
      let i = 0
      while (i < $radioButtons.length) {
        cy.wrap($radioButtons[i]).check()
        cy.wrap($radioButtons[i]).should('be.checked')
        i++
      }
    })
    // .each(function($radio) {
    //   cy.wrap($radio).check()
    //   cy.wrap($radio).should('be.checked')
    // })
})