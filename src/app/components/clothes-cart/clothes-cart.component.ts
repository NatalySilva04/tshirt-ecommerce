import { Component, Input } from '@angular/core';
import { IClothes } from '../../interfaces/clothes.interface';



@Component({
  selector: 'app-clothes-cart',
  standalone: true,
  imports: [  ],
  templateUrl: './clothes-cart.component.html',
  styleUrl: './clothes-cart.component.css'
})
export class ClothesCartComponent {
  @Input() addedClothesList: IClothes[] = [];
}
