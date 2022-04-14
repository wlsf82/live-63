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

✅ Diferenças do Cypress e do Selenium

https://youtu.be/dsPiRpzJ9KE

Kaio Cândido Santiago

✅ Famosa pergunta, porque cypress e não o selenium? Até que ponto o cypress vem avançando para automação em outras plataforma(ex: mobile)?

João Santos

✅ 1 - O que você faz quando precisa testar domínios diferentes no Cypress?
✅ 2 - E como vc faz os dados pré automação, usa o próprio Cypress ou Cronjob?

- https://youtu.be/ASCAt2tuG_A
- https://github.com/cypress-io/cypress-realworld-app

Philipe Kawakami

✅ Qual melhor forma de lidar com loops no Cypress devido a limitações?

https://github.com/wlsf82/cypress-basico-v2/blob/aula-4/cypress/integration/CAC-TAT.spec.js#L113

Aline Hatakeyama

✅ 1 - Existe uma forma de testar gráficos?
✅ 2 - Como testamos filtros que traz uma listagem de itens?

Bruno Alves Quintanilha

✅ 1 - Existe alguma vantagem em usar TypeScript ao invés de JavaScript num projeto Cypress?

- https://youtu.be/FTJn--yApoo
- https://youtu.be/84pXEgkuaQs

✅ 2 - Afinal, a execução dos comandos Cypress é assíncrona?

- https://www.toolsqa.com/cypress/cypress-asynchronous-nature
- https://www.toolsqa.com/cypress/handle-non-cypress-async-promises/

✅ 3 - Em qual momento usar os comandos cy.window() e cy.task() em projetos reais?

- https://github.com/cypress-io/cypress-realworld-app
- https://youtu.be/-SwzI7WRarQ

Deivisom Oliveira

❌ Por que quando filtramos o mesmo dado usando API funciona e usando um array de um JSON não?
Quando eu uso a API e uso um filtro hardcoded, filtra corretamente.
Agora, quando eu uso uma fixture e tento fazer o mesmo processo não.

Matheus Neves

✅ Vale a pena criar testes de API com Cypress?

- https://youtu.be/iPt0K6dttcM
- https://talkingabouttesting.com/2021/02/07/como-verificar-a-estrutura-do-body-de-um-esquema-json-com-cypress/

Sérgio Eduardo

✅ Provavelmente as perguntas mais básicas de todas: Quando vai ser a Live? Como me inscrevo?

Victor de Camilo

✅ Como testar o recebimento de um email (como aqueles de confirmação de cadastro ou de envio de código de verificação)?

- https://youtu.be/T4txmk4vENM

Wadson Garbes

❌/✅ Como testar arquivos de texto (se isso for possível) layout e disposição de campos em massa?

- https://docs.cypress.io/api/commands/readfile

Rafael Schulte

❌/✅ Como acessar os dados do body de uma response após utilizar dados do tipo FormData em um cy.request() para um teste de API?

- https://talkingabouttesting.com/2021/02/07/como-verificar-a-estrutura-do-body-de-um-esquema-json-com-cypress/

Willian Santos

✅ Quais os benefícios de utilizar o Cypress num ambiente Docker?

Lucas Rodrigues Cardoso

✅ 1 - Como planejar testes automatizados em uma plataforma que tem inúmeras features?
✅ 2 - Como lidar com o tempo excessivo de teste?

Lay - Rosa Lauren

❌ 1 - Vc já usou cypress com AWS Amplify Console?
✅ 2 - Quando clica em continuar abre um modal que vc clica novamente ok de pois abre outro modal. Como abrir esse modal com Cypress?
