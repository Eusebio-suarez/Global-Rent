import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAdminCardComponent } from './car-admin-card.component';

describe('CarAdminCardComponent', () => {
  let component: CarAdminCardComponent;
  let fixture: ComponentFixture<CarAdminCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarAdminCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarAdminCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
