///<reference types="cypress"/>

it("cy.invoke() - Filtrar elemento", () => {
    cy.visit('/')
        .get('.col > .btn')
        .invoke('text')
        .should('equal', 'Buscar')
})