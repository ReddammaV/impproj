import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemployeesComponent } from './myemployees.component';

describe('MyemployeesComponent', () => {
  let component: MyemployeesComponent;
  let fixture: ComponentFixture<MyemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
