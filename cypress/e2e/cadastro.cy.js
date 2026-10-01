describe('Cadastro', () => {
  beforeEach(() => {
    cy.abrirCadastro();
  });

  it('exibe as mensagens de campos obrigatórios ao enviar vazio', () => {
    cy.get('[data-test="submit-button"]').click();

    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');
  });

  it('cadastra um novo usuário e leva para o login', () => {
    const email = `qa.${Date.now()}@teste.dev`;

    cy.cadastrar({ nome: 'Usuário QA', email, senha: 'Senha12345' });

    cy.url().should('include', '/login');
  });

  // Teste orientado a dados: o mesmo cenário para cada usuário do arquivo de fixture
  context('cadastro em massa (dados da fixture)', () => {
    const { usuarios } = require('../fixtures/usuarios.json');

    usuarios.forEach((usuario) => {
      it(`cadastra ${usuario.nome}`, () => {
        // e-mail único para o teste poder rodar várias vezes
        const email = usuario.email.replace('@', `+${Date.now()}@`);

        cy.cadastrar({ ...usuario, email });

        cy.url().should('include', '/login');
      });
    });
  });
});
