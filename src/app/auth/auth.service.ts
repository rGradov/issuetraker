import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from './interface/user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authKey: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string) {

    return this.http.post<User>('http://localhost:3000/auth/login', {email, password})
      .subscribe(
        (data: any) => {
          console.log(data);
          this.router.navigate(['']);
          localStorage.setItem('auth_token', data['access_token']);
        },
        error => console.log(error.message)
      );
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

   get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }

  getToken(): string {
    return localStorage.getItem('auth_token');
  }
}
