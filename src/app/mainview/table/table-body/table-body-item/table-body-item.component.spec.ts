import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBodyItemComponent } from './table-body-item.component';

describe('TableBodyItemComponent', () => {
  let component: TableBodyItemComponent;
  let fixture: ComponentFixture<TableBodyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableBodyItemComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
