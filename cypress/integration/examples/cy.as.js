///<reference types="cypress"/>

it("cy.as() - Filtrar elemento", () => {
    cy.visit('/')
        .get(':nth-child(1) > :nth-child(1) > .h-100')
        .as('filtros')
        .get('@filtros')
})