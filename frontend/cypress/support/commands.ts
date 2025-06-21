// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/// <reference types="cypress" />

// Comando customizado para login
Cypress.Commands.add('login', (email?: string, password?: string) => {
  const testEmail = email || Cypress.env('testUser')
  const testPassword = password || Cypress.env('testPassword')
  
  cy.visit('/login')
  cy.get('[data-cy="email-input"]').type(testEmail)
  cy.get('[data-cy="password-input"]').type(testPassword)
  cy.get('[data-cy="login-button"]').click()
  
  // Aguardar redirecionamento após login
  cy.url().should('not.include', '/login')
})

// Comando para logout
Cypress.Commands.add('logout', () => {
  cy.get('[data-cy="user-menu"]').click()
  cy.get('[data-cy="logout-button"]').click()
  cy.url().should('include', '/')
})

// Comando para verificar elementos de loading
Cypress.Commands.add('checkLoadingState', (selector: string) => {
  cy.get(selector).should('exist')
  cy.get(selector).should('not.exist', { timeout: 10000 })
})

// Comando para testar responsividade
Cypress.Commands.add('testResponsive', (selector: string) => {
  // Mobile
  cy.viewport(375, 667)
  cy.get(selector).should('be.visible')
  
  // Tablet
  cy.viewport(768, 1024)
  cy.get(selector).should('be.visible')
  
  // Desktop
  cy.viewport(1280, 720)
  cy.get(selector).should('be.visible')
})

// Comandos para tema
Cypress.Commands.add('toggleTheme', () => {
  cy.get('[data-cy="theme-toggle"]').click()
})

Cypress.Commands.add('checkDarkMode', () => {
  cy.get('html').should('have.class', 'dark')
})

Cypress.Commands.add('checkLightMode', () => {
  cy.get('html').should('not.have.class', 'dark')
})

// Declaração de tipos para TypeScript
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Comando customizado para fazer login
       * @example cy.login()
       * @example cy.login('user@test.com', 'password')
       */
      login(email?: string, password?: string): Chainable<void>
      
      /**
       * Comando customizado para fazer logout
       * @example cy.logout()
       */
      logout(): Chainable<void>
      
      /**
       * Verifica estados de loading
       * @example cy.checkLoadingState('[data-cy="loading-spinner"]')
       */
      checkLoadingState(selector: string): Chainable<void>
      
      /**
       * Testa responsividade em diferentes viewports
       * @example cy.testResponsive('[data-cy="header"]')
       */
      testResponsive(selector: string): Chainable<void>
      
      /**
       * Alterna o tema da aplicação
       * @example cy.toggleTheme()
       */
      toggleTheme(): Chainable<void>
      
      /**
       * Verifica se está no modo escuro
       * @example cy.checkDarkMode()
       */
      checkDarkMode(): Chainable<void>
      
      /**
       * Verifica se está no modo claro
       * @example cy.checkLightMode()
       */
      checkLightMode(): Chainable<void>
    }
  }
}