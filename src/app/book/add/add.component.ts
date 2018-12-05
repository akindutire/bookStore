import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './../../book.service';

import { Book } from './../interface/book.interface';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: [ './add.component.css' ]
})
export class AddComponent implements OnInit {
	error;
	frmdetails: Book;
	constructor(private router: Router, private bookSvc: BookService) {}

	ngOnInit() {}

	add(t: HTMLInputElement, a: HTMLInputElement, i: HTMLInputElement, d: HTMLInputElement, g: HTMLInputElement) {
		this.frmdetails = { title: t.value, author: a.value, isbn: i.value, description: d.value, genre: g.value };

		let userw = this.bookSvc.add(this.frmdetails).subscribe((res: any) => {
			if (res.data.response) this.router.navigate([ '/' ]);
			else console.log(res);
		});
	}
}
