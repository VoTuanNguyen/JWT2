import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedatatableComponent } from './employeedatatable.component';

describe('EmployeedatatableComponent', () => {
  let component: EmployeedatatableComponent;
  let fixture: ComponentFixture<EmployeedatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
