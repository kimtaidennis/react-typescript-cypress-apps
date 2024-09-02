describe('App.tsx spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Successfully loads', () => {
    cy.contains('Vite + React')
  })

  it('Check Header', () => {
    cy.get('[data-testid="main-header"]').should('include.text','Vite')
    cy.get('[data-testid="main-header"]').contains(/vite/i)
  })

  it('Button count', () => {
    cy.get('[data-testid="button-count"]').should('have.text','count is 0')
    cy.get('[data-testid="button-count"]').click()
    cy.get('[data-testid="button-count"]').should('have.text','count is 1')
    cy.wait(6000)
    cy.get('[data-testid="button-count"]').click()
    cy.get('[data-testid="button-count"]').click()
    cy.get('[data-testid="button-count"]').should('have.text','count is 3')
  })

})