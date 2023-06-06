///<reference types="cypress"/>

it("Clicando e digitando nos elementos input", () => {
    cy.visit('/')
        .get(':nth-child(2) > .nav-link')
        .click()
        .get(':nth-child(2) > .col > .form-control')
        .click()
        .type('Iniciando testes unitarios com Cypress')
        .get(':nth-child(3) > .col > .form-control')
        .type('Esse é um teste unitário com cypress totalmente automatizado, estou simulando um cadastro de uma vaga usando o cypress')
        .get('.input-group > .form-control')
        .type('200000')
})

it("Clicando no select", () => {
    cy.get(':nth-child(2) > .form-select')
        .select('PJ')
        .get(':nth-child(3) > .form-select')
        .select('Presencial')
        .get('.btn').click()
        .get(':nth-child(1) > .nav-link').click()
})