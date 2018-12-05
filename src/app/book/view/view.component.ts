import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './../../book.service';

import { Book } from './../interface/book.interface';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
	book;
	error: string;
	id: number;
	loaded: boolean = false;

	@ViewChild('deleteBtn') deleteBtn: ElementRef;

	constructor(private bookSvc: BookService, private router: Router, private nroute: ActivatedRoute) {}

	ngOnInit() {
		this.nroute.params.subscribe((params) => {
			this.id = +params['id'];
		});

		this.bookSvc.getOne(this.id).subscribe(
			(res: Book[]) => {
				this.book = res[0];
				this.loaded = true;
			},
			(err) => {
				this.error = err;
			}
		);
	}

	remove() {
		this.deleteBtn.nativeElement.innerHTML = 'Deleting';
		this.deleteBtn.nativeElement.disabled = 'disabled';

		this.bookSvc.remove(this.id).subscribe(
			(res: any) => {
				console.log(res);
				if (res.response == true) {
					// console.log(res.message);
				} else {
					this.deleteBtn.nativeElement.innerHTML = 'Delete';
					this.deleteBtn.nativeElement.disabled = '';
					// console.log(res.message);
				}
			},
			(err) => {
				// this.error = err;
			}
		);
		this.router.navigate([ '/' ]);
	}
}
