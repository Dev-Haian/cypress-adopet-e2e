const mensagensObrigatorias = [
  'É necessário informar um endereço de email',
  'Crie uma senha',
  'Repita a senha criada acima',
];

describe('Cadastro', () => {
  beforeEach(() => {
    cy.abrirCadastro();
  });

  it('exibe as mensagens de campos obrigatórios ao enviar vazio', () => {
    cy.contains('button', 'Cadastrar').click();

    mensagensObrigatorias.forEach((msg) => cy.contains(msg).should('be.visible'));
  });

  // Teste orientado a dados: o mesmo cenário para cada usuário do arquivo de fixture
  context('formulário preenchido corretamente (dados da fixture)', () => {
    const { usuarios } = require('../fixtures/usuarios.json');

    usuarios.forEach((usuario) => {
      it(`aceita os dados de ${usuario.nome}`, () => {
        cy.cadastrar(usuario);

        mensagensObrigatorias.forEach((msg) => cy.contains(msg).should('not.exist'));
      });
    });
  });
});
