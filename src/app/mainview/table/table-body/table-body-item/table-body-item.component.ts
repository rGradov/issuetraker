import {
  Component, Input, OnInit, Output, EventEmitter,
} from '@angular/core';
import {AuthService} from '../../../../auth/auth.service';
import {TableDataService} from '../../table-service/table-data.service';

@Component({
  selector: 'app-table-body-item',
  templateUrl: './table-body-item.component.html',
  styleUrls: ['./table-body-item.component.scss'],
})
export class TableBodyItemComponent implements OnInit {
  @Input() userinfo: string;
  @Input() location: string;
  @Input() issueSeverity: number;
  @Input() description: string;
  @Input() status: string;
  @Input() index: number;
  @Input() date: Date;
  @Input() comments: Array<string>;
  @Output() changeIdEmmit = new EventEmitter<number>();
  auths: AuthService;
  openInputComent = true;
  issue: any;

  constructor(public authServ: AuthService, private tableData: TableDataService) {
  }


  ngOnInit(): void {

  }


  hideIssue(): void {
    if (confirm(`delete issue?${this.userinfo}`)) {
      this.changeIdEmmit.emit(this.index);
    }
  }

  AddComent($event: string) {

    this.comments.push($event);
    this.issue = {
      id: this.index,
      userinfo: this.userinfo,
      location: this.location,
      issueSeverity: this.issueSeverity,
      date: this.date,
      description: this.description,
      status: this.status,
      comments: this.comments
    };
    this.tableData.addComment(this.issue, this.index).subscribe()
   ;
    this.openInputComent = !this.openInputComent;
  }
}
