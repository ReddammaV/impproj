import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemployeeViewComponent } from './myemployee-view.component';

describe('MyemployeeViewComponent', () => {
  let component: MyemployeeViewComponent;
  let fixture: ComponentFixture<MyemployeeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemployeeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
