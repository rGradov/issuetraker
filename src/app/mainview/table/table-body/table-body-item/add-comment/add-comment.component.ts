import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TableDataService} from '../../../table-service/table-data.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  comment: string;
  @Input() id: any;
  @Output() onchanged = new EventEmitter<string>();


  constructor(public   tableData: TableDataService) {
  }

  ngOnInit(): void {
  }

  addComent(): void {
    this.onchanged.emit(this.comment);
    this.comment = '';

  }

}
