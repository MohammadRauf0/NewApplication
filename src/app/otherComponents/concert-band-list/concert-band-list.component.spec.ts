import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertBandListComponent } from './concert-band-list.component';

describe('ConcertBandListComponent', () => {
  let component: ConcertBandListComponent;
  let fixture: ComponentFixture<ConcertBandListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcertBandListComponent]
    });
    fixture = TestBed.createComponent(ConcertBandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
