import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, first } from 'rxjs/operators';

import { Book } from './book/interface/book.interface';

@Injectable({
	providedIn: 'root'
})
export class BookService {
	baseUrl = 'http://localhost/inte/book/';

	books;
	constructor(private http: HttpClient) {}

	get(): Observable<Book[]> {
		return this.http.get(`${this.baseUrl}`).pipe(
			map((res) => {
				return res['data'];
			}),
			catchError(this.handleError)
		);
	}

	getOne(id): Observable<Book[]> {
		return this.http.get(`${this.baseUrl}view/${id}`).pipe(
			map((res) => {
				return res['data'];
			}),
			catchError(this.handleError)
		);
	}

	add(details): Observable<any> {
		return this.http.post<Book>(`${this.baseUrl}add`, details).pipe(
			first((res) => {
				return res['data'];
			}),
			catchError(this.handleError)
		);
	}

	remove(id): Observable<any> {
		return this.http.delete(`${this.baseUrl}remove/${id}`).pipe(
			first((res) => {
				return res['data'];
			}),
			catchError(this.handleError)
		);
	}

	edit(details, book_id): Observable<any> {
		return this.http.put<Book>(`${this.baseUrl}change/${book_id}`, details).pipe(
			first((res) => {
				return res['data'];
			}),
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse) {
		console.log(error.error.text);
		// return an observable with a user friendly message
		return throwError('Error! something went wrong.');
	}
}
