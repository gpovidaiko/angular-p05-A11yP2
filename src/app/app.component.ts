import { fade } from './shared/animations/fade.animation';
import { ModalService } from './shared/components/modal/modal.service';
import { ModalRef } from "./shared/models/modal-ref.model";
import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fade]
})
export class AppComponent {

	@ViewChild('modal') modalTemplate!: TemplateRef<any>;

	title = 'A11yP2';

	modalRef!: ModalRef;

	newsLetter: Boolean = false;

	constructor(private modalService: ModalService) { }

	showModal() {
		this.modalRef = this.modalService.open({
			title: 'User Details',
			templateRef: this.modalTemplate
		});
	}
}
