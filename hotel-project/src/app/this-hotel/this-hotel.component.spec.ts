import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisHotelComponent } from './this-hotel.component';

describe('ThisHotelComponent', () => {
  let component: ThisHotelComponent;
  let fixture: ComponentFixture<ThisHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
