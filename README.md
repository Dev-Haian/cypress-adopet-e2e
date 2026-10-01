# 🐶 Cypress E2E – Adopet

[![Testes Cypress](https://github.com/Dev-Haian/cypress-adopet-e2e/actions/workflows/cypress.yml/badge.svg)](https://github.com/Dev-Haian/cypress-adopet-e2e/actions/workflows/cypress.yml)
![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Testes automatizados com **Cypress** no [Adopet](https://adopet-tau.vercel.app), um site de adoção de animais usado para estudo.

Começou como projeto de curso. Depois eu reorganizei: comandos reutilizáveis, testes orientados a dados, nenhuma senha no código e execução automática no GitHub Actions.

---

## O que é testado

| Arquivo | Cenários |
| --- | --- |
| `cadastro.cy.js` | campos obrigatórios · cadastro com sucesso · **cadastro em massa** a partir de uma fixture |
| `login.cy.js` | campos obrigatórios · erro da API simulado com `cy.intercept` · cadastro seguido de login |
| `api-mensagens.cy.js` | status 200, tempo de resposta e formato do retorno da API |

## Técnicas usadas

- **Comandos customizados** (`cy.login`, `cy.cadastrar`, `cy.abrirLogin`): o teste lê como uma frase e, se a tela mudar, a correção é feita num lugar só.
- **Testes orientados a dados:** o mesmo cenário roda para cada usuário de `fixtures/usuarios.json`.
- **`cy.intercept`:** simula a resposta do servidor para testar como a tela reage a um erro, sem depender do back-end.
- **Seletores `data-test`:** atributos feitos para teste, que não quebram quando o texto ou o CSS mudam.
- **Dados únicos por execução:** e-mails com timestamp, para o teste poder rodar várias vezes.
- **Segredos fora do código:** o token da API vem de variável de ambiente.

## Estrutura

```
cypress/
├── e2e/            # os testes
├── fixtures/       # massa de dados (usuarios.json)
└── support/
    ├── commands.js # comandos customizados
    └── e2e.js      # carregado antes de cada teste
cypress.config.js   # URL base, viewport, retries
```

## Como rodar

Pré-requisito: Node.js 18 ou superior.

```bash
npm ci
npm run cy:open   # modo visual, para acompanhar os testes
npm test          # modo headless, como no CI
```

Para o teste de API, copie `cypress.env.example.json` para `cypress.env.json` e coloque um token válido. Sem token, esse teste é pulado e os outros rodam normalmente.

---

Feito por **Haian Vilas Boas**, QA. [LinkedIn](https://www.linkedin.com/in/haian-vilas-boas-806647221/) · [Portfólio](https://haianportifolio.framer.website/)
