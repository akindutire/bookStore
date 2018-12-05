import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from './../../book.service';

import { Book } from './../interface/book.interface';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: [ './edit.component.css' ]
})
export class EditComponent implements OnInit {
	id;
	book;
	loaded: boolean = false;
	error;
	frmdetails: Book;
	constructor(private bookSvc: BookService, private router: Router, private nroute: ActivatedRoute) {}

	ngOnInit() {
		this.nroute.params.subscribe((params) => {
			this.id = +params['id'];
		});

		this.bookSvc.getOne(this.id).subscribe(
			(res: any[]) => {
				this.book = res[0];
				this.loaded = true;
			},
			(err) => {
				this.error = err;
				this.loaded = false;
			}
		);
	}

	edit(t: HTMLInputElement, a: HTMLInputElement, i: HTMLInputElement, d: HTMLInputElement, g: HTMLInputElement) {
		this.frmdetails = { title: t.value, author: a.value, isbn: i.value, description: d.value, genre: g.value };

		let userw = this.bookSvc.edit(this.frmdetails, this.book.id).subscribe((res) => {});
		this.router.navigate([ '/' ]);
	}
}
