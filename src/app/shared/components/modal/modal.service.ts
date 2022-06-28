import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ModalService {

  constructor() { }

  public open(config: ModalConfig): ModalRef {
    console.log('> ModalService.open()');
    return new ModalRef();
  }

}

export interface ModalConfig {
  title: String;
  templateRef: TemplateRef<any>;
}

export class ModalRef {

  public close(): void {
    console.log('> ModalRef.close()');
  }

}
