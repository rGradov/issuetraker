import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableBodyComponent } from './table/table-body/table-body.component';
import { TableBodyItemComponent } from './table/table-body/table-body-item/table-body-item.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './header/pipes/filter.pipe';
import { DropdownComponent } from './table/table-body/table-body-item/dropdown/dropdown.component';
import { ByStatusComponent } from './table/table-chekbox/sort/by-status/by-status.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AddCommentComponent } from './table/table-body/table-body-item/add-comment/add-comment.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TableComponent,
    TableBodyComponent,
    TableBodyItemComponent,
    HeaderComponent,
    FilterPipe,
    DropdownComponent,
    ByStatusComponent,
    MainviewComponent,
    AddCommentComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbAlertModule,
    ],
  exports: [MainviewComponent],
})
export class MainViewModule { }
