import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade.animation';
import { ModalService } from './shared/components/modal/modal.service';
import { ModalRef } from "./shared/models/modal-ref.model";
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	animations: [fade]
})
export class AppComponent implements OnInit {

	@ViewChild('modal') modalTemplate!: TemplateRef<any>;

	title = 'A11yP2';

	modalRef!: ModalRef;

	newsLetter: Boolean = false;

	form!: FormGroup;

	constructor(
		private modalService: ModalService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			firstName: ['', Validators.required],
			surname: ['', Validators.required],
			age: ['', Validators.required],
			newsLetter: [false],
		});
	}

	showModal() {
		this.modalRef = this.modalService.open({
			title: 'User Details',
			templateRef: this.modalTemplate
		});
	}

	submit(): void {
		if (this.form.invalid) return;

		console.log(this.form.value);
		this.modalRef.close();
	}
}
