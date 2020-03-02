import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsingleComponent } from './materialsingle.component';

describe('MaterialsingleComponent', () => {
  let component: MaterialsingleComponent;
  let fixture: ComponentFixture<MaterialsingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
