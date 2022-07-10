import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
	selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

	private lastFocusElement!: HTMLElement;

	constructor() { }

	ngOnInit(): void {
		this.lastFocusElement = document.activeElement as HTMLElement;
	}

	ngOnDestroy(): void {
		this.lastFocusElement?.focus();
	}

}
