import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCartComponent } from './clothes-cart.component';

describe('ClothesCartComponent', () => {
  let component: ClothesCartComponent;
  let fixture: ComponentFixture<ClothesCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
