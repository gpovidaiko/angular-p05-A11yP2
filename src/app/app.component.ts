import { ModalRef, ModalService } from './shared/components/modal/modal.service';
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	@ViewChild('modal') modalTemplate!: TemplateRef<any>;

	title = 'A11yP2';

	modalRef!: ModalRef;

	constructor(private modalService: ModalService) { }

	showModal() {
		this.modalRef = this.modalService.open({
			title: 'User Details',
			templateRef: this.modalTemplate
		});
	}
}
