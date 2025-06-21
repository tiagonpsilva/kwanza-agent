describe('Alternância de Tema', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('deve alternar entre tema claro e escuro', () => {
    // Verificar tema inicial (claro por padrão)
    cy.checkLightMode()
    
    // Alternar para tema escuro
    cy.toggleTheme()
    cy.checkDarkMode()
    
    // Alternar de volta para tema claro
    cy.toggleTheme()
    cy.checkLightMode()
  })

  it('deve persistir preferência de tema', () => {
    // Alternar para tema escuro
    cy.toggleTheme()
    cy.checkDarkMode()
    
    // Recarregar página
    cy.reload()
    
    // Deve manter tema escuro
    cy.checkDarkMode()
  })

  it('deve aplicar tema em todas as páginas', () => {
    // Alternar para tema escuro
    cy.toggleTheme()
    cy.checkDarkMode()
    
    // Navegar para login
    cy.visit('/login')
    cy.checkDarkMode()
    
    // Fazer login e ir para dashboard
    cy.login()
    cy.checkDarkMode()
    
    // Navegar para settings
    cy.visit('/settings')
    cy.checkDarkMode()
  })

  it('deve ter transição suave ao alternar tema', () => {
    // Verificar que elementos têm classes de transição
    cy.get('body').should('have.class', 'transition-colors')
    
    cy.toggleTheme()
    
    // Aguardar um pouco para transição
    cy.wait(300)
    cy.checkDarkMode()
  })

  it('deve ter toggle visível em diferentes layouts', () => {
    // Landing page
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
    
    // Login page
    cy.visit('/login')
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
    
    // Dashboard (após login)
    cy.login()
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
  })

  it('deve funcionar corretamente no modo responsivo', () => {
    // Mobile
    cy.viewport(375, 667)
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
    cy.toggleTheme()
    cy.checkDarkMode()
    
    // Tablet
    cy.viewport(768, 1024)
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
    cy.checkDarkMode()
    
    // Desktop
    cy.viewport(1280, 720)
    cy.get('[data-cy="theme-toggle"]').should('be.visible')
    cy.checkDarkMode()
  })
})