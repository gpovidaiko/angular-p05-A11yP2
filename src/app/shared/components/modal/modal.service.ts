import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from '@angular/core';
import { BodyInjectorService } from '../../services/body-injector.service';
import { ModalConfig } from './modal-config.interface';
import { ModalComponent } from './modal.component';
import { ModalRef } from '../../models/modal-ref.model';

@Injectable()
export class ModalService {

	private componentfactory!: ComponentFactory<ModalComponent>;

	constructor(
		componentFactoryResolver: ComponentFactoryResolver,
		private injector: Injector,
		private bodyInjector: BodyInjectorService
	) {
		this.componentfactory = componentFactoryResolver.resolveComponentFactory(ModalComponent);
	}

	public open(config: ModalConfig): ModalRef {
		const componentRef = this.createComponentRef();
		componentRef.instance.config = config;
		console.log('> ModalService.open()');
		this.bodyInjector.stackBeforeAppRoot(componentRef);
		return new ModalRef(componentRef);
	}

	private createComponentRef(): ComponentRef<ModalComponent> {
		return this.componentfactory.create(this.injector);
	}

}
