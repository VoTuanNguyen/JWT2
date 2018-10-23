import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentdatatableComponent } from './departmentdatatable.component';

describe('DepartmentdatatableComponent', () => {
  let component: DepartmentdatatableComponent;
  let fixture: ComponentFixture<DepartmentdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
