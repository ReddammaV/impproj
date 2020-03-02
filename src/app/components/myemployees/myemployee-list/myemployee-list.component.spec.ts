import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemployeeListComponent } from './myemployee-list.component';

describe('MyemployeeListComponent', () => {
  let component: MyemployeeListComponent;
  let fixture: ComponentFixture<MyemployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
