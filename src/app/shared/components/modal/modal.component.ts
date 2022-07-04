import { Component, HostBinding, OnInit } from '@angular/core';
import { fade } from './../../animations/fade.animation';
import { ModalConfig } from "./modal-config.interface";
import { ModalRef } from "../../models/modal-ref.model";

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [fade]
})
export class ModalComponent implements OnInit {

	@HostBinding('@fade') fade = true;

	public config!: ModalConfig;
	public selfRef!: ModalRef;

	constructor() { }

	ngOnInit(): void {
	}

}
