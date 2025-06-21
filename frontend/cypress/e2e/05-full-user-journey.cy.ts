describe('Jornada Completa do Usuário', () => {
  it('deve completar fluxo completo: landing → login → dashboard → configurações', () => {
    // 1. Visitar landing page
    cy.visit('/')
    cy.get('[data-cy="landing-page"]').should('exist')
    cy.get('[data-cy="hero-title"]').should('be.visible')
    cy.get('[data-cy="cta-button"]').should('be.visible')
    
    // 2. Navegar para login
    cy.get('[data-cy="login-link"]').click()
    cy.url().should('include', '/login')
    
    // 3. Fazer login
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').type(users.testUser.email)
      cy.get('[data-cy="password-input"]').type(users.testUser.password)
      cy.get('[data-cy="login-button"]').click()
      
      // 4. Verificar redirecionamento para dashboard
      cy.url().should('include', '/dashboard')
      cy.get('[data-cy="dashboard"]').should('exist')
      cy.get('[data-cy="welcome-message"]').should('contain', users.testUser.name)
    })
    
    // 5. Verificar elementos do dashboard
    cy.get('[data-cy="news-feed"]').should('exist')
    cy.get('[data-cy="stats-cards"]').should('exist')
    cy.get('[data-cy="navigation-menu"]').should('exist')
    
    // 6. Navegar para chat
    cy.get('[data-cy="nav-chat"]').click()
    cy.url().should('include', '/chat')
    cy.get('[data-cy="chat-interface"]').should('exist')
    
    // 7. Navegar para configurações
    cy.get('[data-cy="nav-settings"]').click()
    cy.url().should('include', '/settings')
    cy.get('[data-cy="settings-tabs"]').should('exist')
    
    // 8. Testar diferentes abas de configurações
    cy.get('[data-cy="settings-tab-profile"]').click()
    cy.get('[data-cy="profile-settings"]').should('be.visible')
    
    cy.get('[data-cy="settings-tab-preferences"]').click()
    cy.get('[data-cy="preferences-settings"]').should('be.visible')
    
    cy.get('[data-cy="settings-tab-notifications"]').click()
    cy.get('[data-cy="notifications-settings"]').should('be.visible')
    
    // 9. Alterar tema
    cy.toggleTheme()
    cy.checkDarkMode()
    
    // 10. Fazer logout
    cy.logout()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('deve testar jornada de erro e recuperação', () => {
    // 1. Tentar login com credenciais inválidas
    cy.visit('/login')
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').type(users.invalidUser.email)
      cy.get('[data-cy="password-input"]').type(users.invalidUser.password)
      cy.get('[data-cy="login-button"]').click()
      
      // Verificar erro
      cy.get('[data-cy="error-message"]').should('be.visible')
    })
    
    // 2. Corrigir credenciais e fazer login
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').clear().type(users.testUser.email)
      cy.get('[data-cy="password-input"]').clear().type(users.testUser.password)
      cy.get('[data-cy="login-button"]').click()
      
      cy.url().should('include', '/dashboard')
    })
    
    // 3. Simular erro de rede e testar recuperação
    cy.intercept('GET', '**/api/news', { forceNetworkError: true }).as('networkError')
    cy.visit('/dashboard')
    cy.wait('@networkError')
    
    // Deve mostrar estado de erro de rede
    cy.get('[data-cy="network-error"]').should('be.visible')
    
    // Testar botão de retry
    cy.intercept('GET', '**/api/news', { fixture: 'news.json' }).as('newsSuccess')
    cy.get('[data-cy="retry-button"]').click()
    cy.wait('@newsSuccess')
    
    // Deve mostrar conteúdo normal
    cy.get('[data-cy="news-feed"]').should('be.visible')
  })

  it('deve testar acessibilidade básica', () => {
    cy.visit('/')
    
    // Verificar navegação por teclado
    cy.get('body').tab()
    cy.focused().should('have.attr', 'data-cy', 'login-link')
    
    cy.get('body').tab()
    cy.focused().should('have.attr', 'data-cy', 'cta-button')
    
    // Verificar aria-labels
    cy.get('[data-cy="theme-toggle"]').should('have.attr', 'aria-label')
    cy.get('[data-cy="logo"]').should('have.attr', 'alt')
    
    // Verificar foco visível
    cy.get('[data-cy="login-link"]').focus()
    cy.get('[data-cy="login-link"]').should('have.class', 'focus:ring-2')
  })

  it('deve testar performance básica', () => {
    // Medir tempo de carregamento da página inicial
    const start = Date.now()
    cy.visit('/')
    cy.get('[data-cy="landing-page"]').should('exist').then(() => {
      const loadTime = Date.now() - start
      expect(loadTime).to.be.lessThan(3000) // 3 segundos max
    })
    
    // Verificar que não há erros no console
    cy.window().then((win) => {
      const errors = []
      win.addEventListener('error', (e) => errors.push(e))
      expect(errors).to.have.length(0)
    })
  })

  it('deve funcionar offline (básico)', () => {
    cy.visit('/')
    
    // Simular offline
    cy.window().then((win) => {
      win.navigator.__defineGetter__('onLine', () => false)
      win.dispatchEvent(new Event('offline'))
    })
    
    // Aplicação deve continuar funcionando localmente
    cy.get('[data-cy="landing-page"]').should('exist')
    
    // Voltar online
    cy.window().then((win) => {
      win.navigator.__defineGetter__('onLine', () => true)
      win.dispatchEvent(new Event('online'))
    })
  })
})