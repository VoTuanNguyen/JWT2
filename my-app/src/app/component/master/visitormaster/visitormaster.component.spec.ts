import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitormasterComponent } from './visitormaster.component';

describe('VisitormasterComponent', () => {
  let component: VisitormasterComponent;
  let fixture: ComponentFixture<VisitormasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitormasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitormasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
