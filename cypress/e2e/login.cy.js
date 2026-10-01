const mensagensObrigatorias = ['É necessário informar um endereço de email', 'Insira sua senha'];

describe('Login', () => {
  beforeEach(() => {
    cy.abrirLogin();
  });

  it('exibe as mensagens de campos obrigatórios ao enviar vazio', () => {
    cy.contains('button', 'Entrar').click();

    mensagensObrigatorias.forEach((msg) => cy.contains(msg).should('be.visible'));
  });

  it('não mostra erro de campo obrigatório com os campos preenchidos', () => {
    cy.login('qa@teste.dev', 'Senha12345');

    mensagensObrigatorias.forEach((msg) => cy.contains(msg).should('not.exist'));
  });

  it('a tela de login leva para o cadastro', () => {
    cy.contains('a', 'Faça seu cadastro').click();

    cy.url().should('include', '/cadastro');
  });
});
