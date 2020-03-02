import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepagecrudComponent } from './singlepagecrud.component';

describe('SinglepagecrudComponent', () => {
  let component: SinglepagecrudComponent;
  let fixture: ComponentFixture<SinglepagecrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglepagecrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepagecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
