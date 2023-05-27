///<reference types="cypress"/>

it("Acessando URL", () => {
    cy.visit('/')
        .get(':nth-child(2) > .nav-link')
})