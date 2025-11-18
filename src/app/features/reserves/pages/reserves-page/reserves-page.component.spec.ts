import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservesPageComponent } from './reserves-page.component';

describe('ReservesPageComponent', () => {
  let component: ReservesPageComponent;
  let fixture: ComponentFixture<ReservesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
