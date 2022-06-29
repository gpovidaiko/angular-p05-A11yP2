# A11yP2

Aplicação para estudo de Angular.

Projeto desenvolvido ao longo de curso realizado, com a motivação de práticar o desenvolvimento de uma aplicação com acessibilidade

## 01. Definição de uma _API_

Criação do componente _modal_ que será utilizado como referência ao longo do módulo. O componente se comportará como uma _API_, tendo até o momento dois comportamentos disponíveis, abrir modal e fechar modal. Montagem de formulário que será passado como template para a modal. Citado a importância de definir uma _API_ minimalista.

## 02. Componente modal

Como minimizar dependências de um Componente
A diretiva *ngTemplateOutlet
ComponentFactoryResolver para criar fábricas de Componentes
O papel de ApplicationRef e HotView de um ComponentRef

Estruturação do template do componente de _modal_. Visto a utilização de _'ng-container'_ e de sua diretiva ngTemplateOutlet, que serve para a renderização de um template passado por referência.
Em _ModalService_ foi implementado o necessário para fabricar instâncias de _ModalComponent_ utilizando _ComponentFactoryResolver_, _ComponentFactory_ e _Injector_. _ComponentFactoryResolver_ e _ComponentFactory_ foram deprecados a partir da versão 13 do angular, então será necessário uma atualização dessa parte ao final do módulo.
Implementação do serviço _BodyInjectorService_ responsável por acoplar o template dos componentes dinamicamente criados ao _DOM_
