# A11yP2

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de uma aplicação com acessibilidade

## 01. Definição de uma _API_

Criação do componente _modal_ que será utilizado como referência ao longo do módulo. O componente se comportará como uma _API_, tendo até o momento dois comportamentos disponíveis, abrir modal e fechar modal. Montagem de formulário que será passado como template para a modal. Citado a importância de definir uma _API_ minimalista.

## 02. Componente modal

Estruturação do template do componente de _modal_. Visto a utilização de _'ng-container'_ e de sua diretiva ngTemplateOutlet, que serve para a renderização de um template passado por referência.
Em _ModalService_ foi implementado o necessário para fabricar instâncias de _ModalComponent_ utilizando _ComponentFactoryResolver_, _ComponentFactory_ e _Injector_. _ComponentFactoryResolver_ e _ComponentFactory_ foram deprecados a partir da versão 13 do angular, então será necessário uma atualização dessa parte ao final do módulo.
Implementação do serviço _BodyInjectorService_ responsável por acoplar o template dos componentes dinamicamente criados ao _DOM_

## 03. Lapidando o nosso componente

Estilização do componente de _modal_. Visto como trabalhar com animações no _Angular_ importando o módulo _BrowserAnimationsModule_ ao módulo principal da aplicação. Visto como dar suporte à animações em _browser_ mais antigos através de uma configuração no arquivo _polyfills.ts_. Criação de arquivos dedicados à representar a animação, podendo ser reaproveitada em qualquer componente ou elemento do template. Visto o funcionamento das funções _trigger_, _transition_, _style_ e _animate_ para trabalhar com animações em Angular.

## 04. Acessibilidade

Implementação de navegação pelo teclado seguindo regras da [_WCAG_](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog). Implementação da diretiva _FocusTrap_ para prender a navegação por teclado através da modal, quando esta estiver aberta. Implementação da diretiva _FocusBack_ para retornar a navegação ao último elemento selecionado antes da modal ser aberta.


## 05. Avançando na acessibilidade

Implementação de formulário reativo, suas validações e suas mensagens de erro. Inclusão de alguns atributos _aria_ para auxiliar leitores de tela.
No _template_ do componente de _modal_ foi utilizado o atributo _role_ com o valor _'dialog'_ para dizer quem se comporta como uma caixa de diálogo. O atributo _aria-modal_ para indicar ao leitor de tela ignorar qualquer conteúdo fora da modal (interpreto como um funcionamento semelhante à diretiva _FocusTrap_ que foi implementada). Atributo _aria-label_ para o leitor de tela saber aonde ler o título da caixa de diálogo.
Em relação ao formulário apresentado pela _modal_, foi utilizado o atributo _aria-disabled_ no botão _submit_ recebendo o estado de invalidade do formulário, para que o leitor de tela continue sendo capaz de selecionar o botão para leitura, mas que o leia como um botão desabilitado. Porém isso ainda permite o botão ser executado, havendo a necessidade de evitar sua execução de uma forma mais programática. Para os campos que apresentam alguma validação, foi utilizado o atributo _aria-invalid_ para que o leitor de tela seja capaz de identificar quando o campo está inválido e o atributo _aria-describedby_ apontando para o _id_ do elemento com a mensagem de erro, para que o leitor seja capaz de ler a mensagem de erro como descrição para o campo.
Foi exemplificado que mesmo seguindo todas as diretrizes de acessibilidade para os leitores de tela, nem todas são suportadas. A exemplo, o atributo _aria-describedby_ não foi interpretado pelo _Chromevox_, leitor de tela utilizado ao longo do curso e de fácil acesso. Mas o leitor de tela _Jaws_, uma ferramenta paga, deu suporte a leitura desse atributo.
