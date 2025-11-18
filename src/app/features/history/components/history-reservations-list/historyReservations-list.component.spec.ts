import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsListComponent } from './historyReservations-list.component';

describe('ReservationsListComponent', () => {
  let component: ReservationsListComponent;
  let fixture: ComponentFixture<ReservationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
