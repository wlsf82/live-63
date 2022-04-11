# Cypress Q&A - Talking About Testing

✅ Perguntas respondidas

❌ Perguntas que não soube ou não pude responder

Humberto Gouveia

✅ Na estrutura de pastas do Cypress, onde devem ficar os testes de API?"

- https://github.com/wlsf82/curso-cypress-intermediario/tree/passo-a-passo-e-solucao-final/cypress/integration/api
- https://github.com/wlsf82/gitlab-cypress

Vitor Botechi

✅ O que você menos gosta no Cypress? Ou o que você gostaria que fosse diferente em termos do framework em si? O que vc considera os maiores 'defeitos' do Cypress?

Alberto Pena

✅ Como fazer para encaixar o Cypress num CI/CD com repositórios separados de Frontend e Backend? Colocamos o Cypress em um terceiro repositório mesmo?

David Alves Oliveira

✅ O que tem que ter em um bom projeto de automação com Cypress no Github?

- https://docs.cypress.io/guides/references/best-practices
- https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#When-Elements-Are-Missing
- https://dev.to/walmyrlimaesilv/best-practices-in-test-automation-with-cypress-49ee

Diego de Oliveira Suzuki

✅ 1 - Quando faz sentido pagar o Cypress?

✅ 2 - Comparação breve entre Cypress vs Playwright

https://youtu.be/WzMfeBLxeM4

Igor Federizi

✅ 1- Como realizar a documentação dos bugs encontrados?

- Breve descrição do problema (título do bug)
- Descrição mais longa (descrição)
   - Passo-a-passo de como reproduzir o bug
   - Ou a referência pra um teste automatizado
- Evidência (screenshots, vídeos, logs)
- Deve ser reproduzível
- Se não tem um teste automatizado, deve estar nos critérios de aceite que um teste seja criado junto a correção

✅ 2- Como organizar os testes por cenários? (mesma dúvida do Eduardo Moises)

- Entenda quais os cenários mais importantes

```
describe('Suite de testes', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
    // qualquer outro comando
  })

  it('teste 1', () => {})
  it('teste 2', () => {})
  it('teste 3', () => {})

  context('Sub-suite 1', () => {
    beforeEach(() => {})

    it('sub-test 1', () => {})
    it('sub-test 2', () => {})
    it('sub-test 3', () => {})
  })

  context('Sub-suite 2', () => {
    beforeEach(() => {})

    it('sub-test 1', () => {})
    it('sub-test 2', () => {})
    it('sub-test 3', () => {})
  })
})
```

Isabelle Faria

✅ 1- Gostaria de saber se a dashboard do próprio cypress quando logamos na APP compensa ser usada ou vale a pena baixar um plug-in para isso?

❌ 2 - E gostaria de saber se há plataformas para freelancer de teste em outros países

Christian Lopes

✅ O que estudar para conseguir primeira oportunidade na área como tester?

Resposta do Vinicius Moreira

Estuda automação, faça projetos e poste eles no github ou gitlab (ou qualquer outro SaaS), estude o fluxo de testes(recomendo a CTFL), testes funcionais, não funcionais, os escopos de caixa branca e caixa preta, caixa cinza, entenda o que é uma API, tenha conhecimento de pelo menos uma linguagem orientada a objetos, não precisa ser bom, só precisa conhecer e saber aplicar, saiba fazer testes manuais, documentar e utilizar ferramentas de reporte como jira e kanban, poste no github esses testes, e reportes, aprenda scrum, coloque uma boa descrição no teu LinkedIn, procure recrutadores no LinkedIn e siga o perfil deles, mande mensagem pra eles, não precisa ter vergonha, eles não vão te morder, peça primeiro uma oportunidade não remunerada pra pegar experiência e colocar no currículo, veja sobre projetos free lance, pra conseguir experiência no currículo, e por fim, saiba se vender nas redes sociais.

Juliano Teixeira

✅ Como classificar da lista dos cenários de testes o que deverá ser automatizado? (Exemplo: 10 cenários, deste, 7 serão apenas testes manuais e 3 serão automatizados)

Lucas Filardi Grecco

✅ Diferenças do cypress e do Selenium

https://youtu.be/dsPiRpzJ9KE
