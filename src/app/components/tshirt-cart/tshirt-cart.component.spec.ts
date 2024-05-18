import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtCartComponent } from './tshirt-cart.component';

describe('TshirtCartComponent', () => {
  let component: TshirtCartComponent;
  let fixture: ComponentFixture<TshirtCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TshirtCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
