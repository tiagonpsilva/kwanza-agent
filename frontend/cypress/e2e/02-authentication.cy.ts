describe('Autenticação', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('deve fazer login com credenciais válidas', () => {
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').type(users.testUser.email)
      cy.get('[data-cy="password-input"]').type(users.testUser.password)
      cy.get('[data-cy="login-button"]').click()
      
      // Deve redirecionar para dashboard
      cy.url().should('include', '/dashboard')
      cy.get('[data-cy="dashboard"]').should('exist')
      
      // Deve mostrar nome do usuário
      cy.get('[data-cy="user-name"]').should('contain', users.testUser.name)
    })
  })

  it('deve mostrar erro com credenciais inválidas', () => {
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').type(users.invalidUser.email)
      cy.get('[data-cy="password-input"]').type(users.invalidUser.password)
      cy.get('[data-cy="login-button"]').click()
      
      // Deve mostrar mensagem de erro
      cy.get('[data-cy="error-message"]').should('be.visible')
      cy.get('[data-cy="error-message"]').should('contain', 'Credenciais inválidas')
      
      // Deve permanecer na página de login
      cy.url().should('include', '/login')
    })
  })

  it('deve validar campos obrigatórios', () => {
    cy.get('[data-cy="login-button"]').click()
    
    // Deve mostrar validação para email
    cy.get('[data-cy="email-error"]').should('be.visible')
    
    // Deve mostrar validação para password
    cy.get('[data-cy="password-error"]').should('be.visible')
  })

  it('deve mostrar/ocultar senha', () => {
    cy.get('[data-cy="password-input"]').type('123456')
    cy.get('[data-cy="password-input"]').should('have.attr', 'type', 'password')
    
    cy.get('[data-cy="password-toggle"]').click()
    cy.get('[data-cy="password-input"]').should('have.attr', 'type', 'text')
    
    cy.get('[data-cy="password-toggle"]').click()
    cy.get('[data-cy="password-input"]').should('have.attr', 'type', 'password')
  })

  it('deve fazer logout corretamente', () => {
    // Primeiro fazer login
    cy.login()
    
    // Verificar que está logado
    cy.url().should('include', '/dashboard')
    
    // Fazer logout
    cy.logout()
    
    // Deve voltar para página inicial
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('deve testar loading states durante login', () => {
    cy.fixture('users').then((users) => {
      cy.get('[data-cy="email-input"]').type(users.testUser.email)
      cy.get('[data-cy="password-input"]').type(users.testUser.password)
      
      // Interceptar requisição para simular delay
      cy.intercept('POST', '**/auth/login', (req) => {
        return new Promise((resolve) => {
          setTimeout(() => resolve(req.reply()), 1000)
        })
      }).as('loginRequest')
      
      cy.get('[data-cy="login-button"]').click()
      
      // Deve mostrar loading no botão
      cy.get('[data-cy="login-button"]').should('be.disabled')
      cy.get('[data-cy="login-loading"]').should('exist')
      
      cy.wait('@loginRequest')
    })
  })
})