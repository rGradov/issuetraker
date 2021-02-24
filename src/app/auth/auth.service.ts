import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './interface/user';
import {Router} from '@angular/router';
import {baseUrl} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authKey: string;
  authErr: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  Register(email: string, password: string): any {
    return this.http.post<User>(`${baseUrl}auth/register/`, {email, password})
      .subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['']);
        localStorage.setItem('email', email);
        localStorage.setItem('auth_token', data['access_token']);

      }, error => this.authErr = error.message);

  }

  login(email: string, password: string) {

    return this.http.post<User>(`${baseUrl}auth/login`, {email, password})
      .subscribe(
        (data: any) => {
          this.router.navigate(['']);
          localStorage.setItem('email', email);
          localStorage.setItem('auth_token', data['access_token']);
        },
        error => this.authErr = error.message);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  currentUser(): string {
    return (localStorage.getItem('email'));
  }

  getToken(): string {
    return localStorage.getItem('auth_token');
  }

  isAdmin(): boolean {
    if (localStorage.getItem('email') === 'mainrudenua@gmail.com') {
      return true;
    } else {
      return false;
    }
  }

}
