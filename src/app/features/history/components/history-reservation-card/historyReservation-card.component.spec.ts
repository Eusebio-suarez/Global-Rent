import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryReservationCardComponent } from './historyReservation-card.component';

describe('ReservationCardComponent', () => {
  let component: HistoryReservationCardComponent;
  let fixture: ComponentFixture<HistoryReservationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryReservationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
