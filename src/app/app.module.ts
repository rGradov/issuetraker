import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainViewModule} from './mainview/mainview.module';
import {AuthModule} from './auth/auth.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';
import {TokenInterceptor} from './auth/token.interceptor';
import { StatsPageComponent } from './stats/stats-page/stats-page.component';
import {ChartsModule} from 'ng2-charts';
import { PieStatusComponent } from './stats/stats-page/pie-status/pie-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StatsPageComponent,
    PieStatusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainViewModule,
    AuthModule,
    HttpClientModule,
    ChartsModule,
    NgbModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
