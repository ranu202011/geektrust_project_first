import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustTableComponent } from './trust-table.component';

describe('TrustTableComponent', () => {
  let component: TrustTableComponent;
  let fixture: ComponentFixture<TrustTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
