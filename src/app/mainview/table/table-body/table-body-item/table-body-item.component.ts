import {
  Component, Input, OnInit, Output, EventEmitter,
} from '@angular/core';

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


  @Output() changeIdEmmit = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  hideIssue(): void {
    if (confirm(`delete issue?${this.userinfo}`)) {
      this.changeIdEmmit.emit(this.index);
    }
  }
}
