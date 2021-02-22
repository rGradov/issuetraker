import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TableDataService} from '../../table-service/table-data.service';
import {AuthService} from '../../../../auth/auth.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  rFrom: FormGroup;
  users: any = [];
  issueLength =0;
  isAdmin: boolean;
  userEmail: string;

  constructor(private fb: FormBuilder,
              public tableDataService: TableDataService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
    this.isAdmin = this.auth.isAdmin();
    this.userEmail = this.auth.currentUser();

  }

  initForm() {
    this.rFrom = this.fb.group({
      description: new FormControl('',),
      userinfo: new FormControl('',),
      issueSeverity: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      status: new FormControl('not started', Validators.required)
    });
  }

  private getUsers() {
    this.tableDataService.getUsers().subscribe(users => this.users = users);
    this.tableDataService.getIssues().subscribe(issue => {
        issue.forEach((elem) => {
          if (elem.id > this.issueLength) {
            this.issueLength = elem.id;
          }
        });
      }
    );
  }

  submit() {
    const formData = {...this.rFrom.value};
    formData.id = this.issueLength + 1;
    formData.comments = [];
    formData.date = new Date();
    console.log(formData);
    this.tableDataService.addIssue(formData).subscribe();
    this.tableDataService.openInput = !this.tableDataService.openInput;
  }
}
