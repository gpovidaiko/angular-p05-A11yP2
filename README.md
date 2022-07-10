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
