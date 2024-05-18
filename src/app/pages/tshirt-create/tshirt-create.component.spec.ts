import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtCreateComponent } from './tshirt-create.component';

describe('TshirtCreateComponent', () => {
  let component: TshirtCreateComponent;
  let fixture: ComponentFixture<TshirtCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TshirtCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
