describe('Navegação Básica', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve carregar a página inicial', () => {
    cy.title().should('include', 'Kwanza Agent')
    cy.get('[data-cy="landing-page"]').should('exist')
  })

  it('deve navegar para página de login', () => {
    cy.get('[data-cy="login-link"]').click()
    cy.url().should('include', '/login')
    cy.get('[data-cy="login-form"]').should('exist')
  })

  it('deve navegar de volta para home', () => {
    cy.visit('/login')
    cy.get('[data-cy="logo"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('deve mostrar página 404 para rota inválida', () => {
    cy.visit('/pagina-inexistente', { failOnStatusCode: false })
    cy.get('[data-cy="not-found-page"]').should('exist')
    cy.contains('Página não encontrada').should('be.visible')
  })

  it('deve ser responsivo em diferentes tamanhos de tela', () => {
    // Teste mobile
    cy.viewport(375, 667)
    cy.get('[data-cy="landing-page"]').should('be.visible')
    
    // Teste tablet
    cy.viewport(768, 1024)
    cy.get('[data-cy="landing-page"]').should('be.visible')
    
    // Teste desktop
    cy.viewport(1280, 720)
    cy.get('[data-cy="landing-page"]').should('be.visible')
  })
})