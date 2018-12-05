import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BookComponent } from './book/book.component';
import { AddComponent } from './book/add/add.component';
import { EditComponent } from './book/edit/edit.component';
import { ViewComponent } from './book/view/view.component';
import { HtinterceptorService } from './htinterceptor.service';

const appRoutes: Routes = [
	{ path: '', component: BookComponent },
	{ path: 'book/view/:id', component: ViewComponent },
	{ path: 'book/add', component: AddComponent },
	{ path: 'book/edit/:id', component: EditComponent }
];

@NgModule({
	declarations: [ AppComponent, HeaderComponent, BookComponent, AddComponent, EditComponent, ViewComponent ],
	imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes) ],
	providers: [ { provide: HTTP_INTERCEPTORS, useClass: HtinterceptorService, multi: true } ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
