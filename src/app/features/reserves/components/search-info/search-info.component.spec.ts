import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInfoComponent } from './search-info.component';

describe('SearchInfoComponent', () => {
  let component: SearchInfoComponent;
  let fixture: ComponentFixture<SearchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
