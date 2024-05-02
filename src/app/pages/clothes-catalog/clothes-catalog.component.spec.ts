import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesCatalogComponent } from './clothes-catalog.component';

describe('ClothesCatalogComponent', () => {
  let component: ClothesCatalogComponent;
  let fixture: ComponentFixture<ClothesCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClothesCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClothesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
