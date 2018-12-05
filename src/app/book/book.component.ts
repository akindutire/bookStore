import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';

@Component({
	selector: 'app-book',
	templateUrl: './book.component.html',
	styleUrls: [ './book.component.css' ]
})
export class BookComponent implements OnInit {
	error;
	books;
	loaded: boolean = false;

	constructor(private bookSvc: BookService) {}

	ngOnInit() {
		this.bookSvc.get().subscribe(
			(res: any[]) => {
				this.books = res;
				this.loaded = true;
			},
			(err) => {
				this.error = err;
				this.loaded = false;
			}
		);
	}
}
