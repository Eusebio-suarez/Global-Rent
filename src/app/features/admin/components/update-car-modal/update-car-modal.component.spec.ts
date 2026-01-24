import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCarModalComponent } from './update-car-modal.component';

describe('UpdateCarModalComponent', () => {
  let component: UpdateCarModalComponent;
  let fixture: ComponentFixture<UpdateCarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCarModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
