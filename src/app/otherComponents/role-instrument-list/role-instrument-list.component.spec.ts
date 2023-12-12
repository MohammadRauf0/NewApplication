import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleInstrumentListComponent } from './role-instrument-list.component';

describe('RoleInstrumentListComponent', () => {
  let component: RoleInstrumentListComponent;
  let fixture: ComponentFixture<RoleInstrumentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleInstrumentListComponent]
    });
    fixture = TestBed.createComponent(RoleInstrumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
