// ***********************************************
// Comandos customizados: ações que se repetem em vários testes
// ***********************************************

/** Abre a tela de login a partir da home */
Cypress.Commands.add('abrirLogin', () => {
  cy.visit('/');
  cy.get('[href="/login"]').click();
});

/** Abre a tela de cadastro a partir da home */
Cypress.Commands.add('abrirCadastro', () => {
  cy.visit('/');
  cy.get('[href="/cadastro"]').click();
});

/** Preenche e envia o formulário de login */
Cypress.Commands.add('login', (email, senha) => {
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(senha, { log: false });
  cy.get('[data-test="submit-button"]').click();
});

/** Preenche e envia o formulário de cadastro */
Cypress.Commands.add('cadastrar', ({ nome, email, senha }) => {
  cy.get('[data-test="input-name"]').type(nome);
  cy.get('[data-test="input-email"]').type(email);
  cy.get('[data-test="input-password"]').type(senha, { log: false });
  cy.get('[data-test="input-confirm-password"]').type(senha, { log: false });
  cy.get('[data-test="submit-button"]').click();
});
