import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HtinterceptorService implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
		//console.log('I intercept it');
		req.headers.set('Content-Type', 'application/json');
		return handler.handle(req);
	}
}
