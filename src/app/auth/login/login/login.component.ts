import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  err = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    const val = this.form.value;

    this.err = this.authService.authErr;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password);
      this.err = this.authService.authErr;

    }
  }

  close() {
    this.err = '';
  }
}
