describe('Estados de Loading e Erro', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/loading-demo') // Página demo que criamos
  })

  it('deve exibir loading spinners corretamente', () => {
    cy.get('[data-cy="loading-spinner-sm"]').should('be.visible')
    cy.get('[data-cy="loading-spinner-md"]').should('be.visible')
    cy.get('[data-cy="loading-spinner-lg"]').should('be.visible')
    cy.get('[data-cy="loading-spinner-xl"]').should('be.visible')
  })

  it('deve testar botões com loading', () => {
    cy.get('[data-cy="test-button-loading"]').click()
    
    // Botão deve ficar desabilitado e mostrar loading
    cy.get('[data-cy="test-button-loading"]').should('be.disabled')
    cy.get('[data-cy="button-loading-spinner"]').should('exist')
    
    // Aguardar conclusão
    cy.get('[data-cy="test-button-loading"]', { timeout: 3000 }).should('not.be.disabled')
  })

  it('deve exibir skeleton loaders', () => {
    cy.get('[data-cy="news-card-skeleton"]').should('be.visible')
    cy.get('[data-cy="stats-card-skeleton"]').should('be.visible')
    cy.get('[data-cy="form-skeleton"]').should('be.visible')
    cy.get('[data-cy="news-list-skeleton"]').should('be.visible')
  })

  it('deve testar estados de erro', () => {
    // Network Error
    cy.get('[data-cy="network-error"]').should('be.visible')
    cy.get('[data-cy="network-error"] [data-cy="retry-button"]').should('exist')
    cy.get('[data-cy="network-error"] [data-cy="home-button"]').should('exist')
    
    // Server Error
    cy.get('[data-cy="server-error"]').should('be.visible')
    cy.get('[data-cy="server-error"] [data-cy="retry-button"]').should('exist')
    cy.get('[data-cy="server-error"] [data-cy="home-button"]').should('exist')
    
    // Generic Error
    cy.get('[data-cy="generic-error"]').should('be.visible')
    
    // Empty State
    cy.get('[data-cy="empty-state"]').should('be.visible')
  })

  it('deve testar toast notifications', () => {
    // Success toast
    cy.get('[data-cy="success-toast-button"]').click()
    cy.get('[data-cy="toast"]').should('be.visible')
    cy.get('[data-cy="toast"]').should('contain', 'Operação realizada!')
    
    // Error toast
    cy.get('[data-cy="error-toast-button"]').click()
    cy.get('[data-cy="toast"]').should('be.visible')
    cy.get('[data-cy="toast"]').should('contain', 'Algo deu errado!')
    
    // Warning toast
    cy.get('[data-cy="warning-toast-button"]').click()
    cy.get('[data-cy="toast"]').should('be.visible')
    cy.get('[data-cy="toast"]').should('contain', 'Atenção necessária!')
    
    // Info toast
    cy.get('[data-cy="info-toast-button"]').click()
    cy.get('[data-cy="toast"]').should('be.visible')
    cy.get('[data-cy="toast"]').should('contain', 'Informação importante')
  })

  it('deve testar async state hook', () => {
    cy.get('[data-cy="async-test-button"]').click()
    
    // Deve mostrar loading
    cy.get('[data-cy="async-test-button"]').should('be.disabled')
    cy.get('[data-cy="async-loading"]').should('exist')
    
    // Aguardar resultado (sucesso ou erro)
    cy.get('[data-cy="async-test-button"]', { timeout: 3000 }).should('not.be.disabled')
    
    // Verificar se mostra resultado ou erro
    cy.get('body').then(($body) => {
      if ($body.find('[data-cy="async-success"]').length > 0) {
        cy.get('[data-cy="async-success"]').should('be.visible')
      } else {
        cy.get('[data-cy="async-error"]').should('be.visible')
      }
    })
    
    // Testar reset
    cy.get('[data-cy="async-reset-button"]').click()
    cy.get('[data-cy="async-success"]').should('not.exist')
    cy.get('[data-cy="async-error"]').should('not.exist')
  })

  it('deve testar overlay de loading', () => {
    cy.get('[data-cy="overlay-test-button"]').click()
    
    // Deve mostrar overlay
    cy.get('[data-cy="loading-overlay"]').should('be.visible')
    cy.get('[data-cy="loading-overlay"]').should('contain', 'Processando operação...')
    
    // Overlay deve desaparecer
    cy.get('[data-cy="loading-overlay"]', { timeout: 4000 }).should('not.exist')
  })

  it('deve ser responsivo em diferentes tamanhos', () => {
    // Mobile
    cy.viewport(375, 667)
    cy.get('[data-cy="loading-spinner-lg"]').should('be.visible')
    cy.get('[data-cy="news-card-skeleton"]').should('be.visible')
    
    // Tablet
    cy.viewport(768, 1024)
    cy.get('[data-cy="loading-spinner-lg"]').should('be.visible')
    cy.get('[data-cy="news-card-skeleton"]').should('be.visible')
    
    // Desktop
    cy.viewport(1280, 720)
    cy.get('[data-cy="loading-spinner-lg"]').should('be.visible')
    cy.get('[data-cy="news-card-skeleton"]').should('be.visible')
  })
})