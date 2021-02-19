import {
  Component, EventEmitter, Input, OnInit, Output,
} from '@angular/core';
import {Issue} from '../../../data/interface/issue';
import {TableDataService} from '../table-service/table-data.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.scss'],
})
export class TableBodyComponent implements OnInit {
  issues: Issue[] = [];
  err: string;

  searchString: string;

  @Input() search: string;

  @Output() searchChange = new EventEmitter<string>();

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues(): void {
    this.tableDataService.getIssues().subscribe((issues) => {
      this.issues = issues;
    }, (err) => this.err = err.statusText);
  }

  sortByStatus(): void {
    this.issues = this.tableDataService.sortByStatus(this.issues);
  }


  sortByIssueSeverity(): void {
    this.issues = this.tableDataService.sortByIssueSeverity(this.issues);
  }

  hideIssue($event: number): void {
    this.tableDataService.hideIssue($event).subscribe(() => {
      this.issues = this.issues.filter(selected => selected.id !== $event);
    });
  }


  sortByDate(): void {
    this.issues = this.tableDataService.sortByDate(this.issues);
  }

  sortbyMounth() {
    alert('january');
  }
}
