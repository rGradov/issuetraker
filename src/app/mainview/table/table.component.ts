import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() search: string;

  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(model: string): void {
    this.search = model;
    this.searchChange.emit(model);
  }
}
