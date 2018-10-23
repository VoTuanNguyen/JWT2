import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitordatatableComponent } from './visitordatatable.component';

describe('VisitordatatableComponent', () => {
  let component: VisitordatatableComponent;
  let fixture: ComponentFixture<VisitordatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitordatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitordatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
