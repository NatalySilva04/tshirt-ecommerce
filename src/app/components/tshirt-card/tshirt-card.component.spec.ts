import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtCardComponent } from './tshirt-card.component';

describe('TshirtCardComponent', () => {
  let component: TshirtCardComponent;
  let fixture: ComponentFixture<TshirtCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TshirtCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
