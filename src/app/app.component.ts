import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { HeaderComponent } from './components/header/header.component';
import { ClothesCatalogComponent } from './pages/clothes-catalog/clothes-catalog.component';
import { ClothesCartComponent } from './components/clothes-cart/clothes-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    ClothesCatalogComponent, 
    MatSidenavModule,
    ClothesCartComponent,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "'it's me you're looking for...";
  addedClothesList: IClothes[] = [];

  addClothesToCart(clothes: IClothes) {
    this.addedClothesList.push(clothes);
  }
}
