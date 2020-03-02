import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemployeeComponent } from './myemployee.component';

describe('MyemployeeComponent', () => {
  let component: MyemployeeComponent;
  let fixture: ComponentFixture<MyemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
