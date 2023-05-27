///<reference types="cypress"/>

it("cy.contains() - Buscando texto", () => {
    cy.visit('/')
        .get(':nth-child(2) > .nav-link')
            .contains('Publicar')
})