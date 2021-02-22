import {
  Component, Input, OnInit, Output, EventEmitter,
} from '@angular/core';
import {TableDataService} from '../table/table-service/table-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() search:string;

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(model:string) {
    this.search =model;
    this.searchChange.emit(model);
  }

  constructor(private tb: TableDataService) {
  }

  ngOnInit(): void {
  }

  openAddItem() {
    this.tb.openInput = !this.tb.openInput;
  }
}
