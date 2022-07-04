import { ComponentRef } from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';


export class ModalRef {

	constructor(private componetRef: ComponentRef<ModalComponent>) {
		this.componetRef.instance.selfRef = this;
	}

	public close(): void {
		console.log('> ModalRef.close()');
		this.componetRef.destroy();
	}

}
