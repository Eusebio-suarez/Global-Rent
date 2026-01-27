import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarModalComponent } from './create-car-modal.component';

describe('CreateCarModalComponent', () => {
  let component: CreateCarModalComponent;
  let fixture: ComponentFixture<CreateCarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCarModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
