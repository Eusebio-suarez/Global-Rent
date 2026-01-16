import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesInfoComponent } from './reserves-info.component';

describe('ReservesInfoComponent', () => {
  let component: ReservesInfoComponent;
  let fixture: ComponentFixture<ReservesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
