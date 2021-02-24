import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TableDataService} from '../../table-service/table-data.service';
import {AuthService} from '../../../../auth/auth.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Issue} from '../../../../data/interface/issue';
import {DateInterface} from './date.interface';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.scss']
})
export class AddIssueComponent implements OnInit {
  rFrom: FormGroup;
  users: any = [];
  issueLength = 0;
  isAdmin: boolean;
  userEmail: string;
  model: NgbDateStruct;
  @Output() onChangeIssue = new EventEmitter<Issue>();
  minDate: DateInterface = {
    year: 2021
  };

  constructor(private fb: FormBuilder,
              public tableDataService: TableDataService,
              private auth: AuthService) {

  }

  ngOnInit(): void {
    this.currentDate();
    this.getUsers();
    this.initForm();
    this.isAdmin = this.auth.isAdmin();
    this.userEmail = this.auth.currentUser();

  }

  initForm() {
    this.rFrom = this.fb.group({
      description: new FormControl('', Validators.required),
      userinfo: new FormControl('', Validators.required),
      issueSeverity: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      status: new FormControl('not started', Validators.required),
      date: new FormControl('', Validators.required)
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
    formData.date = new Date(this.model.year, this.model.month, this.model.day);
    this.tableDataService.addIssue(formData).subscribe();
    this.onChangeIssue.emit(formData);
    this.tableDataService.openInput = !this.tableDataService.openInput;
  }

  private currentDate() {
    const date = new Date();
    this.minDate.year = date.getFullYear();
    this.minDate.month = date.getMonth() - date.getMonth() + 1;
    this.minDate.day = date.getDay() - date.getDay() + 1;

  }
}
