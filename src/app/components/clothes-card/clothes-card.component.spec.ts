import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCardComponent } from './clothes-card.component';

describe('ClothesCardComponent', () => {
  let component: ClothesCardComponent;
  let fixture: ComponentFixture<ClothesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
