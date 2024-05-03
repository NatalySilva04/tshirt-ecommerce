import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IClothes } from '../../interfaces/clothes.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-clothes-card',
  standalone: true,
  imports: [ MatCardModule, NgIf ],
  templateUrl: './clothes-card.component.html',
  styleUrl: './clothes-card.component.css'
})
export class ClothesCardComponent implements OnInit {
  @Input() clothes?: IClothes;
  @Input() teste?: string;
  @Output() addClothesToCart: EventEmitter<void> = new EventEmitter();


  constructor() { 
    //console.log(this.clothes);    
    //console.log(this.teste);
  } 

  ngOnInit() {
    //console.log(this.clothes);
    //console.log(this.teste);
  }

  addToShoppingCart() {
    this.addClothesToCart.emit();
    console.log("Peça adicionada ao carrinho com sucesso!");
  }
}
