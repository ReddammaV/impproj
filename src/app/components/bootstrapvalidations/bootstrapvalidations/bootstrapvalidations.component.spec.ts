import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapvalidationsComponent } from './bootstrapvalidations.component';

describe('BootstrapvalidationsComponent', () => {
  let component: BootstrapvalidationsComponent;
  let fixture: ComponentFixture<BootstrapvalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapvalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapvalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
