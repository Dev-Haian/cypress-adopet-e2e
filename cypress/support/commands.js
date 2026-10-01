// ***********************************************
// Comandos customizados: ações que se repetem em vários testes
// Seletores conferidos no HTML real do Adopet.
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
  cy.get('#email').type(email);
  cy.get('#pass').type(senha, { log: false });
  cy.contains('button', 'Entrar').click();
});

/** Preenche e envia o formulário de cadastro */
Cypress.Commands.add('cadastrar', ({ nome, email, senha }) => {
  cy.get('#name').type(nome);
  cy.get('#email').type(email);
  cy.get('#pass-create').type(senha, { log: false });
  cy.get('#pass-confirm').type(senha, { log: false });
  cy.contains('button', 'Cadastrar').click();
});
