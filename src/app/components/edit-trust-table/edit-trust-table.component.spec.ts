import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrustTableComponent } from './edit-trust-table.component';

describe('EditTrustTableComponent', () => {
  let component: EditTrustTableComponent;
  let fixture: ComponentFixture<EditTrustTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrustTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrustTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
