import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login/login.component';
import {MainviewComponent} from './mainview/mainview/mainview.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';
import {RegisterComponent} from './auth/register/register.component';
import {StatsPageComponent} from './stats/stats-page/stats-page.component';
import {AddIssueComponent} from './mainview/table/table-body/add-issue/add-issue.component';

const routes: Routes = [
  {path: '', component: MainviewComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'stats', component: StatsPageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'register', component: RegisterComponent},
  {
    path: 'add', component: AddIssueComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
