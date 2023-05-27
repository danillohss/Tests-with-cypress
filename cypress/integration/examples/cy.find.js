///<reference types="cypress"/>

it("cy.find() - Filtrar elemento", () => {
    cy.visit('/')
        .get(':nth-child(1) > :nth-child(1) > .h-100')
            .find('.col > .btn', '.form-control')
                
})