///<reference types="cypress"/>

it("cy.get() - Selecionando Elementos", () => {
    cy.visit('/')
        .get(':nth-child(2) > .nav-link')
})