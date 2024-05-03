import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { IClothes } from '../../interfaces/clothes.interface';



@Component({
  selector: 'app-clothes-cart',
  standalone: true,
  imports: [ MatDividerModule, MatListModule ],
  templateUrl: './clothes-cart.component.html',
  styleUrl: './clothes-cart.component.css'
})
export class ClothesCartComponent implements OnInit, OnChanges{
  @Input("clothesList") addedClothesList: IClothes[] = [];

  ngOnInit() {
    console.log(this.addedClothesList);        
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.addedClothesList);        
  }
}
