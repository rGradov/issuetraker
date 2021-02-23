import {
  Component, Input, OnInit, Output, EventEmitter,
} from '@angular/core';
import {TableDataService} from '../table/table-service/table-data.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() search: string;
  isLogin: boolean;
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(model: string) {
    this.search = model;
    this.searchChange.emit(model);
  }

  constructor(private tb: TableDataService, private Auth: AuthService) {
  }

  ngOnInit(): void {
    this.isLogin = this.Auth.logIn;
  }

  openAddItem() {
    this.tb.openInput = !this.tb.openInput;
  }
}
