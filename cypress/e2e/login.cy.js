describe('Login', () => {
  beforeEach(() => {
    cy.abrirLogin();
  });

  it('exibe as mensagens de campos obrigatórios ao enviar vazio', () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  });

  it('mostra erro quando a API recusa as credenciais', () => {
    // Simula a resposta do servidor: testa como a tela reage a um erro,
    // sem depender de um usuário real existir
    cy.intercept('POST', '**/login', { statusCode: 400 }).as('login');

    cy.login('nao.existe@teste.dev', 'SenhaErrada1');

    cy.wait('@login');
    cy.url().should('include', '/login');
  });

  it('usuário recém-cadastrado consegue entrar', () => {
    const usuario = { nome: 'Usuário QA', email: `qa.${Date.now()}@teste.dev`, senha: 'Senha12345' };

    cy.abrirCadastro();
    cy.cadastrar(usuario);
    cy.url().should('include', '/login');

    cy.login(usuario.email, usuario.senha);

    cy.url().should('include', '/home');
  });
});
