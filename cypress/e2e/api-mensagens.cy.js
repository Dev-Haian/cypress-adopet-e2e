/**
 * Teste de API: o token não fica no código.
 * Ele vem da variável ADOPET_TOKEN (arquivo cypress.env.json local
 * ou secret CYPRESS_ADOPET_TOKEN no GitHub Actions).
 */
describe('API Adopet - mensagens', () => {
  const token = Cypress.env('ADOPET_TOKEN');

  before(function () {
    if (!token) {
      cy.log('ADOPET_TOKEN não definido: teste de API ignorado');
      this.skip();
    }
  });

  it('lista mensagens com status 200 e em menos de 2 segundos', () => {
    cy.request({
      method: 'GET',
      url: '/api/mensagens',
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(2000);
      expect(response.body).to.have.property('mensagens');
    });
  });
});
