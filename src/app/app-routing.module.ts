// import { TableComponent } from './data/mainview/table/table.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login/login.component';
import {MainviewComponent} from './mainview/mainview/mainview.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: MainviewComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'stats', component: MainviewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
