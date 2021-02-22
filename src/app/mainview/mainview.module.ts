import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './table/table.component';
import { TableBodyComponent } from './table/table-body/table-body.component';
import { TableBodyItemComponent } from './table/table-body/table-body-item/table-body-item.component';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from './header/pipes/filter.pipe';
import { ByStatusComponent } from './table/table-chekbox/sort/by-status/by-status.component';
import { MainviewComponent } from './mainview/mainview.component';
import { AddCommentComponent } from './table/table-body/table-body-item/add-comment/add-comment.component';
import {NgbAlertModule, NgbDatepickerModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { AddIssueComponent } from './table/table-body/add-issue/add-issue.component';

@NgModule({
  declarations: [TableComponent,
    TableBodyComponent,
    TableBodyItemComponent,
    HeaderComponent,
    FilterPipe,
    ByStatusComponent,
    MainviewComponent,
    AddCommentComponent,
    AddIssueComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTooltipModule,
    NgbDropdownModule,
  ],
  exports: [MainviewComponent],
})
export class MainViewModule { }
