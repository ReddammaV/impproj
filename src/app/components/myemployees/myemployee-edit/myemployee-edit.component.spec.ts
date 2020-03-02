import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemployeeEditComponent } from './myemployee-edit.component';

describe('MyemployeeEditComponent', () => {
  let component: MyemployeeEditComponent;
  let fixture: ComponentFixture<MyemployeeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemployeeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
