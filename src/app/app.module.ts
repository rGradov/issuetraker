import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DataService} from './data/data.service';
import {MainViewModule} from './mainview/mainview.module';
import {AuthInterceptor} from './auth.interceptor';
import {AuthModule} from './auth/auth.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule,
    AuthModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService,{delay:500}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
