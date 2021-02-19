import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup;
  err = '';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.minLength(6)]]

    });
  }

  Register(): void {
    const val = this.form.value;


    if (val.email && val.password && val.repassword) {
      if (val.password === val.repassword) {
        this.authService.Register(val.email, val.password);
        this.err = this.authService.authErr;
      } else {
        alert('sad');
      }

    }
  }

}
