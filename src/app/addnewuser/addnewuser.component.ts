import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {TableDataService} from '../mainview/table/table-service/table-data.service';
import {User} from '../auth/interface/user';

@Component({
  selector: 'app-addnewuser',
  templateUrl: './addnewuser.component.html',
  styleUrls: ['./addnewuser.component.scss']
})
export class AddnewuserComponent implements OnInit {
  form: FormGroup;
  err = '';
  success: string;
  users: Array<User>;

  ngOnInit() {
    this.tableDs.getUsers().subscribe((elem) => this.users = elem);
  }

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private tableDs: TableDataService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    });
  }

  Register(): void {
    const val = this.form.value;
    this.authService.addNewUser(val.email, val.password);
    this.success = 'success';
    setTimeout(() => this.success = null, 1000);
  }

}
