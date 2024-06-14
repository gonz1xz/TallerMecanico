describe('template spec', () => {
  it('createCite', () => {
    cy.visit('https://tallermecanico-46u9.onrender.com/principal')
    cy.get('a').first().click()
    cy.get('button').first().click()
    cy.get('#client-name').type('Gonzalinho')
    cy.get('#model-car').type('Renault 9')
    cy.get('#id-plate').type('RSD563')
    cy.get('#description-job').type('Verificar tren delantero y corregir alineación')
    cy.get('button[type="submit"]').click()
    cy.contains('Gonzalinho')
  })

  it('deleteCite', () => {
    cy.visit('https://tallermecanico-46u9.onrender.com/principal')
    cy.contains('Agenda').should('have.text', 'Agenda')
    cy.contains('Agenda').click()
    cy.contains('Gonzalinho')
    cy.get('.bi-trash3-fill').last().click()
    cy.contains('Gonzalinho').should('not.exist')
  })

  it('visitHome', () => {
    cy.visit('https://tallermecanico-46u9.onrender.com/principal')
    cy.contains('Agenda').should('have.text', 'Agenda')
    cy.contains('Ver lista de precios').should('have.text', 'Ver lista de precios')
  })

  it('navigationTest', () => {
    cy.visit('https://tallermecanico-46u9.onrender.com/principal')
    cy.contains('Agenda').should('have.text', 'Agenda')
    cy.contains('Agenda').click()
    cy.contains('Volver al menu').click()
    cy.contains('Ver lista de precios').should('have.text', 'Ver lista de precios')
    cy.contains('Ver lista de precios').click()
    cy.contains('Volver al menu').click()
  })

})