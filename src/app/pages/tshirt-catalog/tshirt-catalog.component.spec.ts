import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtCatalogComponent } from './tshirt-catalog.component';

describe('TshirtCatalogComponent', () => {
  let component: TshirtCatalogComponent;
  let fixture: ComponentFixture<TshirtCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TshirtCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TshirtCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
